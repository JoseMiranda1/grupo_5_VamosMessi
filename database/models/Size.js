module.exports = (sequelize, DataTypes) => {
    
    const Size= sequelize.define("Size",         
        {     
          typeOfSize:DataTypes.STRING
        }, {});
    
    return Size;

}