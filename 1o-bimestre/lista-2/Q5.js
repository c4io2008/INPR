const prompt = require("prompt-sync")({sigint: true});

var notaEstudante1, notaEstudante2, notaEstudante3, media;

notaEstudante1 = Number(prompt("Digite a nota do 1o estudante: "));
notaEstudante2 = Number(prompt("Digite a nota do 2o estudante: "));
notaEstudante3 = Number(prompt("Digite a nota do 3o estudante: "));

media = (notaEstudante1 + notaEstudante2 + notaEstudante3)/3;

console.log(`Média = ${media}`)
