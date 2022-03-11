module.exports = (sequelize, DataTypes) => {

    const CategoryProduct = sequelize.define("CategoryProduct",
        {
            idProduct: DataTypes.INTEGER,
            idCategories: DataTypes.INTEGER
        }, {});

  

    CategoryProduct.associate = function (models)
    {    

       CategoryProduct.belongsTo(models.Product, {   
       as:"product",                               
       foreignKey: "idProduct"             
       })   
    },

    CategoryProduct.associate = function (models)
    {    

       CategoryProduct.belongsTo(models.Category, {   
       as:"category",                               
       foreignKey: "idCategories" 
       })     

    };   

    return CategoryProduct;

};