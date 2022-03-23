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
            adress: DataTypes.STRING,
            postCode: DataTypes.STRING,
            country: DataTypes.STRING,
            phone: DataTypes.STRING,
            birthdate: DataTypes.DATE
        }, {
           
        });

        User.associate = function (models) {
            // associations can be defined here
            User.hasMany(models.Cart, {
                as: "relUserCart",
                foreignKey: "idUser",
            });
        };

    return User;

}