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
        type: Sequelize.INTEGER,
      },
      telefone_2_id_grupo_telefone_app: {
        type: Sequelize.INTEGER,
      },
      telefone_3_id_grupo_telefone_app: {
        type: Sequelize.INTEGER,
      },
      status_online: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },
      congelado: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
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
    .then(() => queryInterface.addConstraint('usuario', ['id_grupo_usuario'], {
      type: 'FOREIGN KEY',
      name: 'fk_id_grupo_usuario', // useful if using queryInterface.removeConstraint
      references: {
        table: 'grupo_usuario',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    }))
    .then(() => queryInterface.addConstraint('usuario', ['id_tipo_usuario'], {
      type: 'FOREIGN KEY',
      name: 'fk_id_tipo_usuario', // useful if using queryInterface.removeConstraint
      references: {
        table: 'tipo_usuario',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    }))
    .then(() => queryInterface.addConstraint('usuario', ['telefone_1_id_grupo_telefone_app'], {
      type: 'FOREIGN KEY',
      name: 'fk_grupo_telefone_app_1', // useful if using queryInterface.removeConstraint
      references: {
        table: 'grupo_telefone_app',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    }))
    .then(() => queryInterface.addConstraint('usuario', ['telefone_2_id_grupo_telefone_app'], {
      type: 'FOREIGN KEY',
      name: 'fk_grupo_telefone_app_2', // useful if using queryInterface.removeConstraint
      references: {
        table: 'grupo_telefone_app',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    }))
    .then(() => queryInterface.addConstraint('usuario', ['telefone_3_id_grupo_telefone_app'], {
      type: 'FOREIGN KEY',
      name: 'fk_grupo_telefone_app_3', // useful if using queryInterface.removeConstraint
      references: {
        table: 'grupo_telefone_app',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    }))
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuario');
  }
};
