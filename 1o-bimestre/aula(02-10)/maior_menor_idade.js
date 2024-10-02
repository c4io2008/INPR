const prompt = require("prompt-sync")({sigint:true});

console.log(">> verifique se vc é maior de idade")
var idade = Number(prompt("Digite sua idade:"))

if (idade >= 18) {
    console.log(">>Maior de idade");
} else{
    console.log(">>Menor de idade");
}