const prompt = require('prompt-sync')({sigint: true});

var nome,idade, idadeFutura;

nome = prompt("Digite o seu nome:");
idade = prompt("Digite a sua idade:");

idadeFutura = idade + 10;


console.log("Olá, " + nome + ". Você terá " + idadeFutura + " anos daqui a 10 anos.");