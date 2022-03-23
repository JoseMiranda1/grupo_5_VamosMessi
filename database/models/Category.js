module.exports = (sequelize, DataTypes) => {

    const Category = sequelize.define("Category",
        {
            idCategory:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            typeOfCategory: DataTypes.STRING
        },
         {  
            tableName: "categories",
            
         });

         Category.associate = function(models){
            Category.belongsToMany(models.Product,{
                as: "relCategoryProduct", 
                through: "categoryproduct",
                foreignKey: "idCategories",
                otherKey: "idProduct",
    
            })
         };
         




    return Category;

}