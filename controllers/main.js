
const controllers={
    home:(req,res)=>{
        res.render("home")
    },
    productCart:(req,res)=> {        
        res.render("productCart");
    },
    productDetail:(req,res)=>{
        res.render("productDetail")
    }
}
module.exports= controllers;