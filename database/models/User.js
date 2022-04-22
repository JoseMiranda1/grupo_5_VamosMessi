/**
 * 
 * @param {import('sequelize').Sequelize}sequelize
 * @param {import('sequelize/dist').DataTypes}DataTypes
 * 
 */

 module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("User",
        {
            idUser:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            userName: DataTypes.STRING,
            email: DataTypes.STRING,
            userPassword: DataTypes.STRING,
            country: DataTypes.STRING,
            birthdate: DataTypes.DATE
        }, {
           
        });

        User.associate = function (models) {
            User.hasMany(models.Cart, {
                as: "relUserCart",
                foreignKey: "idUser",
            });
        };

    return User;

}