const prompt = require("prompt-sync")({sigint:true});

var acido, basico, neutro;
var ph = Number(prompt("Digite o valor do pH da água entre 1.0 e 14.0: "))

if(ph <= 14.0)
  if (ph < 7 ) {
    console.log("Acida");
  }else if (ph > 7) {
    console.log("Basica");
  }else if (ph == 7){
    console.log("Neutra");
} else {
    console.log("pH inválido!")
}





