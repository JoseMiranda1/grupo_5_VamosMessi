fs = require("fs")
const path = require("path")
const { runInNewContext } = require("vm")
const { Op } = require("sequelize");
const filePath = path.resolve(__dirname, "../data/products.json")
const productsArray = JSON.parse(fs.readFileSync(filePath, "utf8"))
const db = require("../database/models");
const { validationResult } = require("express-validator");




const controllers = {

    products: async (req, res) => {
        try {
            const products = await db.Product.findAll({
                include: {
                    all: true
                }
            });
            res.render("products", { products: products })
        } catch (error) {
            return res.send("error");
        }
    },
    productDetail: async (req, res) => {
        let products = await db.Product.findByPk(req.params.id, {
            include: {
                all: true
            }
        });

        let id= req.params.id;

        if (products) {

            let colors = await db.Color.findAll();
            let brands = await db.Brand.findByPk(products.relProductBrand.idBrand, {
                include:{
                    all:true
                }
            });

           // console.log("ESTA ES LA MARCA DEL PRODUCTO"+brands.name);
            let categories = await db.Category.findAll();
            let sizes = await db.Size.findAll();

            return res.render('productDetail', {
                products: products, colors: colors, brands: brands, categories: categories,
                sizes: sizes, id:id
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
        {
            return res.render('productEdit', {
                products: products, colors: colors, brands: brands, categories: categories,
                sizes: sizes
            });
        }
    },
    productCreate: async (req, res) => {
        try {
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
        let productToUpdate = await db.Product.findByPk(req.params.id, {
            include: {
                all: true
            }
        });
        productToUpdate.name = req.body.productCreate,
            productToUpdate.idBrand = req.body.idBrand,
            productToUpdate.price = req.body.priceCreate,
            productToUpdate.image = req.file ? req.file.filename : 'default-image.jpg',
            productToUpdate.description = req.body.description,
            productToUpdate.stock = req.body.stock,
            productToUpdate.createDate = fecha,
            await productToUpdate.save();
        productToUpdate.addRelProductColor(req.body.colors);
        productToUpdate.addRelProductSize(req.body.sizes);
        productToUpdate.addRelProductCategory(req.body.categories);
        res.redirect("/products")
    },
    add: async (req, res) => {
        const validationErrors = validationResult(req);
        if (!validationErrors.isEmpty()) {
            console.log(validationErrors.mapped())
            const brands = await db.Brand.findAll({});
            const sizes = await db.Size.findAll({});
            const categories = await db.Category.findAll({});
            const colors =await db.Color.findAll({});


            return res.render("productCreate", {
                errorsMessages: validationErrors.mapped(),
                oldData: req.body,
                sizes, categories, brands,colors

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
        productToDelete.removeRelProductColor(productToDelete.relProductColor);
        productToDelete.removeRelProductSize(productToDelete.relProductSize);
        productToDelete.removeRelProductCategory(productToDelete.relProductCategory);
        productToDelete.removeRelProductCart(productToDelete.relProductCart);
        //productToDelete.removeRelProductBrand(productToDelete.relProductBrand);
        const result = await productToDelete.destroy();
        return res.redirect("/products");
    },
    productCart: (req, res) => {
        res.render("productCart");
    },
    listita: async (req, res) => {
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
    },
    search: async (req, res) => {
        console.log("ESTOY EN SEARCH");
        const keyword = req.query.word;
        console.log("ESTO ES LO QUE TRAE EL REQ:QUERY");
        console.log(keyword);
        const products = await db.Product.findAll({
            where: {
                name: {
                    [Op.like]: `%${keyword}%` //"%" + keyword + "%"
                }
            }
        })
        console.log(products);
       // return res.json(products)
        //res.send("hola" + keyword);
        res.render("products", {products:products})
    }
}
module.exports = controllers
