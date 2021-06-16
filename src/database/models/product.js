'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Brand);
      Product.belongsTo(models.Gender);
      Product.belongsTo(models.Size);
      Product.belongsTo(models.Category);
      Product.hasOne(models.OrderDetail);
      Product.belongsTo(models.Order, {
        as: 'orders',
        through: 'OrderDetails'
      });
      Product.hasMany(models.Image, {
        foreignKey: 'products_id',
        as:'images'
      })
    }
  };
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER,
    stock_min: DataTypes.INTEGER,
    stock_max: DataTypes.INTEGER,
    brands_id: DataTypes.INTEGER,
    genders_id: DataTypes.INTEGER,
    sizes_id: DataTypes.INTEGER,
    categories_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};