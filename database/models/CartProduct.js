
module.exports = (sequelize, DataTypes) => {

    const CartProduct = sequelize.define("CartProduct",
        {
            productPrice: DataTypes.DECIMAL(18, 2),
            quantity: DataTypes.INTEGER,
            idProduct: DataTypes.INTEGER,
            idCart: DataTypes.INTEGER
        }, {});

    return CartProduct;

}