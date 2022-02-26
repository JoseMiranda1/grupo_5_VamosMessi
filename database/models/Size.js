module.exports = (sequelize, DataTypes) => {
    
    const Size= sequelize.define("Size",         
        {     
          name:DataTypes.STRING
        }, {});
    
    return Size;

}