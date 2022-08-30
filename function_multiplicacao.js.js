function multiplicação(num01, num02) {
    let resultado = num01 * num02;
    console.log(resultado);

    if(resultado > 100) {
        console.log("numero maior que 100 :)");
    }

    else {
        console.log("numero menor que 100 :)");
    }
}

let conta = multiplicação(10, 40)
let conta02 = multiplicção(2, 7)
let conta03 = multiplicação(40, 1)
console.log(`${conta} e ${conta02} e ${conta03}`);