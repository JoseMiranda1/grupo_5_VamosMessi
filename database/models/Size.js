module.exports = (sequelize, DataTypes) => {

  const Size = sequelize.define("Size",
    {
      idSize:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
      typeOfSize: DataTypes.STRING
    }, {
      
    });

    Size.associate=function(models){
      Size.belongsToMany(models.Product,{
        as: "relSizeProduct", 
        through: "sizeproduct",
        foreignKey: "idSize",
        otherKey: "idProduct",
  
    })

    };

    

  return Size;

}