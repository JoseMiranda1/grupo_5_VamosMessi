fs = require("fs")
const path = require("path")
const { runInNewContext } = require("vm")
const { Op } = require("sequelize");
const filePath = path.resolve(__dirname, "../data/products.json")
const productsArray = JSON.parse(fs.readFileSync(filePath, "utf8"))
const db = require("../database/models");
const { validationResult } = require("express-validator");
const { edit } = require("./users");
const controllers = {
    //levanta todos los productos de la bbdd
    products: async (req, res) => {
        try {
            const products = await db.Product.findAll({
                include: {
                    all: true //trae las relaciones
                }
            });
            res.render("products", { products: products })//creo una varaiable para la vista llamada products
            //y guardo en esa variable los productos que encontre en la BBDD
        } catch (error) {
            return res.send("error");
        }
    },
    productDetail: async (req, res) => {
        //metodo que permite la busqueda por ID ---uso eeq.params para obtener lo que viene en la baarra de direcciones (GET)
        let products = await db.Product.findByPk(req.params.id, {
            include: {
                all: true
            }
        });
        let id = req.params.id;
        //si lo encontro mandao toda la info a la vista y sino en el ELSE que muestre que no existe
        if (products) {
            let colors = await db.Color.findAll();
            let brands = await db.Brand.findByPk(products.relProductBrand.idBrand, {//rel de 1 a muchos (tiene 1 sola marca) puedo buscar por Pk
                include: {
                    all: true
                }
            });
            let categories = await db.Category.findAll();
            let sizes = await db.Size.findAll();
            return res.render('productDetail', {
                products: products, colors: colors, brands: brands, categories: categories,
                sizes: sizes, id: id
            });
        }
        else {
            res.render('productNull');
        }
    },
    productEdit: async (req, res) => {
        let products = await db.Product.findByPk(req.params.id, {
            include: {
                all: true
            }
        });
        let colors = await db.Color.findAll();
        let brands = await db.Brand.findAll();
        let categories = await db.Category.findAll();
        let sizes = await db.Size.findAll();
        if (products) {//si products contiene algo ...
            return res.render('productEdit', {
                products: products, colors: colors, brands: brands, categories: categories,
                sizes: sizes
            });
        }
        else {
            res.redirect('/productNull')
        }
    },
    productCreate: async (req, res) => {
        try {//esto permite mostrar los datos para contruir el producto
            let categories = await db.Category.findAll({});
            let sizes = await db.Size.findAll({});
            let colors = await db.Color.findAll({});
            let brands = await db.Brand.findAll({});
            return res.render("productCreate", { categories, sizes, colors, brands });
        }
        catch (error) {
            console.log(error);
        }
    },
    productUpdate: async (req, res) => {
        //cree una funcion que me permite guardar fecha y hora actual
        let date = new Date()
        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()
        let fecha;
        if (month < 10) {
            fecha = `${year}-0${month}-${day}`//mostrar los 2 caracteres agregandole 0 al mes ej: 12-05-1989
        } else {
            fecha = `${year}-${month}-${day}`
        }//traemos todos los datos y todas las relaciones del producto buscado por id para modificarlos
        let productToUpdate = await db.Product.findByPk(req.params.id, {
            include: {
                all: true
            }
        });
              //trae y guarda todas las modificaciones de las vistas
            productToUpdate.name = req.body.name,
            productToUpdate.idBrand = req.body.brand,
            productToUpdate.price = req.body.price,
            productToUpdate.image = req.file ? req.file.filename : productToUpdate.image,
            productToUpdate.description = req.body.description,
            productToUpdate.stock = req.body.stock,
            productToUpdate.createDate = fecha,
            await productToUpdate.save();
            //si yo quiero POR EJ eliminar colores y agregar nuevos debo eliminar las viejas relaciones y agregar las nuevas
            //ELIMINO LAS VIEJAS RELACIONES PARA CREAR LAS NUEVAS MAS ABAJO
            productToUpdate.removeRelProductColor(productToUpdate.relProductColor);
            productToUpdate.removeRelProductSize(productToUpdate.relProductSize);
            productToUpdate.removeRelProductCategory(productToUpdate.relProductCategory);
            //aca actualizamos a LAS NUEVAS RELACIONES
            req.body.colors ? productToUpdate.addRelProductColor(req.body.colors) : productToUpdate.addRelProductColor([1]),
            req.body.sizes ? productToUpdate.addRelProductSize(req.body.sizes) : productToUpdate.addRelProductSize([1]),
            req.body.categories ? productToUpdate.addRelProductCategory(req.body.categories) : productToUpdate.addRelProductCategory([6])
        //los datos que pueden ser muchos (ej colores)nson guardadods a traves de sus relaciones
        res.redirect("/products")
    },
    add: async (req, res) => {
        const validationErrors = validationResult(req);
        if (!validationErrors.isEmpty()) {
            console.log(validationErrors.mapped())
            const brands = await db.Brand.findAll({});
            const sizes = await db.Size.findAll({});
            const categories = await db.Category.findAll({});
            const colors = await db.Color.findAll({});
            return res.render("productCreate", {       //agregamos el render para ver los errores
                errorsMessages: validationErrors.mapped(),//el metodo mapped()nos permite enviar errores a la vista como un objeto
                oldData: req.body, //enviamos los contenidos del req.body en el objeto oldData para preservar los datos completados por el usuario al volver al fomulario
                sizes, categories, brands, colors
            });
        }
        let date = new Date()
        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()
        let fecha;
        if (month < 10) {
            fecha = `${year}-0${month}-${day}`
        } else {
            fecha = `${year}-${month}-${day}`
        }
        const productStored = await db.Product.create({
            name: req.body.name,
            idBrand: req.body.idBrand,
            price: req.body.priceCreate,
            image: req.file ? req.file.filename : 'default-image.jpg',
            description: req.body.description,
            stock: req.body.stock,
            createDate: fecha
        })
        req.body.colors ? productStored.addRelProductColor(req.body.colors) : productStored.addRelProductColor([1]),
        req.body.sizes ? productStored.addRelProductSize(req.body.sizes) : productStored.addRelProductSize([1]),
        req.body.categories ? productStored.addRelProductCategory(req.body.categories) : productStored.addRelProductCategory([6])
        //redireccionando con el nuevo elemento agregado
        try {
            const productsUpdated = await db.Product.findAll({
                include: {
                    all: true
                }
            });
            res.render("products", { products: productsUpdated })
        } catch (error) {
            return res.send("error");
        }
        // res.redirect("/products")
    },
    destroy: async (req, res) => {
        const productToDelete = await db.Product.findByPk(req.params.id, {
            include: { all: true }
        })
        //luego que encontre el objeto por ID, elimino primero sus relaciones para despues borrarlo
        //sino se hace de esa manera, se rompe
        productToDelete.removeRelProductColor(productToDelete.relProductColor);
        productToDelete.removeRelProductSize(productToDelete.relProductSize);
        productToDelete.removeRelProductCategory(productToDelete.relProductCategory);
        productToDelete.removeRelProductCart(productToDelete.relProductCart);
        //luego de borrada las relaciones borro el producto
        const result = await productToDelete.destroy();
        return res.redirect("/products");
    },
    productCart: (req, res) => {
        res.render("productCart");
    },
    /*listita: async (req, res) => {
        try {
            const products = await db.Product.findAll({
                include: {
                    all: true
                }
            });
            res.render("listita", { products: products })
        } catch (error) {
            return res.send("error");
        }
    },*/
    search: async (req, res) => {
        const keyword = req.query.word;
        const products = await db.Product.findAll({
            where: {
                name: {
                    [Op.like]: `%${keyword}%` //"%" + keyword + "%" GRACUAS A LOS COMODINES %%%% PUEDO BUSCAR PALABRAS
                    //QUE CONTENGRAN LO QUE VIENE EN REQ.QUERY (PALABRA BUSCADA)
                }
            }
        })
        console.log(products);
        //MUESTRO LOS PRODUCTOS QUE CUMPLEN CON ESA CONDICION       
        res.render("products", { products: products })
    }
}
module.exports = controllers