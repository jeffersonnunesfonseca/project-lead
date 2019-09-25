'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('contrato', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_usuario_plano_lead: {
        type: Sequelize.INTEGER,
      },
      id_usuario: {
        type: Sequelize.INTEGER,
      },
      id_documento: {
        type: Sequelize.INTEGER,
      },
      data_criacao: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()')
      },
      data_atualizacao: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletado: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },
      cancelado: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },

    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('contrato');
  }
};
