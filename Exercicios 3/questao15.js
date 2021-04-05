//O restaurante "Self-Service" precisa de um programa para imprimir as etiquetas de "comanda" na pesagem dos pratos. O operador da balança irá digitar o preço do quilo e o total 
//em gramas da refeição, considerando que o prato vazio pesa 465 gramas (tara).
// A etiqueta irá conter o nome do restaurante, a tara do prato, o preço de 100 gramas, o peso consumido e o valor total.

const prompt = require ("prompt-sync")();

var preco = Number(prompt("Quanto vale o quilo da refeição?"));
var refeicao = Number(prompt("Qual o valor em gramas da refeição?"));
var prato = 465;
var restaurante = "Self-Service";
var gramapreco = preco/10;
var total = (prato + refeicao) * gramapreco;

console.log (restaurante + "\n TARA DO PRATO" + prato + "g\n PREÇO 100G: R$" + gramapreco);
console.log ("PESO REFEIÇÃO: " + refeicao + "g\n VALOR TOTAL: R$" + total);