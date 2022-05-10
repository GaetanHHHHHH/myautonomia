'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Profil.belongsTo(models.User, {
        foreignKey: 'id',
        targetKey: 'id', 
        as: 'User'
      })
      models.Profil.belongsTo(models.Theme, {
        foreignKey: 'id',
        targetKey: 'id', 
        as: 'Theme'
      })
    }
  }
  Profil.init({
    User_id: DataTypes.INTEGER,
    Theme_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Profil',
  });
  return Profil;
};