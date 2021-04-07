//Os boletos da "Universidade" são emitidos com vencimento no dia 15 do mês.
// Para os pagamentos recebidos entre os dias 10 a 13, será concedido um desconto na próxima mensalidade.
// O programa irá receber o número do boleto e o dia do pagamento, e emitir o extrato.

const ler = require("prompt-sync")();

let hoje = Number(ler("Digite o dia de hoje: "));
let boleto = Number(ler("Digite o numero do boleto:  "));
let pag = Number(ler("Digite o dia do pagamento: "));

let res = (pag >= 10 && pag <=13);

if (res){
    console.log ("Desconto no proxima mensalidade? ", res);

}
else {
    console.log ("Desconto na próxima mensalidade?", res);
}

