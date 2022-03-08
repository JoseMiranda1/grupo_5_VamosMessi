
module.exports = (sequelize, DataTypes) => {  //hacemos directamente el module.exports de la funcion 

    //Definimos la estructura de la tabla: 
    const Brand = sequelize.define("Brand",
        {
            //no es necesario indicar el idBrand porque Sequelize lo hace automático
            name: DataTypes.STRING
        }, {});

    return Brand;

}