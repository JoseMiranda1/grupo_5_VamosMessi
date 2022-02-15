
const controllers={
    home:(req,res)=>{
       res.render("home");
    },
<<<<<<< HEAD
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
    
=======
    cambiosDevoluciones:(req,res)=>{
        res.render("cambiosDevoluciones");
    },
    terminosCondiciones: (req,res)=>{ 
        res.render("terminosCondiciones")
    },
    politica:(req,res)=>{
        res.render("politica")
    },
    informacion:(req,res)=>{
        res.render("informacion")
    },    

   
>>>>>>> afd22df9dd1d1b18dd45de0a334356fa31232ef6
}
module.exports= controllers;