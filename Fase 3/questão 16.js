/* O programa “mini departamento pessoal” lê a quantidade de horas trabalhadas por um funcionário em um mês, o valor que ele recebe por hora e o percentual de desconto para o INSS, 
e calcula:
O salário bruto (horas trabalhadas * valor hora)
O valor do desconto para o INSS
O salário líquido (adicionais menos descontos).
Após os cálculos, será impresso o contracheque. O contracheque é a exibição no console das informações com formatação: Salário bruto, valor do desconto do INSS, e o salário líquido do funcionário.
*/


const prompt = require ("prompt-sync")();
var hrstrab = (ler ("Qual é a sua quantidade de hora trabalhada por mês?"));
var valorhr = (ler("Quanto você recebe por hora?"));
var descontinss = (ler("Quanto é o desconto do INSS"));
var salariobruto = hrstrab = valorhr;
var salarioliq = salariobruto - descontinss;

console.log ("Salario bruto R$," salariobruto);
console.log ("Descontp dp INSS: R$,"descontiss);
console.log ("Salario liquido =: R$," salarioliq);
