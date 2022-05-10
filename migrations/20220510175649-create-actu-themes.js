'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Actu_themes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Actualite_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Actualites',
          key: 'id'
        }
      },
      Theme_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Themes',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Actu_themes');
  }
};