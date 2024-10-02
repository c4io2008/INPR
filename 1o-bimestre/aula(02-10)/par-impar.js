const prompt = require("prompt-sync")({sigint:true});

var numero = Number(prompt("Digite um número:"));

if (numero % 2 == 0){
    console.log("Par");
} else {
    console.log("Impar");
}

