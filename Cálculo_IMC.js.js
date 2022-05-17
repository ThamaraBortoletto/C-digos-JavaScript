let nome = "thamara"
let peso = 49
let altura = 1.70
let Imc = 0

Imc = peso / (altura**2)

if(Imc < 18,5 ) {
    console.log(nome +  " Está abaixo do peso :)");
}

else if(Imc < 24.9 ) {
    console.log(nome + " Está no peso peso ideal :)");
}

else {
    console.log(nome + " Está abaixo do peso :(");
}

    


