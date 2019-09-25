'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pagamento', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_fatura: {
        type: Sequelize.INTEGER,
      },
      id_forma_pagamento: {
        type: Sequelize.INTEGER,
      },
      data_pagamento: {
        type: Sequelize.DATE
      }
    })
    .then(() => queryInterface.addConstraint('pagamento', ['id_fatura'], {
      type: 'FOREIGN KEY',
      name: 'fk_id_fatura', // useful if using queryInterface.removeConstraint
      references: {
        table: 'fatura',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    }))
    .then(() => queryInterface.addConstraint('pagamento', ['id_forma_pagamento'], {
      type: 'FOREIGN KEY',
      name: 'fk_id_forma_pagamento', // useful if using queryInterface.removeConstraint
      references: {
        table: 'forma_pagamento',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    }))
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pagamento');
  }
};
