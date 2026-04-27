function ehBissextoSimples(ano) {
    // essa função verifica se um ano é bissexto, mas não leva em consideração as regras completas para anos bissextos
    if (ano % 4 === 0) {
        return true; // O ano é bissexto
    } else {
        return false; // O ano não é bissexto
    }
}

function ehBissextoSimplesRespostaTextual(ano) {
    // essa função verifica se um ano é bissexto, mas não leva em consideração as regras completas para anos bissextos
    if (ano % 4 === 0) {
        return "sim"; // O ano é bissexto
    } else {
        return "não"; // O ano não é bissexto
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