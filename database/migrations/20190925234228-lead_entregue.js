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
      id_lead: {
        type: Sequelize.INTEGER,
      },
      data_criacao: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()')
      }

    })
    .then(() => queryInterface.addConstraint('lead_entregue', ['id_usuario_lead_entregue'], {
      type: 'FOREIGN KEY',
      name: 'fk_id_usuario_lead_entregue', // useful if using queryInterface.removeConstraint
      references: {
        table: 'usuario_lead_entregue',
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
