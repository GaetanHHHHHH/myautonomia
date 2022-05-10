'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actualite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Actualite.belongsToMany(models.Theme),
      {
        as:'ThemesDeLActualite',
        through: models.Actu_themes,
        foreignKey: 'id'
      }
    }
  }
  Actualite.init({
    date_publication: DataTypes.DATE,
    titre: DataTypes.STRING,
    titre2: DataTypes.STRING,
    texte: DataTypes.STRING,
    lien: DataTypes.STRING,
    vignette: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Actualite',
  });
  return Actualite;
};