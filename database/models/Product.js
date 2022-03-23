/**
 * 
 * @param {import('sequelize').Sequelize}sequelize
 * @param {import('sequelize/dist').DataTypes}DataTypes
 * 
 */

 module.exports = (sequelize, DataTypes) => {
    //1)definimos en formato objeto la informacion de las tablas
    const Product = sequelize.define("Product",         //en esta variable local estamos generando el modelo producto que luego retornamos. Exportamos toda la funcion
        {                                              //"define" siempre lleva 3 argumentos: ALIAS del modelo-las columnas-la config. adicional
            idProduct:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            name: DataTypes.STRING,
            price: DataTypes.DECIMAL(18, 2),
            stock: DataTypes.INTEGER,
            image: DataTypes.STRING,
            description:DataTypes.STRING, //DESCRIPTION
            idBrand: DataTypes.INTEGER,
            createDate: DataTypes.DATE

        }, {
        });



    Product.associate = function (models)        //con las asociaciones mostramos las relaciones
    {

        Product.belongsTo(models.Brand, {   //le pasamos el modelo con el cual queremos q se relacione
            as: "relProductBrand",                                 //y como segundo argumento un OL detallando la relacion
            foreignKey: "idBrand"             //Indicamos que en la tabla products estamos guardando como FK  un idBrand
        })
        Product.belongsToMany(models.Cart, {
            as: "relProductCart",
            through: "cartproduct",
            foreignKey: "idProduct",
            otherKey: "idCart",

        });
        Product.belongsToMany(models.Category, {
            as: "relProductCategory",
            through: "categoryproduct",
            foreignKey: "idProduct",
            otherKey: "idCategories",

        });

        Product.belongsToMany(models.Color,{
            as: "relProductColor", 
            through: "colorproduct",
            foreignKey: "idProduct",
            otherKey: "idColor",

        })
        
        Product.belongsToMany(models.Size, {
            as: "relProductSize",
            through: "sizeproduct",
            foreignKey: "idProduct",
            otherKey: "idSize",
    
        })
    };

    

    return Product;

};



