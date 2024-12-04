const prompt = require("prompt-sync")({sigint:true}); 


var numeroSecreto = 5

var chute = 0

while(chute != numeroSecreto){
    chute = prompt("Digite seu chute de 1 a 10: ");
    if (chute == numeroSecreto){
        console.log('Vc acertou o numero!!')
    }else if(chute < numeroSecreto){
        console.log("Chute menor!")
    }else if (chute > numeroSecreto){
        console.log("Chute maior!")
    }else{
        console.log("Chute invalido!")
    }
}