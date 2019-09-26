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
    .then(() => queryInterface.addConstraint('venda', ['id_usuario_vendedor'], {
      type: 'FOREIGN KEY',
      name: 'fk_id_usuario_vendedor', // useful if using queryInterface.removeConstraint
      references: {
        table: 'usuario',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    }))
    .then(() => queryInterface.addConstraint('venda', ['id_usuario_cliente'], {
      type: 'FOREIGN KEY',
      name: 'fk_id_usuario_cliente', // useful if using queryInterface.removeConstraint
      references: {
        table: 'usuario',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    }))
    .then(() => queryInterface.addConstraint('venda', ['id_plano_lead'], {
      type: 'FOREIGN KEY',
      name: 'fk_id_plano_lead_lead', // useful if using queryInterface.removeConstraint
      references: {
        table: 'plano_lead',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    }))
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('venda');
  }
};
