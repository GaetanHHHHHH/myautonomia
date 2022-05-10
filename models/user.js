'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.belongsToMany(models.Theme),
      {
        as:'Profils',
        through: models.Profil,
        foreignKey: 'id'
      }
    }
  }
  User.init({
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    statut: DataTypes.ENUM('valide', 'attente', 'refuse'),
    profils: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};