'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('forma_pagamento', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING,
      }

    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('forma_pagamento');
  }
};
