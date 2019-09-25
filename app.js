var express = require('express');
var app = express();

var apiRouter = require('./routes/server.js');

app.use('/', apiRouter);

console.log("Projeto rodando na porta " + process.env.PORT);

module.exports = app;
