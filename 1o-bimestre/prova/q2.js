// Caio Henrique Mariano Bandeira
const prompt = require("prompt-sync")({sigint:true});

var numero = Number(prompt("Digite um numero para descobrir seu fatorial:"))
var contador = numero
var contadorNumero = numero

while(contador > 1){
    contador--
    contadorNumero -= numero
    var fatorial = numero * contadorNumero
    }
     console.log("O resultado é", fatorial);