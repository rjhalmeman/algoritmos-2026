/*
Essas funções são exemplos de como criar funções em JavaScript para realizar tarefas específicas, como verificar se um ano é bissexto, determinar se um número é par ou ímpar, e calcular raízes cúbicas e enésimas.

Há uma biblioteca de funções que pode ser usada em diferentes partes do código para evitar repetição e tornar o código mais organizado e fácil de manter. Por exemplo, a função `ehBissextoMelhorado` pode ser usada sempre que for necessário verificar se um ano é bissexto, garantindo que as regras corretas sejam aplicadas.

no programa que vai chamar essas funções, basta importar ou incluir este arquivo de funções e então chamar as funções conforme necessário, passando os argumentos apropriados. Isso torna o código mais modular e reutilizável.

*/


function ehBissextoSimples(ano) {
    // essa função verifica se um ano é bissexto, mas não leva em consideração as regras completas para anos bissextos
    if (ano % 4 === 0) {
        return true; // O ano é bissexto
    } else {
        return false; // O ano não é bissexto
    }
}

function ehBissextoMelhorado(ano) {
    //Anos divisíveis por 100 não são bissextos, a menos que sejam divisíveis por 400. Por isso, 2000 foi bissexto, mas 1900 não foi.
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        return true; // O ano é bissexto
    } else {
        return false; // O ano não é bissexto
    }
}


function ehPar(numero) {
    if (numero % 2 === 0) {
        return true; // O número é par
    } else {
        return false; // O número é ímpar
    }
}

function raizCubica(numero) {
    return numero ** (1 / 3) // Retorna a raiz cúbica do número
}

function raizEnesima(numero, n) {
    return numero ** (1 / n) // Retorna a raiz enésima do número
}
