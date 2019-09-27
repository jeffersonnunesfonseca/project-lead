module.exports = (sequelize, DataTypes) => {
    const Grupo_telefone_app = sequelize.define('grupo_telefone_app', {
      nome: DataTypes.STRING,
    },
    {
        timestamps: false,
        freezeTableName: true

    });
  
    return Grupo_telefone_app;
  }