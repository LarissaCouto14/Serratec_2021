//Os "vendedores comissionados" recebem 5% do valor de cada produto vendido. 
//Aqueles que batem a meta de 5 mil em vendas, recebem um adicional de 9% sobre o excedente.
// Seu programa irá receber o valor total de vendas e emitir o recibo de comissão.

const ler = require("prompt-sync")();

let valor = Number(ler("Digite o valor de vendas: "));
let cinco = 5.000;
let total = valor <= cinco
let calculo = total * 5/100
let rcb = calculo * 9 /100
     console.log ("Você receberá o acrescimo no salário no valor de", rcb); 
