//O programa “Compromissos” gerencia a sua agenda do mês. 
//Você pode digitar um compromisso, informando o dia e a descrição do evento, e consultar se existe algum apontamento para determinado dia.


const ler = require ("prompt-sync")();

var agenda = [] 
console.log ("AGENDA DE COMPROMISSO");

let dia = ler ("Qual dia você quer consultar?");
let compromisso = agenda[dia];

while (dia > 0) {
    if (compromisso) {
      console.log("Esse dia já tem um compromisso, quer ver?");
      var ver = ler("S ou N");

      if (ver == "S"){
          console.log ('Anotações desse dia" + ${dia}');
          console.log (compromisso);
      }
   }else {
        console.log ("Esse dia não tem um compromisso. Digite seu compromisso: ");
        let anotacao = ler ("");
        agenda[dia] = anotacao;
    }

     dia = ler("Qual dia quer consultar? ");
     compromisso = agenda[dia];

}
console.log ("Ok, suas alterações foram cadastradas");
