'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('lead_entregue', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_usuario_lead_entregue: {
        type: Sequelize.INTEGER,
      },
      data_criacao: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()')
      }

    })
    .then(() => queryInterface.addConstraint('usuario_lead_plano', ['id_usuario'], {
      type: 'FOREIGN KEY',
      name: 'fk_id_usuario', // useful if using queryInterface.removeConstraint
      references: {
        table: 'usuario',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    }))
    .then(() => queryInterface.addConstraint('usuario_lead_plano', ['id_plano_lead'], {
      type: 'FOREIGN KEY',
      name: 'fk_id_plano_lead', // useful if using queryInterface.removeConstraint
      references: {
        table: 'plano_lead',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    }))
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('lead_entregue');
  }
};
