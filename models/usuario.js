// const Tipo_usuario = require('./tipo_usuario')
module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('usuario', {
      nome: DataTypes.STRING,
      id_tipo_usuario: DataTypes.INTEGER,
      id_grupo_usuario: DataTypes.INTEGER,
      id_cidade: DataTypes.INTEGER,
      id_estado: DataTypes.INTEGER,
      id_bairro: DataTypes.INTEGER,
      cpfcnpj: DataTypes.STRING,
      email: DataTypes.STRING,
      telefone_1: DataTypes.STRING,
      telefone_2: DataTypes.STRING,
      telefone_3: DataTypes.STRING,
      telefone_1_id_grupo_telefone_app: DataTypes.BOOLEAN,
      telefone_2_id_grupo_telefone_app: DataTypes.BOOLEAN,
      telefone_3_id_grupo_telefone_app: DataTypes.BOOLEAN,
      status_online: DataTypes.BOOLEAN,
      ativo: DataTypes.BOOLEAN,
      congelado: DataTypes.BOOLEAN,
      deletado: DataTypes.BOOLEAN,
      data_criacao: DataTypes.NOW,
      data_atualizacao: DataTypes.DATE,
      endereco: DataTypes.STRING
    },
    {
        timestamps: false,
        freezeTableName: true

    });

    Usuario.associate = (models) => {
      Usuario.belongsTo(models.tipo_usuario, {foreignKey: 'id_tipo_usuario', as: 'TipoUsuario'});
    };

    // Usuario.belongsTo(Tipo_usuario, {
    //   as: 'Tipo_usuario',
    //   foreignKey: 'id_tipo_usuario'
    // }) // This adds currentVersionId attribute to document
  
    return Usuario;
  }