//Ventola (soma)

function soma(num01, num02) {
    let resultado = num01 + num02
    return resultado / 5;
}

//Thamara (retorna se é maior sim ou não)

function multiplicação(num01, num02) {
    let resultado = num01 * num02;
    //console.log(resultado);
    return true;

    if(resultado > 100) {
        //console.log("numero maior que 100 :)");
        return false;
    }

    else {
        console.log("numero menor que 100 :)");
    }

}

//Sofia (monta o convite)

function convite (Nome, Horario) 
{
  console.log("Olá, você foi convidado para o aniversário de " + Nome + ", a festa irá iniciar ás " + Horario + ", te espero lá :)");
}

let resultado01 = soma(14, 10);
let resultado02 = soma(50, 30);

let resposta = multiplicação(resultado01, resultado02);

if(resposta) {
    convite("Nome inteligente", resultado01);
}