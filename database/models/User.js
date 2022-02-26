/**
 * 
 * @param {import('sequelize').Sequelize}sequelize
 * @param {import('sequelize/dist').DataTypes}DataTypes
 * 
 */

 module.exports = (sequelize, DataTypes) => {
    
    const User = sequelize.define("User",         
        {     
            username: DataTypes.STRING,
            email:DataTypes.STRING,
            userPassword:DataTypes.STRING,
	        adress:DataTypes.STRING,
            postCode:DataTypes.STRING,
            country:DataTypes.STRING,
	        phone:DataTypes.DataTypes.STRING 
        }, {});
    
    return User;

}