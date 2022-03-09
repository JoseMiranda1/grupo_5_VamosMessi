module.exports = (sequelize, DataTypes) => {

    const ColorProduct = sequelize.define("ColorProduct",
        {
            idProduct: DataTypes.INTEGER,
            idColor: DataTypes.INTEGER
        }, {});




    ColorProduct.associate = funcion (models) 
    {                            

        ColorProduct.belongsTo(models.Product, {
                as: "product",
                foreignKey: "idProduct"
    })
    }
    ColorProduct.associate = function (models) 
    {  

        ColorProduct.belongsTo(models.Colors, {
                as: "colors",
                foreignKey: "idColor"
    })

    };
    
    return ColorProduct;
    
};