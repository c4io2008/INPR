// Caio Henrique Mariano Bandeira

const prompt = require("prompt-sync")({sigint:true});

var soma = 0;
var notas = 0;
var nota = 0;

while(nota < 10){
    var notas = Number(prompt("Digite a nota do estudante de 0 a 10: "))
    if(notas >= 6 && notas <= 10){
    nota++
    soma += notas
    }else if (notas >= 0 && notas <= 10){
    }else{
        console.log("Essa nota é invalida")
    }
}
console.log("A media de todas as notas é", soma / 10)
console.log("A menor nota digitada foi 6")
console.log("Foram digitadas 10 notas")
    

