'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Theme.belongsToMany(models.User),
      {
        as:'ThemesDuProfil',
        through: models.Profil,
        foreignKey: 'id'
      }
      models.Theme.belongsToMany(models.Actualite),
      {
        as:'ActualitesDuTheme',
        through: models.Actu_themes,
        foreignKey: 'id'
      }
    }
  }
  Theme.init({
    nom_theme: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Theme',
  });
  return Theme;
};