

function funcaoTabuada(numero) {
    let tabuada = "";
    for (let i = 0; i <= 10; i++) {
        tabuada += numero + " x " + i + " = " + (numero * i) + "\n";
    }
    return tabuada;
}

console.log(funcaoTabuada(5));