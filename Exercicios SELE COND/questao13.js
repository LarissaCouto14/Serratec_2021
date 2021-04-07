//O setor de cobrança irá acertar os pagamentos com os "fornecedores" na próxima sexta-feira. 
//Para valores maiores que mil Reais, o pagamento será em cheque. 
//Os valores baixos serão pagos em dinheiro. Ao receber o valor do pagamento, o sistema irá emitir um relatório.

const ler = require ("prompt-sync")();
   
           console.log ("FORMAS DE PAGAMENTO DE FORNECEDORES");
var valor = Number(ler("Qual valor do seu pagamento?"));

var MIL = 1000.0
if (valor > MIL){
    console.log (valor);
    console.log ("Seu pagamento será recebido em cheque");
} else{
    console.log (valor);
    console.log ("Seu pagamento será recebido em dinheiro");
}
