module.exports = (sequelize, dataTypes) => {

    const alias = "Categories";
    const columns = {
        id: {primaryKey: true,
            type: dataTypes.INTEGER,
          autoIncrement: true},
        category: dataTypes.STRING
	}

    const config = {
        tableName: "categories",
        timestamps: false,
    };

    const Category = sequelize.define(alias, columns, config);

   
    Category.associate = (models) => {
        Category.hasMany(models.Products, {         
          as: "products",
          foreignKey: "category_id",
        });
    };
    return Category;
}