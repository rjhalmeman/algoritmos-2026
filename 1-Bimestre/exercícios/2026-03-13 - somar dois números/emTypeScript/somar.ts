(window as any).funcaoSomarDoisNumeros = (): void => {
    // Entrada de dados para a função
    const valorA: number = parseFloat(
        (document.getElementById("inputValorA") as HTMLInputElement).value
    );

    const valorB: number = parseFloat(
        (document.getElementById("inputValorB") as HTMLInputElement).value
    );

    // Processamento
    const soma: number = valorA + valorB;

    (document.getElementById("resultado") as HTMLInputElement).value = soma.toFixed(2).toString();
}

// Opcional: Adicionar evento para evitar problemas de carregamento
window.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById("botaoSomar");
    if (botao) {
        botao.onclick = (window as any).funcaoSomarDoisNumeros;
    }
});