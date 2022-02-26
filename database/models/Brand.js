
 module.exports = (sequelize, DataTypes) => {
    
    const Brand = sequelize.define("Brand",         
        {     
            name:DataTypes.STRING
        }, {});
    
    return Brand;

}