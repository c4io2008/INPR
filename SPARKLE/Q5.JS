const prompt = require('prompt-sync')({sigint: true});

console.log("Descubra se vc pode estudar aq:")


var idade = Number(prompt("Digite sua idade:"))

if(idade >= 14 && idade <= 18){
    console.log("Vc pode estudar aq!")
}else{
    console.log("Vc não pode estudar aq!")
}