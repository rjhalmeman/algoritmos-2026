function contarPalavras(frase) {
    const palavras = frase.split(' ');
    return palavras.length;
}

function naoFunciona(palavra){
    palavra[0] = palavra[0].toUpperCase();
    return palavra;
}

function funciona(palavra){
    let aux = palavra.split(''); //converte a string em um vetor de caracteres
    aux[0] = aux[0].toUpperCase();
    return aux.join(''); //converte o vetor de caracteres de volta para string
}

console.log(contarPalavras("a copa do mundo atrapalha a vida do professor"));
console.log(naoFunciona("banana"));
console.log(funciona("banana"));