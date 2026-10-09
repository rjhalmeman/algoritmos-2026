// Constantes para as dimensões da matriz
const maxL = 5;
const maxC = 5;

function matrizFibonacciEspiral(linhas, colunas) {
    // Criar matriz com as dimensões fornecidas
    let matriz = [];
    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = 0;
        }
    }
    
    // Calcular a posição inicial (centro)
    let centroL = Math.floor(linhas / 2);
    let centroC = Math.floor(colunas / 2);
    
    // Gerar os primeiros números de Fibonacci
    let fib = [0, 1];
    for (let i = 2; i < linhas * colunas; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    
    // Preencher em espiral começando do centro
    let direcao = 0; // 0: direita, 1: baixo, 2: esquerda, 3: cima
    let passos = 1;
    let passosAtuais = 0;
    let mudancasDirecao = 0;
    let indiceFib = 0;
    
    let linha = centroL;
    let coluna = centroC;
    
    // Marcar a posição inicial
    matriz[linha][coluna] = fib[indiceFib++];
    
    // Continuar até preencher todos os elementos
    while (indiceFib < linhas * colunas) {
        // Movimentos na direção atual
        for (let i = 0; i < passos; i++) {
            if (indiceFib >= linhas * colunas) break;
            
            // Calcular próxima posição
            if (direcao === 0) coluna++;      // direita
            else if (direcao === 1) linha++;  // baixo
            else if (direcao === 2) coluna--; // esquerda
            else if (direcao === 3) linha--;  // cima
            
            // Verificar se está dentro dos limites
            if (linha >= 0 && linha < linhas && coluna >= 0 && coluna < colunas) {
                matriz[linha][coluna] = fib[indiceFib++];
            }
        }
        
        // Mudar direção
        direcao = (direcao + 1) % 4;
        passosAtuais++;
        
        // A cada duas mudanças de direção, aumentar o número de passos
        if (passosAtuais % 2 === 0) {
            passos++;
        }
    }
    
    return matriz;
}

// Função para exibir a matriz
function exibirMatriz(matriz) {
    // Encontrar o maior número para formatar corretamente
    let maiorNumero = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] > maiorNumero) {
                maiorNumero = matriz[i][j];
            }
        }
    }
    let tamanho = String(maiorNumero).length;
    
    for (let i = 0; i < matriz.length; i++) {
        let linha = "";
        for (let j = 0; j < matriz[i].length; j++) {
            linha += String(matriz[i][j]).padStart(tamanho + 1, ' ');
        }
        console.log(linha);
    }
}

// Testando a função
console.log("Matriz Fibonacci em Espiral (5x5):");
let resultado = matrizFibonacciEspiral(maxL, maxC);
exibirMatriz(resultado);
