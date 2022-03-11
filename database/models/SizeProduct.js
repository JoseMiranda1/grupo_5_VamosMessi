module.exports = (sequelize, DataTypes) => {

    const SizeProduct = sequelize.define("SizeProduct",
        {
            idProduct: DataTypes.INTEGER,
            idSize: DataTypes.INTEGER
        }, {});

 


     SizeProduct.associate=function(models)
    {    

        SizeProduct.belongsTo(models.idProduct, {   
        as:"product",                               
        foreignKey: "idProduct"             
        })   
    },

    SizeProduct.associate=function(models){    

        SizeProduct.belongsTo(models.Size, {   
        as:"size",                               
        foreignKey: "idSize" 
    })          
    }; 

    return SizeProduct;

};

