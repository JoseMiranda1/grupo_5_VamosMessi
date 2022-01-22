const fs=require("fs")
const path=require("path")
const filePath=path.resolve(__dirname,"../data/products.json")
const productsArray=JSON.parse(fs.readFileSync(filePath,"utf8"))


const controllers={
    products: (req,res)=>{
        res.render("products",{
            productsList: productsArray
        })
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

        productsArray.push({
        nameProduct: req.params.name-product-edit,
        tradeEdit: req.params.trade-edit , 
        compositionCreate: req.params.composition-create,
        propertyCreate: req.params.property-create,
        imgCreate: req.params.image-create,
        priceCreate: req.params.price-create,
        desctiptionCreate: req.params.description-create,
        })
        fs.writeFileSync(filePath,JSON.stringify(productsArray, null, " "))

        res.redirect("/products")
    },

    update:(req,res)=>{
        res.send("vamos a actualizar un producto")
    },
    delete:(req,res)=>{
        const productId= req.params.id
        res.send("vamos a borrar un producto con ID "+ productId)
    },
    productCart:(req,res)=> {        
        res.render("productCart");
    },
}
module.exports=controllers