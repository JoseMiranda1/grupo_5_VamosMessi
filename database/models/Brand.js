module.exports = (sequelize, DataTypes) => {  //hacemos directamente el module.exports de la funcion 

    //Definimos la estructura de la tabla: 
    const Brand = sequelize.define("Brand",
        {
            idBrand:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            //no es necesario indicar el idBrand porque Sequelize lo hace automático
            name: DataTypes.STRING
        }, {
          
            
        });

        Brand.associate = function (models) {
            
            Brand.hasMany(models.Product, {
                as: "relBrandProduct",
                foreignKey: "idBrand",
            });
        };

    return Brand;

};