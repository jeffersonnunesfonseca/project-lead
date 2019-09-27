const express = require("express")
var router = express.Router();
const models  = require('../models/');
const Tipo_usuario = models.tipo_usuario;
const Grupo_usuario = models.grupo_usuario;
const Grupo_telefone_app = models.grupo_telefone_app;
const Usuario = models.usuario;


router.get('/', function (req, res) {
   res.send('Hello World')

})

router.get('/usuario/:id', async function (req, res) {
    var response = await Usuario.findAll({
        where: {
            id: req.params.id
        },
        include: [
            {model: Tipo_usuario, as: 'TipoUsuario'}
        ]
    }

    );
    res.send(response)
 })

router.post('/create/tipo_usuario', async function (req, res) {
    var response = await Tipo_usuario.create({
        nome: req.body.nome,
    });
    res.send(response)
});

router.post('/create/grupo_usuario', async function (req, res) {
    var response = await Grupo_usuario.create({
        nome: req.body.nome,
    })

    res.send(response)
});

router.post('/create/grupo_telefone_app', async function (req, res) {
    var response = await Grupo_telefone_app.create({
        nome: req.body.nome,
    })
    
    res.send(response)
});


router.post('/create/usuario', async function (req, res) {
    var response = await Usuario.create({
        nome:req.body.nome,
        id_tipo_usuario: req.body.id_tipo_usuario,
        id_grupo_usuario: req.body.id_grupo_usuario,
        id_cidade: req.body.id_cidade,
        id_estado: req.body.id_estado,
        id_bairro: req.body.id_bairro,
        cpfcnpj: req.body.cpfcnpj,
        email: req.body.email,
        telefone_1: req.body.telefone_1,
        telefone_1_id_grupo_telefone_app: req.body.telefone_1_id_grupo_telefone_app,
        endereco: req.body.endereco
    })
    res.send(response)
});

module.exports = router;