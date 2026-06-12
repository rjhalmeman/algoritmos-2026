

function ehPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;
    let contador = 0;
    for (let i = numero; i >= 1; i--) {
        if (numero % i === 0) {
            contador++;
        }
    }
    if (contador === 2) {
        return true;
    } else {
        return false;
    }

}

console.log(ehPrimo(8));