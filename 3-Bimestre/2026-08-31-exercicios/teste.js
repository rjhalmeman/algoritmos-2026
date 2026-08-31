function criarMatrizVazia(linhas, colunas){
    let m = new Array(linhas);
    for (let i = 0; i < linhas; i++) {
        let linha = new Array(colunas);
        for (let j = 0; j < colunas; j++) {
            linha[j] = 0;            
        }
        m[i]=linha;     
    }
    return m;
}

let matriz = criarMatrizVazia(2,3);
console.log(matriz);