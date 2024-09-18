const prompt = require('prompt-sync')({sigint: true});

var nome = prompt("Digite o seu nome:");
var anoNascimento = prompt("Digite o ano em que você nasceu:");
var anoAtual
var idade

 anoAtual = 2024


 idade = anoAtual - anoNascimento;


console.log(`Olá, ${nome}, hoje você tem ${idade} anos.`);