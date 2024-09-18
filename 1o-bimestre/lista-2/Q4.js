const prompt = require('prompt-sync')({sigint: true});

var nota1, nota2, nota3;
var soma, divisao;


 nota1 = Number (prompt("Digite a nota do primeiro bimestre:"));
 nota2 = Number (prompt("Digite a nota do segundo bimestre:"));
 nota3 = Number (prompt("Digite a nota do terceiro bimestre:"));
 
 soma = nota1 + nota2 + nota3 ;
 divisao = soma / 3 ;


 


 console.log(` A media do aluno é ${nota1} ${nota2} ${nota3} = ${divisao}`);