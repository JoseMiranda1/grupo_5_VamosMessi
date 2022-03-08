module.exports = (sequelize, DataTypes) => {

    const ColorProduct = sequelize.define("ColorProduct",
        {
            idProduct: DataTypes.INTEGER,
            idColor: DataTypes.INTEGER
        }, {});

    return ColorProduct;

}