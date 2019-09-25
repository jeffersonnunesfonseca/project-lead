'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('venda', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_usuario_vendedor: {
        type: Sequelize.INTEGER,
      },
      id_usuario_cliente: {
        type: Sequelize.INTEGER,
      },
      id_plano_lead: {
        type: Sequelize.INTEGER,
      },
          
      data_criacao: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()')
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('venda');
  }
};
