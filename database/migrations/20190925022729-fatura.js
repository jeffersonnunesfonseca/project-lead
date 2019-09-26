'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('fatura', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_usuario_lead_plano: {
        type: Sequelize.INTEGER,
      },
      deletado: {
        type: Sequelize.BOOLEAN,

      },          
      status: {
        type: Sequelize.BOOLEAN,
      },
      data_criacao: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()')
      }
    })
    .then(() => queryInterface.addConstraint('fatura', ['id_usuario_lead_plano'], {
      type: 'FOREIGN KEY',
      name: 'fk_id_usuario_lead_plano_plano', // useful if using queryInterface.removeConstraint
      references: {
        table: 'usuario_lead_plano',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    }))
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('fatura');
  }
};
