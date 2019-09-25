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
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },
      data_criacao: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()')
      },
      qtd_dependente: {
        type: Sequelize.INTEGER,
      }

    })

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('lead_imobiliario');
  }
};
