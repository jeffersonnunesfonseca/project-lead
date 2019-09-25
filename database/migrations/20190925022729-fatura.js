'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('fatura', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_usuario_lead_plano: {
        type: Sequelize.INTEGER,
      },
      deletado: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },          
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },
      data_criacao: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()')
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('fatura');
  }
};
