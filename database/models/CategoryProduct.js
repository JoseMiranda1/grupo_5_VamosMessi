module.exports = (sequelize, DataTypes) => {

    const CategoryProduct = sequelize.define("CategoryProduct",
        {
            idProduct: DataTypes.INTEGER,
            idCategories: DataTypes.INTEGER
        }, {});

  

    CategoryProduct.associate = function (models) 
    {    

       CategoryProduct.belongsTo(models.idProduct, {   
       as:"product",                               
       foreignKey: "idProduct"             
       })   
    },

    CategoryProduct.associate = function (models)
    {    

       CategoryProduct.belongsTo(models.idCategory, {   
       as:"category",                               
       foreignKey: "idCategories" 
       })     

    };   

    return CategoryProduct;

};