//Braya sempre tem a mesma rotina nos fins de semana. 
//Pela manhã, tendo sol, vai à praia. Do contrário, aproveita pra estudar. 
//À tarde é ainda mais regrado: para o almoço na praia, leva um lanche; em casa, feijoada. 
//Após almoçar, assiste televisão e tira um cochilo.
// Agora ele quer imprimir seus hábitos em papel na sexta, após a previsão do tempo, e colar na porta da geladeira.

     const ler = require ("prompt-sync")();

     console.log ("SUA ROTINA PARA O FIM DE SEMANA");
var rotina = ler("Hoje está fazendo sol SIM ou NAO?");
          
    if (rotina == "SIM"){
        console.log ("Hoje vai para praia;");
        console.log ("Leve um lanche.");
        console.log ("Ir para casa assistir televisão")
        console.log ("Tire um cochilo");
    } 
    else {
        console.log ("Aproveitaremos para estudar");
        console.log ("Feijoada de almoço.");
        console.log ("Agora a assiste televisão");
        console.log ("Tire um cochilo");
    }
console.log ("BOM FIM DE SEMANA *-*") 