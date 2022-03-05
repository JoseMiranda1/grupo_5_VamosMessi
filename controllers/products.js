const {Product}= require("../database/models"); //desestructuramos el objeto (require("../database/models")) tomando las partes q nos -->Product

const fs=require("fs")
const path=require("path")
const filePath=path.resolve(__dirname,"../data/products.json")
const productsArray=JSON.parse(fs.readFileSync(filePath,"utf8"))


const controllers={
   
   /* products: (req,res)=>{
        res.render("products",{
            productsList: productsArray
        })
    },*/
    products: function(req,res){       //Todos los metodos de sequelize son asincronicos
        Product.findAll({})   
        console.log(products)
    },
    formularioEdit: (req,res)=>{
        res.send("Estas en formulario edit");
    },

    productDetail:(req,res)=>{
        res.render("productDetail")
    },
    read:(req,res)=>{
        const productId= req.params.id
        res.send("Estamos en producto con id " + productId)
    },
    
    productEdit:(req,res)=>{
        res.render("productEdit")
    },
    productCreate:(req,res)=>{
        const productId= req.params.id
        res.render("productCreate", productId)
    },
    add:(req,res)=>{          
        const generateID = () => {
            const lastProduct = productsDB[productsDB.length - 1];
			const lastID = lastProduct.id;
			return lastID + 1;
        }

        productsArray.push({
        id: generateID(),
        nameProduct: req.params.name-product-create,
        tradeEdit: req.params.trade-create , 
        compositionCreate: req.params.composition-create,
        propertyCreate: req.params.property-create,      
        priceCreate: req.params.price-create,
        desctiptionCreate: req.params.description-create,
        })
        fs.writeFileSync(filePath,JSON.stringify(productsArray, null, " "))

        res.redirect("/products")
    },
  
    delete: (req, res) => {
        let idProducto = req.params.id;
        productsArray = productsArray.filter(product => product.id != idProducto);
        fs.writeFileSync(filePath, JSON.stringify(productsDetails, null, ' '));
        res.redirect("/");
    },
    productCart:(req,res)=> {        
        res.render("productCart");
    },
}
module.exports=controllers