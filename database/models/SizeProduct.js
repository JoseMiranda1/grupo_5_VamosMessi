module.exports = (sequelize, DataTypes) => {

    const SizeProduct = sequelize.define("SizeProduct",
        {
            idProduct: DataTypes.INTEGER,
            idSize: DataTypes.INTEGER
        }, {});

    return SizeProduct;

}