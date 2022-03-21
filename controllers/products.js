const fs = require("fs")
const path = require("path")
const { runInNewContext } = require("vm")
const filePath = path.resolve(__dirname, "../data/products.json")
const productsArray = JSON.parse(fs.readFileSync(filePath, "utf8"))
const db = require("../database/models");



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
    
    },
    productDetail: (req, res) => {
        res.render("productDetail")
    },
   
    productEdit: (req, res) => {
          
        
            db.products.findByPk(req.params.id)
                .then(function (products) {
                    res.render('productEdit', { products: products });
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
    destroy: async (req, res) => {
		const productID = req.params.id;
		db.Product.destroy({ where: { id: productID }});
		return res.redirect("/products");
	},
    productCart: (req, res) => {
        res.render("productCart");
    },

    

        
    
}
module.exports = controllers