
var express = require('express');
var bodyParser = require("body-parser")
var app = express();



var apiRouter = require('./routes/server.js');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', apiRouter);



console.log("Projeto rodando na porta " + process.env.PORT);

module.exports = app;
