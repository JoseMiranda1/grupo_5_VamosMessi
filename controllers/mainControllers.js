
const controllers={
    home:(req,res)=>{
       res.render("home");
    },
    productCart:(req,res)=> {        
        res.render("productCart");
    },
    productDetail:(req,res)=>{
        res.render("productDetail")
    },
    productEdit:(req,res)=>{
        res.render("productEdit")
    },
    productCreate:(req,res)=>{
        res.render("productCreate")
    },
    profile:(ewq,res)=>{
        const usuarioPerfil=[{
            name: "José Miranda",
            document: 4076484854,    
            tel: 4152415241,
            direccion: "calle falsa 123"
        }]
        
        res.render("profile",{user: usuarioPerfil})

    }
    
}
module.exports= controllers;