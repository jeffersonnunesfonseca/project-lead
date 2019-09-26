'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuario_lead_entregue', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_usuario_lead_plano: {
        type: Sequelize.INTEGER,
      },
      data_iniciou: {
        type: Sequelize.DATE,
      },
      data_finalizou: {
        type: Sequelize.DATE,
      },
      qtd_lead_entregue: {
        type: Sequelize.INTEGER,
      }
    })
    .then(() => queryInterface.addConstraint('usuario_lead_entregue', ['id_usuario_lead_plano'], {
      type: 'FOREIGN KEY',
      name: 'fk_id_usuario_lead_plano_plano2', // useful if using queryInterface.removeConstraint
      references: {
        table: 'usuario_lead_plano',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    }))
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuario_lead_entregue');
  }
};
