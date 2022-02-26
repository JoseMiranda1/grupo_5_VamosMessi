module.exports = (sequelize, DataTypes) => {
    
    const Colors= sequelize.define("Colors",         
        {     
            name:DataTypes.STRING,
            
        }, {});
    
    return Colors;

}