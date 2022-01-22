
const controllers={
    home:(req,res)=>{
       res.render("home");
    },
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
    

    profile:(ewq,res)=>{
        const usuarioPerfil=[{
            name: "José Miranda",
            document: 4076484854,    
            tel: 4152415241,
            direccion: "calle falsa 123"
        }]
        
        res.render("profile",{user: usuarioPerfil})

    },
}
module.exports= controllers;