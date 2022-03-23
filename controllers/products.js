const fs = require("fs")
const path = require("path")
const { runInNewContext } = require("vm")
const { Op } = require("sequelize");
const filePath = path.resolve(__dirname, "../data/products.json")
const productsArray = JSON.parse(fs.readFileSync(filePath, "utf8"))
const db = require("../database/models");



<<<<<<< HEAD

const controllers = {

    products: (req, res) => {
        res.render("products", {
            productsList: productsArray
        })
=======
/*const generateID = () => {
    if (db.length != 0) {
        const lastProduct = db[Number(db.length) - Number(1)];
        const lastID = Number(lastProduct.id) + Number(1);
        return lastID;
    } else {
        const lastID = 1
        return lastID;
    }
};*/


const controllers = {
    products: async(req, res) => {
       
            try{
                    const products = await db.Product.findAll({ include: {
                        all:true
                    }
    
    
    
                       /*[ {association: "relProductBrand"},
                        {association:"relProductColor"},]*/
                    });//incluye todas las relacion
                    console.log(products);
                    res.render("products", {products:products})
            }catch(error){
                return res.send("error");
            }
    
>>>>>>> 2980e8dd20bdf95ad53186b0e5362d3a3ebd34ce
    },


    productDetail: (req, res) => {
<<<<<<< HEAD
        let products = db.Product.findByPk(req.params.id, {
            include: {
                all: true
            }
        });
        let colors = db.Color.findAll();
        let brands = db.Brand.findAll();
        let categories = db.Category.findAll();
        let sizes = db.Size.findAll();
        console.log("ESTE ES EL CONTENIDO");
        console.log(sizes);


        Promise.all([products, colors, brands, categories, sizes])

            .then(function ([products, colors, brands, categories, sizes]) {



                res.render('productDetail', {
                    products: products, colors: colors, brands: brands, categories: categories,
                    sizes: sizes
                });
            })
    },

    productEdit: (req, res) => {

        let products = db.Product.findByPk(req.params.id, {
            include: {
                all: true
            }
        });
        let colors = db.Color.findAll();
        let brands = db.Brand.findAll();
        let categories = db.Category.findAll();
        let sizes = db.Size.findAll();


        Promise.all([products, colors, brands, categories, sizes])

            .then(function ([products, colors, brands, categories, sizes]) {

                console.log(products.relProductBrand.idBrand);

                res.render('productEdit', {
                    products: products, colors: colors, brands: brands, categories: categories,
                    sizes: sizes
                });
            })

=======
        res.render("productDetail")
    },
   
    productEdit: (req, res) => {
          
        
            db.products.findByPk(req.params.id)
                .then(function (products) {
                    res.render('productEdit', { products: products });
                })
>>>>>>> 2980e8dd20bdf95ad53186b0e5362d3a3ebd34ce
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
        
        

        productToUpdate.name = req.body.name,
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
<<<<<<< HEAD



    add: async (req, res) => {

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
            createDate: fecha,

        }

        )
        req.body.colors ? productStored.addRelProductColor(req.body.colors) : productStored.addRelProductColor([1]),
            req.body.sizes ? productStored.addRelProductSize(req.body.sizes) : productStored.addRelProductSize([1]),
            req.body.categories ? productStored.addRelProductCategory(req.body.categories) : productStored.addRelProductCategory([6]),



            res.redirect("/products")
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
        const result= await productToDelete.destroy();


        return res.send("El producto ha sido eliminado");



    },
=======
    destroy: async (req, res) => {
		const productID = req.params.id;
		db.Product.destroy({ where: { id: productID }});
		return res.redirect("/products");
	},
>>>>>>> 2980e8dd20bdf95ad53186b0e5362d3a3ebd34ce
    productCart: (req, res) => {
        res.render("productCart");
    },

<<<<<<< HEAD
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
        const keyword = req.query.word;
        const products = await db.Product.findAll({
            where: {
                name: {
                    [Op.like]: `%${keyword}%` //"%" + keyword + "%"
                }
            }
        })
        return res.json(products)
        //res.send("hola" + keyword);
        //res.render("listita", {products:products})
    }
=======
    

        
    
>>>>>>> 2980e8dd20bdf95ad53186b0e5362d3a3ebd34ce
}
module.exports = controllers