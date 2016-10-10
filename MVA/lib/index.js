"use strict";
/// <reference path="typings/tsd.d.ts" />
var http = require('http');
var Cliente = require('./Cliente');
var Funcionario = require('./Funcionario');
var cliente = new Cliente();
cliente.nome = "Wellingtos Schütz";
var funcionario = new Funcionario();
funcionario.nome = "Josnei da Silva";
http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write('Cliente: ' + cliente.nome + ' - Funcionario: ' + funcionario.nome);
    response.end();
}).listen(8000);
