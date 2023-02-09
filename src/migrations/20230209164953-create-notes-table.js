'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('product', { 
      id: {
        type: sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      name: {
        type: Sequelize.STRING
      },

      description : {
        type: Sequelize.STRING
      },

      createAt: {
        type: sequelize.DATE,
        allowNull: false
      },

      UpdatedAt: {
        type: sequelize.DATE,
        allowNull: false
      }
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('product');

  }
};
