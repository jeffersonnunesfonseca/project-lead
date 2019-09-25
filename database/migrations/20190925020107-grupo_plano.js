'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('grupo_plano', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING,
      }

    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('grupo_plano');
  }
};
