module.exports = (sequelize, DataTypes) => {

    const CategoryProduct = sequelize.define("CategoryProduct",
        {
            idProduct: DataTypes.INTEGER,
            idCategories: DataTypes.INTEGER
        }, {});

    return CategoryProduct;

}