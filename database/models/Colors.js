module.exports = (sequelize, DataTypes) => {
    
    const Colors= sequelize.define("Colors",         
        {     
            color:DataTypes.STRING,
            
        }, {});
    
    return Colors;

}