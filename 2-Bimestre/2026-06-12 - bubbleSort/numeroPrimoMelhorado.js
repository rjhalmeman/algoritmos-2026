function ehPrimo(numero) {
    // Casos especiais
    if (numero <= 1) return false;
    if (numero <= 3) return true;
    
    // Elimina números pares (exceto 2)
    if (numero % 2 === 0) return false;
    
    // Verifica apenas divisores ímpares até a raiz quadrada
    let limite = Math.floor(Math.sqrt(numero));
    
    for (let i = 3; i <= limite; i += 2) {
        if (numero % i === 0) {
            return false; // Encontrou um divisor
        }
    }
    
    return true; // Nenhum divisor encontrado
}

// Testando a função
console.log("=== Testes da função ehPrimo ===");
console.log(`8 é primo? ${ehPrimo(8)}`);     // false
console.log(`7 é primo? ${ehPrimo(7)}`);     // true
console.log(`2 é primo? ${ehPrimo(2)}`);     // true
console.log(`1 é primo? ${ehPrimo(1)}`);     // false
console.log(`17 é primo? ${ehPrimo(17)}`);   // true
console.log(`15 é primo? ${ehPrimo(15)}`);   // false
console.log(`97 é primo? ${ehPrimo(97)}`);   // true
console.log(`100 é primo? ${ehPrimo(100)}`); // false

// Teste com números maiores
console.log("\n=== Testes com números maiores ===");
console.log(`997 é primo? ${ehPrimo(997)}`);       // true
console.log(`104729 é primo? ${ehPrimo(104729)}`); // true
console.log(`999999 é primo? ${ehPrimo(999999)}`); // false

// Teste de performance
console.log("\n=== Teste de performance ===");
const numeroGrande = 104729; // O 10.000º número primo

console.time("Versão otimizada iterativa");
console.log(`${numeroGrande} é primo? ${ehPrimo(numeroGrande)}`);
console.timeEnd("Versão otimizada iterativa");