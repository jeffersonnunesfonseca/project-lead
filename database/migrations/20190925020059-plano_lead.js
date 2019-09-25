'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('plano_lead', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      valor: {
        type: Sequelize.DECIMAL(9,2),
      },
      data_criacao: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()')
      },
      data_atualizacao: {
        type: Sequelize.DATE,
      },
      deletado: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },
      qtd_lead: {
        type: Sequelize.INTEGER,
      }

    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('plano_lead');
  }
};
