const prompt = require('prompt-sync')({sigint: true});

var A = Number(prompt("Digite o valor de A:"))
var B = Number(prompt("Digite o valor de B:"))
var C = Number(prompt("Digite o valor de C:"))
var D = Number(prompt("Digite o valor de D:"))

if(B > C && D > A && C + D > A + B && A /2 == 0){
    console.log("Valores aceitos")    
}else{
    console.log("Valores não aceitos")
}