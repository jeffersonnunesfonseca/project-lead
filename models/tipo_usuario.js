// const Usuario = require('./usuario')
module.exports = (sequelize, DataTypes) => {
    const Tipo_usuario = sequelize.define('tipo_usuario', {
      nome: DataTypes.STRING,
    },
    {
        timestamps: false,
        freezeTableName: true

    });

    Tipo_usuario.associate = (models) => {
        Tipo_usuario.hasMany(models.usuario, {foreignKey: 'id_tipo_usuario', as: 'Usuarios'});
    };
    // Tipo_usuario.hasMany(Usuario,{
    //     foreignKey: 'id_tipo_usuario',
    //     as : "Usuarios"
    // })  

    return Tipo_usuario;
  }