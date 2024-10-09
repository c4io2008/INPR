// Caio Henrique Mariano Bandeira

const prompt = require("prompt-sync")({sigint:true});

var subtracao, soma;
var numero = Number(prompt("<< Digite um numero:"))

soma = numero + 1
subtracao = numero - 1

console.log(`O sucessor ${numero} é = ${soma}`);
console.log(`O antecessor ${numero} é = ${subtracao}`);


