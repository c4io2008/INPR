const prompt = require("prompt-sync")({sigint:true});

var notas = 0

while(notas < 5){
    var nota = Number(prompt("Digite a nota: "))
    if(nota == 10){
        notas++;
    }
}