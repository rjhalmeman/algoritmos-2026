// para executar o JS diretamente, sem precisar fazer a parte do HTML faça assim...
// instale a extensão "Code Runner" no VS Code, depois clique com o mouse em cima do código e escolha "Run Code" ou use o atalho Ctrl+Alt+N




function funcaoBubbleSort(conj) {
    debugger;
    for (let topo = conj.length - 1; topo > 0; topo--) {
        for (let i = 0; i < topo; i++) {
            if (conj[i] > conj[i + 1]) {
                let bolha = conj[i];
                conj[i] = conj[i + 1];
                conj[i + 1] = bolha;
            }
        }
    }
    return conj;
}

conj = [5,7,2,9,3];

console.log(funcaoBubbleSort(conj));