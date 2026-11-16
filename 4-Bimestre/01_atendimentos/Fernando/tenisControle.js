let listaTenis = []; //conjunto de dados
let oQueEstaFazendo = ''; //variável global de controle
let tenis = null; //variavel global 
bloquearAtributos(true);

//backend (não interage com o html)
function procurePorChavePrimaria(chave) {
    for (let i = 0; i < listaTenis.length; i++) {
        const tenis = listaTenis[i];
        if (tenis.idTenis == chave) {
            tenis.posicaoNaLista = i;
            return listaTenis[i];
        }
    }
    return null;//não achou
}

// Função para procurar um elemento pela chave primária
function procure() {
    const idTenis = document.getElementById("inputidTenis").value;
    if (isNaN(idTenis) || !Number.isInteger(Number(idTenis))) {
        mostrarAviso("Precisa ser um número inteiro");
        document.getElementById("inputidTenis").focus();
        return;
    }

    if (idTenis) { // se digitou um idTenis
        tenis = procurePorChavePrimaria(idTenis);
        if (tenis) { //achou na lista
            mostrarDadosTenis(tenis);
            visibilidadeDosBotoes('inline', 'none', 'inline', 'inline', 'none'); 
            mostrarAviso("Achou na lista, pode alterar ou excluir");
        } else { //não achou na lista
            limparAtributos();
            visibilidadeDosBotoes('inline', 'inline', 'none', 'none', 'none');
            mostrarAviso("Não achou na lista, pode inserir");
        }
    } else {
        document.getElementById("inputidTenis").focus();
        return;
    }
}

//backend->frontend
function inserir() {
    bloquearAtributos(false);
    visibilidadeDosBotoes('none', 'none', 'none', 'none', 'inline'); 
    oQueEstaFazendo = 'inserindo';
    mostrarAviso("INSERINDO - Digite os atributos e clique no botão salvar");
    document.getElementById("inputidTenis").focus();
}

// Função para alterar um elemento da lista
function alterar() {
    bloquearAtributos(false);
    visibilidadeDosBotoes('none', 'none', 'none', 'none', 'inline');
    oQueEstaFazendo = 'alterando';
    mostrarAviso("ALTERANDO - Digite os atributos e clique no botão salvar");
}

// Função para excluir um elemento da lista
function excluir() {
    bloquearAtributos(false);
    visibilidadeDosBotoes('none', 'none', 'none', 'none', 'inline'); 
    oQueEstaFazendo = 'excluindo';
    mostrarAviso("EXCLUINDO - clique no botão salvar para confirmar a exclusão");
}

function salvar() {
    let idTenis;
    if (tenis == null) {
        idTenis = parseInt(document.getElementById("inputidTenis").value);
    } else {
        idTenis = tenis.idTenis;
    }

    const marca = document.getElementById("inputMarca").value;
    const modelo = document.getElementById("inputModelo").value;
    const precoRev = parseInt(document.getElementById("inputPreco").value);
    const tamanho = parseInt(document.getElementById("inputTamanho").value);
    
    if (idTenis && marca && modelo && precoRev && tamanho) { 
        switch (oQueEstaFazendo) {
            case 'inserindo':
                // Corrigida a ordem: id, modelo, marca, preco, tamanho
                tenis = new Tenis(idTenis, modelo, marca, precoRev, tamanho);
                listaTenis.push(tenis);
                mostrarAviso("Inserido na lista");
                break;
            case 'alterando':
                let tenisAlterado = new Tenis(idTenis, modelo, marca, precoRev, tamanho);
                listaTenis[tenis.posicaoNaLista] = tenisAlterado;
                mostrarAviso("Alterado");
                break;
            case 'excluindo':
                let novaLista = [];
                for (let i = 0; i < listaTenis.length; i++) {
                    if (tenis.posicaoNaLista != i) {
                        novaLista.push(listaTenis[i]);
                    }
                }
                listaTenis = novaLista;
                mostrarAviso("EXCLUIDO");
                break;
            default:
                mostrarAviso("Erro aleatório");
        }
        visibilidadeDosBotoes('inline', 'none', 'none', 'none', 'none');
        limparAtributos();
        listar();
        document.getElementById("inputidTenis").focus();
    } else {
        alert("Erro nos dados digitados");
        return;
    }
}

// Função de Filtro e Ordenação (Corrigida)
// Função de Filtro e Ordenação (Algoritmo genérico com input dinâmico)
function checkMarca() {
    // Lê a marca digitada no input e converte para minúsculo
    let marcaDesejada = document.getElementById("inputFiltroMarca").value.trim().toLowerCase();
    let listaFiltrada = [];
    
    // 1. Filtragem manual (Filtro 1 - Condicional)
    for (let i = 0; i < listaTenis.length; i++) {
        // Compara ignorando maiúsculas/minúsculas
        if (listaTenis[i].marca.toLowerCase() === marcaDesejada) {
            listaFiltrada.push(listaTenis[i]);
        }
    }
          
    // Tratamento caso a lista esteja vazia
    if(listaFiltrada === "") {
        // Pega exatamente como o usuário digitou para mostrar na mensagem
        let marcaOriginal = document.getElementById("inputFiltroMarca").value;
        listaFiltrada = "Nenhum tênis da marca '" + (marcaOriginal || "vazia") + "' encontrado.";
    }
    
    const lista = preparaListagem(listaFiltrada);

    // Exibe o resultado na tela
    document.getElementById("outputSaida").innerHTML = lista;
}

//backend
function preparaListagem(vetor) {
    let texto = "";
    for (let i = 0; i < vetor.length; i++) {
        const linha = vetor[i];
        texto +=
            linha.idTenis + " - " +
            linha.marca + " - " +
            linha.modelo + " - " +
            linha.precoRev.toFixed(2) + " - " +
            linha.tamanho + "<br>";
    }
    return texto;
}

//backend->frontend (interage com html)
function listar() {
    document.getElementById("outputSaida").innerHTML = preparaListagem(listaTenis);
}

function cancelarOperacao() {
    limparAtributos();
    bloquearAtributos(true);
    visibilidadeDosBotoes('inline', 'none', 'none', 'none', 'none');
    mostrarAviso("Cancelou a operação de edição");
}

function mostrarAviso(mensagem) {
    document.getElementById("divAviso").innerHTML = mensagem;
}

// Função para mostrar os dados do tenis nos campos
function mostrarDadosTenis(tenis) {
    document.getElementById("inputidTenis").value = tenis.idTenis;
    document.getElementById("inputMarca").value = tenis.marca;
    document.getElementById("inputModelo").value = tenis.modelo;
    // Corrigido para tenis.precoRev
    document.getElementById("inputPreco").value = tenis.precoRev; 
    document.getElementById("inputTamanho").value = tenis.tamanho;

    bloquearAtributos(true);
}

// Função para limpar os dados dos campos
function limparAtributos() {
    document.getElementById("inputMarca").value = "";
    document.getElementById("inputModelo").value = "";
    document.getElementById("inputPreco").value = "";
    document.getElementById("inputTamanho").value = "";

    bloquearAtributos(true);
}

function bloquearAtributos(soLeitura) {
    document.getElementById("inputidTenis").readOnly = !soLeitura;
    document.getElementById("inputMarca").readOnly = soLeitura;
    document.getElementById("inputModelo").readOnly = soLeitura;
    document.getElementById("inputPreco").readOnly = soLeitura;
    document.getElementById("inputTamanho").readOnly = soLeitura;
}

// Função para deixar visível ou invisível os botões
function visibilidadeDosBotoes(btProcure, btInserir, btAlterar, btExcluir, btSalvar) {
    document.getElementById("btProcure").style.display = btProcure;
    document.getElementById("btInserir").style.display = btInserir;
    document.getElementById("btAlterar").style.display = btAlterar;
    document.getElementById("btExcluir").style.display = btExcluir;
    document.getElementById("btSalvar").style.display = btSalvar;
    
    // Verifica se o botão cancelar existe para aplicar o estilo, prevenindo erros
    let btCancelar = document.getElementById("btCancelar");
    if(btCancelar) {
        btCancelar.style.display = btSalvar; 
    }
    
    document.getElementById("inputidTenis").focus();
}