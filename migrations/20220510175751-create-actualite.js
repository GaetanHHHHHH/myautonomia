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
        type: Sequelize.DATE
      },
      titre: {
        type: Sequelize.STRING
      },
      titre2: {
        type: Sequelize.STRING
      },
      texte: {
        type: Sequelize.STRING
      },
      lien: {
        type: Sequelize.STRING
      },
      vignette: {
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