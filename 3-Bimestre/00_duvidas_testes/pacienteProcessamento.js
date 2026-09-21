import { listaPacientes } from './dadosPaciente.js';

/* ---------- Funções de processamento ---------- */

export function mostrarListaPacientes(lista) {
    let listagem = "";
    listagem += "<strong>Nome | Convênio | Idade</strong><br>";
    listagem += "----------------------------------------<br>";
    for (let i = 0; i < lista.length; i++) {
        const linha = lista[i];
        listagem += i + " - " + linha.nome + " - " + linha.convenio + " - " + linha.idade + " anos<br>";
    }
    return listagem;
}

export function bubbleSort(lista) {
    // cópia real da lista
    let novaLista = lista.slice();
    let n = novaLista.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (novaLista[j].convenio > novaLista[j + 1].convenio) {
                let temp = novaLista[j];
                novaLista[j] = novaLista[j + 1];
                novaLista[j + 1] = temp;
            }
        }
    }
    return novaLista;
}



export function contarRepetidos(lista) {
    let cont = 0;
    for (let i = 0; i < lista.length; i++) {
        for (let j = i + 1; j < lista.length; j++) {
            if (lista[i].nome === lista[j].nome) {
                cont++;
            }
        }
    }
    return cont;
}

export function agruparPorConvenio(listaOrdenada) {
    let convenios = [];
    let i = 0;
    while (i < listaOrdenada.length) {
        let aux = listaOrdenada[i].convenio;
        convenios.push(aux);
        while (i < listaOrdenada.length && listaOrdenada[i].convenio === aux) {
            i++;
        }
    }
    return convenios;
}

function obterIndiceConvenio(convenio) {

    for (let i = 0; i < osConvenios.length; i++) {
        const element = osConvenios[i];
        if (convenio === element){
            return i;
        } 
    }
    return -1;
}

function obterIndiceFaixaEtaria(idade) {
    if (idade < 30) return 0;
    if (idade <= 59) return 1;
    return 2;
}

export function construirMatrizConvenioFaixaEtaria(pacientes) {
    let matriz = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    for (let k = 0; k < pacientes.length; k++) {
        let p = pacientes[k];
        let i = obterIndiceConvenio(p.convenio);
        let j = obterIndiceFaixaEtaria(p.idade);
        if (i !== -1 && j !== -1) {
            matriz[i][j]++;
        }
    }
    return matriz;
}

export function exibirTabela(matriz) {

    let totalJovem = 0, totalAdulto = 0, totalIdoso = 0, totalGeral = 0;

    console.log("| Convênio | Jovem | Adulto | Idoso | Total |");
    console.log("| :--- | :--: | :--: | :--: | :--: |");

    for (let i = 0; i < matriz.length; i++) {
        let totalLinha = 0;
        for (let j = 0; j < 3; j++) {
            totalLinha += matriz[i][j];
        }
        totalJovem += matriz[i][0];
        totalAdulto += matriz[i][1];
        totalIdoso += matriz[i][2];
        totalGeral += totalLinha;

        console.log("| " + osConvenios[i] + " | " + matriz[i][0] + " | " + matriz[i][1] + " | " + matriz[i][2] + " | " + totalLinha + " |");
    }
    console.log("| Total | " + totalJovem + " | " + totalAdulto + " | " + totalIdoso + " | " + totalGeral + " |");
}

/* ---------- Handlers chamados pelos botões ---------- */



/* ---------- Expondo no escopo global para o onclick ---------- */

//window.listarTodosOsPacientes = listarTodosOsPacientes;

let osConvenios = agruparPorConvenio(bubbleSort(listaPacientes));

//window.mostrarPacienteMaisPesado = mostrarPacienteMaisPesado;

/* ---------- Execução opcional no console ---------- */
let matrizResultante = construirMatrizConvenioFaixaEtaria(listaPacientes);
exibirTabela(matrizResultante);