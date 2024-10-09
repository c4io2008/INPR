// Caio Henrique Mariano Bandeira

const prompt = require("prompt-sync")({sigint:true});

var nome = prompt("<<Digite se vc é do sexo feminino ou masculino:")
var peso = Number(prompt("<<Digite seu peso:"))
var altura = Number(prompt("<<Digite sua altura:"))
var masculino
var feminino
var IMC = peso / (altura) * 2

console.log(`IMC =  ${IMC}` );

if(feminino == nome) {
    if(IMC < 19,1){
        console.log("Abaixo do peso!")
    }else if (IMC >= 19,1 && IMC < 25,8 ) {
        console.log("Peso ideal!")
    }else if(IMC >= 25,8 && IMC < 27,3) {
        console.log("Um pouco acima do peso!")
    }else if (IMC >= 27,3 && IMC < 31,1 ){
        console.log("Acima do peso ideal!")
    }else if (IMC >= 31,1){
        console.log("Obeso!")
    }
}
if(masculino == nome) {
    if(IMC < 20,7){
        console.log("Abaixo do peso!")
    }else if (IMC >= 20,7 && IMC < 26,4 ) {
        console.log("Peso ideal!")
    }else if(IMC  >= 26,4 && IMC < 27,8) {
        console.log("Um pouco acima do peso!")
    }else if ( IMC >= 27,8 && IMC < 32,3 ){
        console.log("Acima do peso ideal!")
    }else if (IMC >= 32,3){
        console.log("Obeso!")
    }
}



