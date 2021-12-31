
const controllers={
    home:(req,res)=>{
        res.render("home")
    },
    productCart:(req,res)=> {        
        res.render("productCart");
    },
    productDetail:(req,res)=>{
        res.render("productDetail")
    },
    productEdit:(req,res)=>{
        res.render("productEdit")
    }
}
module.exports= controllers;