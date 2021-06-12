'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_has_Rol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserHasRole.belongsTo(models.User, {
        foreignKey: 'users_id'
      })
      UserHasRole.belongsTo(models.Rol, {
        foreignKey: 'rols_id'
      })
    }
  };
  User_has_Rol.init({
    users_id: DataTypes.INTEGER,
    rols_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User_has_Rol',
  });
  return User_has_Rol;
};