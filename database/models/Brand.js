
 module.exports = (sequelize, DataTypes) => {  //hacemos directamente el module.exports de la funcion 
    
    //Definimos la estructura de la tabla: 
    const Brand = sequelize.define("Brand",         
        {     
           //no es necesario indicar el idBrans
            name:DataTypes.STRING
        }, {});
    
    return Brand;

}