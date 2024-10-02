const prompt = require("prompt-sync")({sigint:true});

console.log(">>Acerte o numero secreto!")

var numero = 7
var numero_secreto = Number(prompt("Digite um numero 0 a 10:"))

if (numero_secreto == numero) {
    console.log("Vc acertou o numero!!");
} else if (numero_secreto > numero){
    console.log("Seu chute foi Maior que o numero");
}else {
    console.log("Seu chute foi Menor que o numero");
}
