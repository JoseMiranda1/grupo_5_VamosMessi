const Category = require("./Category");

module.exports = (sequelize, DataTypes) => {

    const Color = sequelize.define("Color",
        {
            idColor:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            color: DataTypes.STRING,

        }, {
           
        });


        Color.associate = function(models){

            Color.belongsToMany(models.Product,{
                as: "relColorProduct", 
                through: "colorproduct",
                foreignKey: "idColor",
                otherKey: "idProduct",
    
            })
        };
       

    return Color;

}