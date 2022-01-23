const fs=require("fs")
const path=require("path")
const filePath=path.resolve(__dirname,"../data/users.json")
const usersArray=JSON.parse(fs.readFileSync(filePath,"utf8"))

const controllers={
    users: (req,res)=>{
        res.render("users",{
            usersList: usersArray
        })
    },
    profile:(ewq,res)=>{
        const usuarioPerfil=[{
            name: "José Miranda",
            document: 4076484854,    
            tel: 4152415241,
            direccion: "calle falsa 123"
        }]
        
        res.render("usersProfile",{user: usuarioPerfil})

    },
    add: (req,res)=>{
      usersArray.push({
        name:req.params.usuario,
        lastName:req.params.apellido,
        password:req.params.clave,
        email:req.params.email,                
      })
      fs.writeFileSync(filePath,JSON.stringify(usersArray, null, " "))

      res.redirect("/users")
    }
}


module.exports= controllers;