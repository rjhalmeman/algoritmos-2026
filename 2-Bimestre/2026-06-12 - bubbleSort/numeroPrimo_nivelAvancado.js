function ehPrimoRecursiva(numero, divisor = null) {
    // Inicializa o divisor na primeira chamada
    if (divisor === null) {
        // Números menores ou iguais a 1 não são primos
        if (numero <= 1) return false;
        // Começa a verificação a partir do número - 1
        divisor = numero - 1;
    }
    
    // Caso base: se chegamos ao divisor 1, o número é primo
    if (divisor === 1) {
        return true;
    }
    
    // Caso base: se encontramos um divisor exato (diferente de 1 e do próprio número)
    if (numero % divisor === 0) {
        return false;
    }
    
    // Chamada recursiva: testa o próximo divisor (divisor - 1)
    return ehPrimoRecursiva(numero, divisor - 1);
}

// Testando a função
console.log(ehPrimoRecursiva(8));  // false (não é primo)
console.log(ehPrimoRecursiva(7));  // true (é primo)
console.log(ehPrimoRecursiva(2));  // true (é primo)
console.log(ehPrimoRecursiva(1));  // false (não é primo)
console.log(ehPrimoRecursiva(17)); // true (é primo)
console.log(ehPrimoRecursiva(15)); // false (não é primo)