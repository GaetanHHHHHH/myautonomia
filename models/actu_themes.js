'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actu_themes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Actu_themes.belongsTo(models.Actualite, {
        foreignKey: 'id',
        targetKey: 'id', 
        as: 'Actualite'
      })
      models.Actu_themes.belongsTo(models.Theme, {
        foreignKey: 'id',
        targetKey: 'id', 
        as: 'Theme'
      })
    }
  }
  Actu_themes.init({
    Actualite_id: DataTypes.INTEGER,
    Theme_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Actu_themes',
  });
  return Actu_themes;
};