/**
 * 
 * @param {import('sequelize').Sequelize}sequelize
 * @param {import('sequelize/dist').DataTypes}DataTypes
 * 
 */

module.exports = (sequelize, DataTypes) => {
    //1)definimos en formato objeto la informaciomn de las tablas
    const Product = sequelize.define("Product",         //en esta variable local estamos generando el modelo producto que luego retornamos. Exportamos toda la funcion
        {                                              //"define" siempre lleva 3 argumentos: ALIAS del modelo-las columnas-la config. adicional

            name: DataTypes.STRING,
            price: DataTypes.DECIMAL(18, 2),
            stock: DataTypes.INTEGER,
            image: DataTypes.STRING,
            createDate: DataTypes.DATETIME,
            idBrand: DataTypes.INTEGER
        }, {});

    return Product;

}




