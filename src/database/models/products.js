module.exports = (sequelize, dataTypes) => {
    const alias = "Products";
    const columns = {
      id: {primaryKey: true,
      type: dataTypes.INTEGER,
    autoIncrement: true},
  
      title: dataTypes.STRING,
      price: dataTypes.DECIMAL,
      final: dataTypes.DECIMAL,
      discount: dataTypes.INTEGER, 
      img: dataTypes.STRING,
      category_id: dataTypes.INTEGER
    };
  
    const config = {
      tableName: "products",
      timestamps: false,
    };
  
    const Product = sequelize.define(alias, columns, config);
    Product.associate = (models) => {
        Product.belongsTo(models.Categories, {          
          as: "category",
          foreignKey: "category_id",
        });
    }
    return Product;
}  