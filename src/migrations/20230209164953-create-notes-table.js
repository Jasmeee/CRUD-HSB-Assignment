const {sequelize} = require('../models/index.js');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("product", { 
      id: {
        type: sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      description : {
        type: Sequelize.STRING,
        allowNull: false
      },

      price: {
        type: sequelize.INTEGER,
        allowNull: false
      },

      createdAt: {
        type: sequelize.DATE,
        allowNull: false
      }
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("product");

  }
};
