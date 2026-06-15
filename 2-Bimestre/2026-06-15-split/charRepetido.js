function semRepetidos(s) {
    let vetorDeCaracteres = s.split(''); //converte a string em um vetor de caracteres
    for (let i = 0; i < vetorDeCaracteres.length; i++) {
        for (let j = i + 1; j < vetorDeCaracteres.length; j++) {
            if (vetorDeCaracteres[i] === vetorDeCaracteres[j] || vetorDeCaracteres[j] == '*') {                
                vetorDeCaracteres[j] = '*';              
                
            }
        }
    }
    let aux = '';
    for (let i = 0; i < vetorDeCaracteres.length; i++) {
        if (vetorDeCaracteres[i] !== '*') {
            aux += vetorDeCaracteres[i];            
        }
    }
    return aux;
}

console.log(semRepetidos("banana"));