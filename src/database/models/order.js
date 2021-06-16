'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Order.belongsTo(models.Shipping)
      Order.belongsTo(models.shipping,{
        foreignKey:'orders_id'
      });
      Order.belongsTo(models.User)
      Order.hasOne(models.State)
      Order.hasOne(models.Payment)
      Order.belongsToMany(models.Product, {
        as: 'products',
        through: 'OrderDetails'
      })
      Order.belongsTo(models.Shipping,{
        foreignKey:'orders_id',
        as: "shippings"
      })
    }
  };
  Order.init({
    number: DataTypes.INTEGER,
    date: DataTypes.DATE,
    total: DataTypes.DECIMAL,
    payments_id: DataTypes.INTEGER,
    users_id: DataTypes.INTEGER,
    users_addresses_id: DataTypes.INTEGER,
    states_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};