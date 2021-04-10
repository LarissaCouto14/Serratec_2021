//O programa “Financeira” irá solicitar que o cliente digite seu nome, empresa e função, além do valor do empréstimo que deseja contratar. Então será calculado 86% do valor desejado como crédito disponível. A resposta ao cliente deve seguir o exemplo abaixo.
//Para escrever as mensagens, utilize variáveis com concatenação de strings. O valor será escrito separadamente (no console.log).

const prompt = require ("prompt-sync")();

const ler = require("prompt-sync")();
var nome = ler ("Digite seu nome: ");
var empresa = ler ("Digite sua empresa: ");
var funcao = ler ("Digite sua funcao: ");
var emprestimo = ler ("Digite o valor do emprestimo desejado: ");

var valor = emprestimo * 86 / 100;

console.log ("Senhor(a)" + nome +"", "você está com sorte! Pela sua função de" + funcao + " e sua excelente relação com a " + empresa +"onde trabalha, foi aprovado um crédito em sua conta corrente de " + valor);
