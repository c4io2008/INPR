// Caio Henrique Mariano Bandeira

const prompt = require("prompt-sync")({sigint:true});

console.log("Cardápio da lanchonete");
console.log("Código: 100 - Cachorro quente - preço: 1.20");
console.log("Código: 101 - Bauru simples- preço: 1.30");
console.log("Código: 102 - Bauru com ovo - preço: 1.50");
console.log("Código: 103 - Hambúrger  - preço: 1.20");
console.log("Código: 104 - Cheeseburguer - preço: 1.20");
console.log("Código: 105 - Refrigerante - preço: 1");

var codigo = Number(prompt("<< Qual o codigo do seu lanche?"))
var quantidade = Number(prompt("<< Quantos vc vai pedir?"))

var Cachorro_quente = 1.20 * quantidade
var Bauru_simples = 1.30 * quantidade
var Bauru_com_ovo = 1.50 * quantidade
var Hambúrger = 1.20 * quantidade
var Cheeseburguer = 1.30 * quantidade
var Refrigerante = 1 * quantidade


if (codigo == 100 ) {
    console.log(`Seu Preço é ${Cachorro_quente}`)
}else if ( codigo == 101) {
    console.log(`Seu Preço é ${Bauru_simples}`)
}else if (codigo == 102){
    console.log(`Seu Preço é ${Bauru_com_ovo}`)
}
else if (codigo == 103){
    console.log(`Seu Preço é ${Hambúrger}`)
}else if (codigo == 104){
    console.log(`Seu Preço é ${Cheeseburguer}`)
}else if ( codigo == 105) {
    `Seu Preço é ${Refrigerante}`
}

