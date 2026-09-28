function criarMatrizVazia(n) {
  let matriz = [];
  for (let i = 0; i < n; i++) {
    let linha = [];
    for (let j = 0; j < n; j++) {
      linha[j] = 0; // preenche com zero cada elemento da matriz
    }
    matriz[i] = linha;
  }
  return matriz;
}

function siamese(n) {
  let matriz = criarMatrizVazia(n);
  // Posição inicial: meio da primeira linha
  let linha = 0;
  let coluna = Math.floor(n / 2); //arredonda para baixo
  for (let valor = 1; valor <= n * n; valor++) {
    matriz[linha][coluna] = valor;
    let proximaLinha = linha - 1;
    let proximaColuna = coluna + 1;    
    if (proximaLinha < 0) {
      proximaLinha = n - 1;
    }
    if (proximaColuna >= n) {
      proximaColuna = 0;
    }
    if (matriz[proximaLinha][proximaColuna] !== 0) {
      proximaLinha = linha + 1;
      proximaColuna = coluna;
    }
    linha = proximaLinha;
    coluna = proximaColuna;
  }
  return matriz;
}

function somaEsperada(n) {
  return (n * (n * n + 1)) / 2;
}

let q3 = siamese(3);
console.log(q3);
let soma = somaEsperada(3)
console.log(soma)