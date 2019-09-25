'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuario', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_tipo_usuario: {
        type: Sequelize.INTEGER,
      },
      id_grupo_usuario: {
        type: Sequelize.INTEGER,
      },
      id_cidade: {
        type: Sequelize.INTEGER,
      },
      id_estado: {
        type: Sequelize.INTEGER,
      },
      id_bairro: {
        type: Sequelize.INTEGER,
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING(300),
      },
      cpfcnpj: {
        allowNull: false,
        type: Sequelize.STRING(18),
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(300),
      },
      telefone_1: {
        type: Sequelize.STRING(14),
      },
      telefone_2: {
        type: Sequelize.STRING(14),
      },
      telefone_3: {
        type: Sequelize.STRING(14),
      },
      telefone_1_id_grupo_telefone_app: {
        type: Sequelize.STRING(11),
      },
      telefone_2_id_grupo_telefone_app: {
        type: Sequelize.STRING(11),
      },
      telefone_3_id_grupo_telefone_app: {
        type: Sequelize.STRING(11),
      },
      status_online: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },
      ativo: {
        type: Sequelize.BOOLEAN,
      },
      congelado: {
        type: Sequelize.BOOLEAN,
      },
      deletado: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },
      data_criacao: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()')
      },
      data_atualizacao: {
        type: Sequelize.DATE,
      },
      endereco: {
        type: Sequelize.STRING(200)
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuario');
  }
};
