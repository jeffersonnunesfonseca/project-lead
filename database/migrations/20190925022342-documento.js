'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('documento', {
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
      conteudo: {
        allowNull: false,
        type: Sequelize.TEXT,
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
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('documento');
  }
};
