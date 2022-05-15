'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Actualites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date_publication: {
        allowNull: false,
        type: Sequelize.DATE
      },
      titre: {
        allowNull: false,
        type: Sequelize.STRING
      },
      titre2: {
        allowNull: false,
        type: Sequelize.STRING
      },
      texte: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lien: {
        type: Sequelize.STRING
      },
      vignette: {
        allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Actualites');
  }
};