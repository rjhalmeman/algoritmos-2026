
// --- VARIÁVEIS GLOBAIS ---
let matriz = [];
let totalLinhas = 0;
let totalColunas = 0;
let linhaAtual = 0;
let colunaAtual = 0;
let contadorTotal = 0; 
let inputNum = document.getElementById("inputNumero");

// Função para ler os inputs de dimensão e criar a estrutura inicial da Matriz
function criarMatriz() {
    // Leitura dos tamanhos informados pelo usuário
    totalLinhas = parseInt(document.getElementById("inputLinhas").value);
    totalColunas = parseInt(document.getElementById("inputColunas").value);

    if (isNaN(totalLinhas) || totalLinhas <= 0 || isNaN(totalColunas) || totalColunas <= 0) {
        alert("Informe valores válidos maiores que zero para linhas e colunas.");
        return;
    }

    // Inicialização da matriz como um array de arrays (vetor de linhas)
    matriz = [];
    for (let i = 0; i < totalLinhas; i++) {
        matriz.push([]); // Cria uma linha vazia para cada índice 'i'
    }

    // Reseta a posição de inserção e os contadores
    linhaAtual = 0;
    colunaAtual = 0;
    contadorTotal = 0;
   
    // Habilita o campo e o botão de entrada
    inputNum.disabled = false;
    document.getElementById("btnAdicionar").disabled = false;

    // Atualiza a tela com as novas informações
    document.getElementById("spanLimite").innerHTML = "Dimensão configurada: " + totalLinhas + " Linhas x " + totalColunas + " Colunas";
    document.getElementById("spanPosicaoAtual").innerHTML = "Próxima inserção em: <b>Matriz[0][0]</b>";
    document.getElementById("outputContador").innerHTML = "0 / " + (totalLinhas * totalColunas);
    document.getElementById("resultadoSoma").innerHTML = "0";
    document.getElementById("resultadoMedia").innerHTML = "0";
    exibirMatriz();

    
    // Coloca o foco no input de inserção de números
    inputNum.focus();
    //seleciona o conteúdo do input para facilitar a digitação
    inputNum.select();
}

function adicionar() {
    // CONCEITO 1: Verificação de limite
    if (linhaAtual >= totalLinhas) {
        alert("A matriz já está totalmente preenchida!");
        inputNum.focus();
        inputNum.select();
        return;
    }

    let num = parseInt(inputNum.value);

    if (isNaN(num)) {
        alert("Por favor, insira um número inteiro válido.");
        inputNum.focus();
        inputNum.select();
        return;
    }

    // CONCEITO 2: Atribuição por coordenadas de Linha e Coluna
    matriz[linhaAtual][colunaAtual] = num;
    contadorTotal++;

    // CONCEITO 3: Navegação na Matriz
    // Avança para a próxima coluna; se estourar o limite de colunas, avança para a próxima linha
    colunaAtual++;
    if (colunaAtual >= totalColunas) {
        colunaAtual = 0; // Volta para a primeira coluna
        linhaAtual++;    // Avança para a próxima linha
    }

    // Atualiza as informações exibidas na tela
    exibirMatriz();
    document.getElementById("outputContador").innerHTML = contadorTotal + " / " + (totalLinhas * totalColunas);

    if (linhaAtual < totalLinhas) {
        document.getElementById("spanPosicaoAtual").innerHTML = "Próxima inserção em: <b>Matriz[" + linhaAtual + "][" + colunaAtual + "]</b>";
    } else {
        document.getElementById("spanPosicaoAtual").innerHTML = "<b>Matriz totalmente preenchida!</b>";
    }

    // REQUISITO: Seleciona o conteúdo do input e devolve o foco para ele
    inputNum.focus();
    inputNum.select();
}

// Função utilitária para formatar a matriz na tela por linhas
function exibirMatriz() {
    let texto = "";
    for (let i = 0; i < totalLinhas; i++) {
        texto += "Linha " + i + ": [ " + matriz[i].join(", ") + " ]<br>";
    }
    document.getElementById("dadosLidos").innerHTML = texto;
}

function calcularSoma() {
    if (contadorTotal === 0) {
        alert("A matriz está vazia!");
        return;
    }

    let soma = 0;

    // CONCEITO 4: Varredura com Loops Aninhados (for dentro de for)
    for (let i = 0; i < totalLinhas; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j]; // Acessa o valor na linha 'i' e coluna 'j'
        }
    }

    document.getElementById("resultadoSoma").innerHTML = soma;
}

