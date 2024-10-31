const prompt = require('prompt-sync')({sigint: true});

console.log("verifique se seu numero é par ou impar")


var numero = Number(prompt("Digite um numero:"))
var divisao = numero % 2 === 0


if(divisao){
    console.log("seu numero é par")
}else{
    console.log("seu numero é impar")
}