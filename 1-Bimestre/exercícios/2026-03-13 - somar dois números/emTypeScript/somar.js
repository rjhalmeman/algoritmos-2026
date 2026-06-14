"use strict";
window.funcaoSomarDoisNumeros = () => {
    // Entrada de dados para a função
    const valorA = parseFloat(document.getElementById("inputValorA").value);
    const valorB = parseFloat(document.getElementById("inputValorB").value);
    // Processamento
    const soma = valorA + valorB;
    document.getElementById("resultado").value = soma.toFixed(2).toString();
};
// Opcional: Adicionar evento para evitar problemas de carregamento
window.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById("botaoSomar");
    if (botao) {
        botao.onclick = window.funcaoSomarDoisNumeros;
    }
});
