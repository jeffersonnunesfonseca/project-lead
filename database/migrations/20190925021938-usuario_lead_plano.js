'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuario_lead_plano', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_plano_lead: {
        type: Sequelize.INTEGER,
      },
      id_usuario: {
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

    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuario_lead_plano');
  }
};
