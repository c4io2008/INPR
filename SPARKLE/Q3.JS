const prompt = require('prompt-sync')({sigint: true});

var numero = 7

var numero_secreto = Number(prompt("chute um numero de 0 a 100:"))

if(numero === numero_secreto){
    console.log("Vc acertou!!")
}else{
    console.log("Vc errou, tente novamamente!")
}