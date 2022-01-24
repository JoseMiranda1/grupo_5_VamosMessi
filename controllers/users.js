const fs=require("fs")
const path=require("path")
const filePath=path.resolve(__dirname,"../data/users.json")
const usersArray=JSON.parse(fs.readFileSync(filePath,"utf8"))
const bcrypt = require("bcryptjs");

const generateID = () => {
    if(usersArray.length != 0){       
        const lastProduct =  usersArray[Number(usersArray.length) - Number(1)];	         
        const lastID = Number(lastProduct.id) + Number(1);	
        return lastID;
    }else{
        const lastID = 1
        return lastID;
    }
};
const controllers={
    users: (req,res)=>{
        res.render("users",{
            usersList: usersArray
        })
    },
    profile:(ewq,res)=>{
        const usuarioPerfil=[{
            name: "",
            fechaNacimiento: "",  
            tel: 4152415241,
            direccion: "calle falsa 123"
        }]
        
        res.render("usersProfile",{user: usuarioPerfil})

    },
    register: (req,res)=>{       
       

      usersArray.push({
      id: generateID(),
      name: req.body.usuario,
       lastName:req.body.apellido,
      password: req.body.clave,
       email:req.body.email,                
    })
      fs.writeFileSync(filePath,JSON.stringify(usersArray, null, " "))

      return res.redirect("/users/profile")
    }
}


module.exports= controllers;