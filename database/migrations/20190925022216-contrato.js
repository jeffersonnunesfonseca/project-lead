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
      },
      ativo: {
        type: Sequelize.BOOLEAN,
      },
      cancelado: {
        type: Sequelize.BOOLEAN,
      },

    })
    .then(() => queryInterface.addConstraint('contrato', ['id_usuario'], {
      type: 'FOREIGN KEY',
      name: 'fk_id_usuario', // useful if using queryInterface.removeConstraint
      references: {
        table: 'usuario',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    }))
    .then(() => queryInterface.addConstraint('contrato', ['id_usuario_lead_plano'], {
      type: 'FOREIGN KEY',
      name: 'fk_id_usuario_lead_plano', // useful if using queryInterface.removeConstraint
      references: {
        table: 'usuario_lead_plano',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    }))
    .then(() => queryInterface.addConstraint('contrato', ['id_documento'], {
      type: 'FOREIGN KEY',
      name: 'fk_id_documento', // useful if using queryInterface.removeConstraint
      references: {
        table: 'documento',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    }))
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('contrato');
  }
};
