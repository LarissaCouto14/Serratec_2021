//O programa “bem-vindo” pergunta seu nome e sobrenome, e depois gentilmente te cumprimenta.

const prompt = require ("prompt-sync")();

const ler = require("prompt-sync")();
var nome = ler ("Digite seu nome: ");
var sobrenome = ler ("Digite seu sobrenome: ");



console.log ("Olá " + nome + sobrenome + ", seja bem vindo ao universo da programação!");
