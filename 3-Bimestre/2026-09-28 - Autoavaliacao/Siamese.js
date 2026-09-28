// ============================================================
// QUADRADO MÁGICO - MÉTODO SIAMESE (ORDEM ÍMPAR)
// Foco: estudo de matrizes e algoritmos
// ============================================================


// ------------------------------------------------------------
// 1. Cria uma matriz n x n preenchida com 0 (célula vazia)
// ------------------------------------------------------------
function criarMatrizVazia(n) {
  let matriz = [];
  for (let i = 0; i < n; i++) {
    let linha = [];
    for (let j = 0; j < n; j++) {
      linha[j] = 0; // 0 representa "célula vazia"
    }
    matriz[i] = linha;
  }
  return matriz;
}


// ------------------------------------------------------------
// 2. Constrói o quadrado mágico pelo Método Siamese
// ------------------------------------------------------------
function siamese(n) {
  // Verificação: só funciona para ordem ímpar
  if (n % 2 === 0) {
    return "Erro: o método Siamese exige ordem ímpar";
  }

  let matriz = criarMatrizVazia(n);

  // Posição inicial: meio da primeira linha
  let linha = 0;
  let coluna = Math.floor(n / 2); //arredonda para baixo

  // Preenche de 1 até n*n
  for (let valor = 1; valor <= n * n; valor++) {

    // Coloca o valor na posição atual
    matriz[linha][coluna] = valor;

    // Calcula próxima posição: sobe uma linha, avança uma coluna
    let proximaLinha = linha - 1;
    let proximaColuna = coluna + 1;

    // Ajuste: se saiu por cima, volta para a última linha
    if (proximaLinha < 0) {
      proximaLinha = n - 1;
    }

    // Ajuste: se saiu pela direita, volta para a primeira coluna
    if (proximaColuna >= n) {
      proximaColuna = 0;
    }

    // Se a célula já estiver ocupada, desce uma linha (mesma coluna)
    if (matriz[proximaLinha][proximaColuna] !== 0) {
      proximaLinha = linha + 1;
      proximaColuna = coluna;
    }

    // Atualiza a posição para a próxima iteração
    linha = proximaLinha;
    coluna = proximaColuna;
  }

  return matriz;
}


// ------------------------------------------------------------
// 3. Imprime a matriz formatada (com concatenação de strings)
// ------------------------------------------------------------
function imprimirMatriz(matriz) {
  let n = matriz.length;
  let saida = "";

  for (let i = 0; i < n; i++) {
    let linhaTexto = "";
    for (let j = 0; j < n; j++) {
      let valor = matriz[i][j];

      // Formata com espaços para alinhar
      if (valor < 10) {
        linhaTexto = linhaTexto + "  " + valor + " ";
      } else {
        linhaTexto = linhaTexto + " " + valor + " ";
      }
    }
    saida = saida + linhaTexto + "\n";
  }

  console.log(saida);
}


// ------------------------------------------------------------
// 4. Calcula a constante mágica teórica
// ------------------------------------------------------------
function somaEsperada(n) {
  return (n * (n * n + 1)) / 2;
}


// ------------------------------------------------------------
// 5. Verifica se o quadrado é realmente mágico
// ------------------------------------------------------------
function verificarQuadrado(matriz) {
  let n = matriz.length;
  let esperado = somaEsperada(n);

  // Soma das linhas
  for (let i = 0; i < n; i++) {
    let soma = 0;
    for (let j = 0; j < n; j++) {
      soma = soma + matriz[i][j];
    }
    if (soma !== esperado) {
      return "Falha na linha " + i;
    }
  }

  // Soma das colunas
  for (let j = 0; j < n; j++) {
    let soma = 0;
    for (let i = 0; i < n; i++) {
      soma = soma + matriz[i][j];
    }
    if (soma !== esperado) {
      return "Falha na coluna " + j;
    }
  }

  // Diagonal principal
  let somaDiag = 0;
  for (let i = 0; i < n; i++) {
    somaDiag = somaDiag + matriz[i][i];
  }
  if (somaDiag !== esperado) {
    return "Falha na diagonal principal";
  }

  // Diagonal secundária
  let somaDiagSec = 0;
  for (let i = 0; i < n; i++) {
    somaDiagSec = somaDiagSec + matriz[i][n - 1 - i];
  }
  if (somaDiagSec !== esperado) {
    return "Falha na diagonal secundária";
  }

  return "Quadrado mágico válido! Constante = " + esperado;
}


// ============================================================
// PROGRAMA PRINCIPAL
// ============================================================

const ordem = 15;
console.log("===== QUADRADO MÁGICO ORDEM "+ordem+" =====\n");
let q3 = siamese(ordem);
imprimirMatriz(q3);
console.log(verificarQuadrado(q3));

