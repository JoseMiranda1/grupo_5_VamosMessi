module.exports = (sequelize, DataTypes) => {

    const Cart = sequelize.define("Cart",
        {
            idUser: DataTypes.INTEGER
        }, {});

    return Cart;

}