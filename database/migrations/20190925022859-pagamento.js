'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pagamento', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_fatura: {
        type: Sequelize.INTEGER,
      },
      id_forma_pagamento: {
        type: Sequelize.INTEGER,
      },
      data_pagamento: {
        type: Sequelize.DATE
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pagamento');
  }
};
