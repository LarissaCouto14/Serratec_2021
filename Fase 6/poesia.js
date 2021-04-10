//No programa “Poesia” um trecho de uma composição conhecida é apresentado na tela. 
//Após imprimir, o programa pergunta se o leitor quer apreciar novamente os versos.

 const ler = require("prompt-sync")();

 var letra = ler("Você quer apreciar novamente esse verso?: 'SIM' ou 'NAO' ");

 do {
    console.log ("Sonhar mais um sonho impossível. Lutar quando é fácil ceder. Vencer o inimigo invencível");
    var letra = ler("Você quer apreciar novamente esse verso?: 'SIM' ou 'NAO' ");
 }
     while(letra == "SIM")
     console.log ("Ok, até outra hora.");
 