module.exports = (sequelize, DataTypes) => {

    const CartProduct = sequelize.define("CartProduct",
        {
            productPrice: DataTypes.DECIMAL(18, 2),
            quantity: DataTypes.INTEGER,
            //idProduct: DataTypes.INTEGER,
           // idCart: DataTypes.INTEGER
        }, {
            
            tableName:"cartproduct",
           
        
            
        });



    /*CartProduct.associate = function (models) 
    { 
        CartProduct.belongsTo(models.Product, {
            as: "relCartproductProduct",
            foreignKey: "productId"
        })
    };
    CartProduct.associate = function (models) 
    { 
        CartProduct.belongsTo(models.Cart, {
            as: "relCartproductCart",
            foreignKey: "cartId"
        })
    };*/

    return CartProduct;
    
};