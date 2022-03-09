module.exports = (sequelize, DataTypes) => {

    const Cart = sequelize.define("Cart",
        {
            idUser: DataTypes.INTEGER
        }, {});


    
    Cart.associate = funcion (models)
    {                           

        Cart.belongsTo (models.User, {
            as: "user",  //indicamos el nombre de la relacion
            foreignKey: "idUser" // En la tabla carts, como FK guardo un idUser
        })
    };

    return Cart; 

};
 