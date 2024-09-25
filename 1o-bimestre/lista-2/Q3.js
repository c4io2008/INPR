const prompt = require('prompt-sync')({sigint: true});

var nome, idade, idadeDaqui10Anos;

nome = prompt("Digite o nome: ");
idade = Number(prompt("Digite a idade: "));

idadeDaqui10Anos = idade + 10;

console.log(`Olá ${nome}! Você terá ${idadeDaqui10Anos} anos daqui a 10 anos`);
