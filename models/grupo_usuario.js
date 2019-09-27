module.exports = (sequelize, DataTypes) => {
    const Grupo_usuario = sequelize.define('grupo_usuario', {
      nome: DataTypes.STRING,
    },
    {
        timestamps: false,
        freezeTableName: true

    });
  
    return Grupo_usuario;
  }