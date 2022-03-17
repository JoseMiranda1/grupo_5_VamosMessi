const fs = require("fs")
const path = require("path")
const { runInNewContext } = require("vm")
const filePath = path.resolve(__dirname, "../data/products.json")
const productsArray = JSON.parse(fs.readFileSync(filePath, "utf8"))
const db = require("../database/models");



/*const generateID = () => {
    if (productsArray.length != 0) {
        const lastProduct = productsArray[Number(productsArray.length) - Number(1)];
        const lastID = Number(lastProduct.id) + Number(1);
        return lastID;
    } else {
        const lastID = 1
        return lastID;
    }
};*/


const controllers = {
    products: (req, res) => {
        res.render("products", {
            productsList: productsArray
        })
    },
    productDetail: (req, res) => {
        res.render("productDetail")
    },
    read: (req, res) => {
        const productId = req.params.id
        res.send("Estamos en producto con id " + productId)
    },
    productEdit: (req, res) => {
          
        
            db.products.findByPk(req.params.id)
                .then(function (products) {
                    res.render('products/productEdit', { products: products });
                })
    },
    productCreate: async (req, res) => {
        try {
            let categories = await db.Category.findAll({});
            let sizes = await db.Size.findAll({});
            let colors = await db.Color.findAll({});
            let brands= await db.Brand.findAll({});
            return res.render("productCreate", { categories, sizes, colors, brands });
        }
        catch (error) {
            console.log(error);
        }
    },
    add: async(req, res) => {
        //calculando fecha actual para insertar en la bbdd
        let date = new Date()
        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()
        let fecha;
        if (month < 10) {
            fecha=`${year}-0${month}-${day}`
        } else {
            fecha=`${year}-${month}-${day}`

        }
        console.log(req.body);
        const productStored = await db.Product.create({

            name: req.body.productCreate,
            idBrand: req.body.idBrand,
            price: req.body.priceCreate,
            image: req.file ? req.file.filename : 'default-image.jpg',//ver multer porque no cargan las img 
            description: req.body.description,
            stock: req.body.stock,
            createDate: fecha,
            //color:req.body.color, FALTA AGREGAR DATOS A TABLAS INTERMEDIAS (CLASES JAVI)
        }
        
        )
        productStored.addRelProductColor(req.body.colors);
        productStored.addRelProductSize(req.body.sizes);
        productStored.addRelProductCategory(req.body.categories);
        
        ;


        res.redirect("/products")
    },
    delete: (req, res) => {
        let idProducto = req.params.id;
        productsArray = productsArray.filter(product => product.id != idProducto);
        fs.writeFileSync(filePath, JSON.stringify(productsDetails, null, ' '));
        res.redirect("/");
    },
    productCart: (req, res) => {
        res.render("productCart");
    },

    listita: async(req,res)=>{
        try{
                const products = await db.Product.findAll({ include: {
                    all:true
                }




                   /*[ {association: "relProductBrand"},
                    {association:"relProductColor"},]*/
                });//incluye todas las relacion
                console.log(products);
                res.render("listita", {products:products})
        }catch(error){
            return res.send("error");
        }

        
    }
}
module.exports = controllers