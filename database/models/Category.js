module.exports = (sequelize, DataTypes) => {

    const Category = sequelize.define("Category",
        {
            typeOfCategory: DataTypes.STRING
        }, {});

    return Category;

}