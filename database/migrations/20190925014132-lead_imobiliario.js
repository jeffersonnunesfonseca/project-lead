'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('lead_imobiliario', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_status_imovel: {
        type: Sequelize.INTEGER,
      },
      id_tipo_imovel: {
        type: Sequelize.INTEGER,
      },
      id_cidade_imovel: {
        type: Sequelize.INTEGER,
      },
      id_estado_imovel: {
        type: Sequelize.INTEGER,
      },
      id_bairro_imovel: {
        type: Sequelize.INTEGER,
      },
      id_estado_civil: {
        type: Sequelize.INTEGER,
      },
      id_renda_bruta: {
        type: Sequelize.INTEGER,
      },
      id_renda_bruta_parceiro: {
        type: Sequelize.INTEGER,
      },
      valor_busca: {
        type: Sequelize.DECIMAL(9,2),
      },
      possui_credito: {
        type: Sequelize.BOOLEAN,
      },
      valor_credito: {
        type: Sequelize.DECIMAL(9,2),
      },
      qtd_comprador: {
        type: Sequelize.INTEGER,
      },
      nome: {
        type: Sequelize.STRING(200),
      },
      nome_parceiro: {
        type: Sequelize.STRING(200),
      },
      email: {
        type: Sequelize.STRING(200),
      },
      possui_fgts: {
        type: Sequelize.BOOLEAN,
      },
      possui_fgts_parceiro: {
        type: Sequelize.BOOLEAN,
      },
      tempo_fgts: {
        type: Sequelize.INTEGER,
      },
      tempo_fgts_parceiro: {
        type: Sequelize.INTEGER,
      },
      rede_social: {
        type: Sequelize.STRING(200),
      },
      deletado: {
        type: Sequelize.BOOLEAN
      },
      data_criacao: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()')
      },
      qtd_dependente: {
        type: Sequelize.INTEGER,
      }
    })
    .then(() => queryInterface.addConstraint('lead_imobiliario', ['id_tipo_imovel'], {
      type: 'FOREIGN KEY',
      name: 'fk_id_tipo_imovel', // useful if using queryInterface.removeConstraint
      references: {
        table: 'tipo_imovel',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    }))
    .then(() => queryInterface.addConstraint('lead_imobiliario', ['id_status_imovel'], {
      type: 'FOREIGN KEY',
      name: 'fk_status_imovel', // useful if using queryInterface.removeConstraint
      references: {
        table: 'status_imovel',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    }))
    .then(() => queryInterface.addConstraint('lead_imobiliario', ['id_renda_bruta'], {
      type: 'FOREIGN KEY',
      name: 'fk_id_renda_bruta', // useful if using queryInterface.removeConstraint
      references: {
        table: 'renda_bruta',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    }))
    .then(() => queryInterface.addConstraint('lead_imobiliario', ['id_renda_bruta_parceiro'], {
      type: 'FOREIGN KEY',
      name: 'fk_id_renda_bruta_parceiro', // useful if using queryInterface.removeConstraint
      references: {
        table: 'renda_bruta',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    }))
    .then(() => queryInterface.addConstraint('lead_imobiliario', ['id_estado_civil'], {
      type: 'FOREIGN KEY',
      name: 'fk_estado_civil', // useful if using queryInterface.removeConstraint
      references: {
        table: 'estado_civil',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    }))

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('lead_imobiliario');
  }
};
