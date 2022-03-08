/**
 * 
 * @param {import('sequelize').Sequelize}sequelize
 * @param {import('sequelize/dist').DataTypes}DataTypes
 * 
 */

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("User",
        {
            userName: DataTypes.STRING,
            email: DataTypes.STRING,
            userPassword: DataTypes.STRING,
            adress: DataTypes.STRING,
            postCode: DataTypes.STRING,
            country: DataTypes.STRING,
            phone: DataTypes.STRING
        }, {});

    return User;

}