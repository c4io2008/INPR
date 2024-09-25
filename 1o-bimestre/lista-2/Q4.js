const prompt = require('prompt-sync')({sigint: true});

var anoAtual = 2024;
var anoNascimento, nome, idade;

nome = prompt("Qual o nome? ");
anoNascimento = Number(prompt("Qual o ano de nascimento? "));

idade = anoAtual - anoNascimento;

console.log(`Olá, ${nome}, hoje você tem ${idade} anos`);
