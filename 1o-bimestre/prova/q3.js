// Caio Henrique Mariano Bandeira
const prompt = require("prompt-sync")({sigint:true});


var rodadas = 3;
var rodadasGanhas1 = 0;
var rodadasGanhas2 = 0;
var contador = 0;

var jogador1 = prompt("Digite seu nome Jogador1:");
var jogador2 = prompt("Digite seu nome Jogador2:");

while(contador < 3){
   var jogada1 = prompt("Qual a sua primeira jogada", jogador1);
   var jogada2 = prompt("Qual a sua primeira jogada?", jogador2);

   if (jogada1 === jogada2){
    console.log("Deu Empate")
   }else if( jogada1 === 'Pedra' && jogada2 === 'Tesoura'|| jogada1 === 'Tesoura' && jogada2 === 'Papel' || jogada1 === 'Papel' && jogada2 === 'Pedra'){
    console.log("O", jogador1,"Ganhou")
    rodadasGanhas1 =+ contador
   }else if(jogada2 === 'Pedra' && jogada1 === 'Tesoura'|| jogada2 === 'Tesoura' && jogada1 === 'Papel' || jogada2 === 'Papel' && jogada1 === 'Pedra'){
    console.log("O",jogador2,"Ganhou")
    rodadasGanhas2 =+ contador
   }
   contador++
   if(rodadasGanhas1 == rodadas){
    console.log (jogador1, "Venceu o jogo")
   }else if(rodadasGanhas2 == rodadas){
    console.log (jogador2, "Venceu o jogo")
   }
}