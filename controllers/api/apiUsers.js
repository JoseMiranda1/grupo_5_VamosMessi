const {User} = require('../../database/models');


module.exports = {

    show: async (req,res) => {
        const users = await User.findAll({
        include: ['relUserCart']});
       return res.json({
           total: users.length,//en la clave "total" contamos la cant de productos que hay
           users: users  //en la clave "products" mandamos el array de productos
        //status: "ok"
       }) 
    },
    /*
    show: async (req,res) => {
        const users = await User.findAll({
        include: ['relUserCart']});
       return res.json({
           total: users.length,
           users: users.map(function(user){
               return {
                   id: user.idUser,
                   name: user.userName,
                   email: user.email,
                   detail:"/api/users/" + user.idUser
               }
               
            })
           })
        }*/

    

    detail: async (req,res) => {
        const user = await User.findByPk(req.params.id,{
        include: ['relUserCart']});
       return res.status(200).json(user);
    }

    
};

