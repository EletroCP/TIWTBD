'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Words', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      word: {
        type: Sequelize.STRING
      },
      
    },
    {
      timestamps: false
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Words');
  }
};