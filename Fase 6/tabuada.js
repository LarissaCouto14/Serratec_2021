//Vou tomar a tabuada! O aluno de matemática escolhe o número, e o sistema lhe ensina a contar.

 const ler = require("prompt-sync")();
var nro = Number(ler("Digite um número: "));
var i = 1;

for(i = 1; i < 10; i++){
    var tab = nro * i
    console.log(tab)
}

