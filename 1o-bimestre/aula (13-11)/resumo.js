/*const prompt = require("prompt-sync")({sigint:true});

var nome = prompt("**Digite seu nome:")
var ano_nascimento = Number(prompt("**Qual o ano que vc nasceu? "))
var ano_atual = Number(prompt("**Qual o ano atual?"))

var idade = ano_atual - ano_nascimento

console.log(nome);
console.log(idade);
 
for(let i = 8; i >= 0; i--){
    console.log("falta ", i, "dias para o meu aniversario");
}


console.log("********************")


let i = 8

while(i >= 0){
    console.log("falta", i, "dias para o meu aniversario")
    i--
}

const prompt = require("prompt-sync")({sigint:true});

var temperatura = Number(prompt("Qual é a temperatura da água? **"))

if(temperatura >= 100){
    console.log('A agua entrou em ebulição')
}else{
    console.log('A agua não entrou em ebulição')
}*/

const prompt = require("prompt-sync")({sigint:true});

var mes = Number(prompt("Digite um numero de 1 a 12:"))

if(mes == 1){
    console.log("Seu mes é Janeiro")
}else if(mes == 2){
    console.log("Seu mes é Fevereiro")
}else if(mes == 3){
    console.log("Seu mes é Março")
}else if(mes == 4){
    console.log("Seu mes é Maio")
}else if(mes == 5){
    console.log("Seu mes é Abril")
}else if(mes == 6){
    console.log("Seu mes é Junho")
}else if(mes == 7){
    console.log("Seu mes é Julho")
}else if(mes == 8){
    console.log("Seu mes é Agosto")
}else if(mes == 9){
    console.log("Seu mes é Setembro")
}else if(mes == 10){
    console.log("Seu mes é Outubro")
}else if(mes == 11){
    console.log("Seu mes é Novembro")
}else if(mes == 12){
    console.log("Seu mes é Dezembro")
}else{
    console.log("Numero Invalido")
}