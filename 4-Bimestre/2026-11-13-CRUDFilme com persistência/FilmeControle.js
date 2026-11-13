let listaFilme = [];
let oQueEstaFazendo = '';
let filme = null;
bloquearAtributos(true);

function procurePorChavePrimaria(chave) {
    for (let i = 0; i < listaFilme.length; i++) {
        if (listaFilme[i].id == chave) {
            listaFilme[i].posicaoNaLista = i; // Atualiza a posição por segurança ao procurar
            return listaFilme[i];
        }
    }
    return null;
}

function procure() {
    const id = document.getElementById("inputId").value;
    if (isNaN(id) || !Number.isInteger(Number(id)) || id.trim() === "") {
        mostrarAviso("Precisa ser um número inteiro válido");
        document.getElementById("inputId").focus();
        return;
    }

    if (id) {
        filme = procurePorChavePrimaria(id);
        if (filme) {
            mostrarDadosFilme(filme);
            visibilidadeDosBotoes('inline', 'none', 'inline', 'inline', 'none');
            mostrarAviso("Achou na lista, pode alterar ou excluir");
        } else {
            limparAtributos();
            visibilidadeDosBotoes('inline', 'inline', 'none', 'none', 'none');
            mostrarAviso("Não achou na lista, pode inserir");
        }
    }
}

function inserir() {
    bloquearAtributos(false);
    visibilidadeDosBotoes('none', 'none', 'none', 'none', 'inline');
    oQueEstaFazendo = 'inserindo';
    mostrarAviso("INSERINDO - Digite os atributos e clique no botão salvar");
    document.getElementById("inputId").focus();
}

function alterar() {
    bloquearAtributos(false);
    visibilidadeDosBotoes('none', 'none', 'none', 'none', 'inline');
    oQueEstaFazendo = 'alterando';
    mostrarAviso("ALTERANDO - Digite os atributos e clique no botão salvar");
}

function excluir() {
    bloquearAtributos(false);
    visibilidadeDosBotoes('none', 'none', 'none', 'none', 'inline');
    oQueEstaFazendo = 'excluindo';
    mostrarAviso("EXCLUINDO - clique no botão salvar para confirmar a exclusão");
}

function salvar() {
    let id;
    if (filme == null) {
        id = parseInt(document.getElementById("inputId").value);
    } else {
        id = parseInt(filme.id);
    }

    const nome = document.getElementById("inputNome").value.trim();
    const ano = parseInt(document.getElementById("inputAno").value);
    const diretor = document.getElementById("inputDiretor").value.trim();

    if (!isNaN(id) && nome !== "" && !isNaN(ano) && diretor !== "") {
        switch (oQueEstaFazendo) {
            case 'inserindo':
                // A posição na lista será o tamanho atual do array
                let novoFilme = new Filme(id, nome, ano, diretor, listaFilme.length);
                listaFilme.push(novoFilme);
                mostrarAviso("Inserido na lista");
                break;

            case 'alterando':
                // Mantém a posição na lista do filme que já existia
                let filmeAlterado = new Filme(id, nome, ano, diretor, filme.posicaoNaLista);
                listaFilme[filme.posicaoNaLista] = filmeAlterado;
                mostrarAviso("Alterado com sucesso");
                break;

            case 'excluindo':
                let novaLista = [];
                let novaPosicao = 0;
                // Reconstrói a lista e recalcula o posicaoNaLista para os elementos que sobraram
                for (let i = 0; i < listaFilme.length; i++) {
                    if (listaFilme[i].id != id) {
                        let filmeMantido = listaFilme[i];
                        filmeMantido.posicaoNaLista = novaPosicao; // Atualiza a posição
                        novaLista.push(filmeMantido);
                        novaPosicao++;
                    }
                }
                listaFilme = novaLista;
                filme = null;
                mostrarAviso("EXCLUIDO");
                break;

            default:
                mostrarAviso("Erro na operação");
        }

        visibilidadeDosBotoes('inline', 'none', 'none', 'none', 'none');
        limparAtributos();
        listar();
        document.getElementById("inputId").focus();
    } else {
        alert("Erro: Preencha todos os campos corretamente.");
    }
}

function preparaListagem(vetor) {
    let texto = "";
    for (let i = 0; i < vetor.length; i++) {
        const linha = vetor[i];
        texto += linha.id + " - " + linha.nome + " - " + linha.ano + " - " + linha.diretor + "<br>";
    }
    return texto;
}

function listar() {
    document.getElementById("outputSaida").innerHTML = preparaListagem(listaFilme);
}

function cancelarOperacao() {
    limparAtributos();
    bloquearAtributos(true);
    visibilidadeDosBotoes('inline', 'none', 'none', 'none', 'none');
    filme = null;
    mostrarAviso("Cancelou a operação");
}

function mostrarAviso(mensagem) {
    document.getElementById("divAviso").innerHTML = mensagem;
}

function mostrarDadosFilme(filme) {
    document.getElementById("inputId").value = filme.id;
    document.getElementById("inputNome").value = filme.nome;
    document.getElementById("inputAno").value = filme.ano;
    document.getElementById("inputDiretor").value = filme.diretor;
    bloquearAtributos(true);
}

function limparAtributos() {
    document.getElementById("inputNome").value = "";
    document.getElementById("inputAno").value = "";
    document.getElementById("inputDiretor").value = "";
    bloquearAtributos(true);
}

function bloquearAtributos(soLeitura) {
    document.getElementById("inputId").readOnly = !soLeitura;
    document.getElementById("inputNome").readOnly = soLeitura;
    document.getElementById("inputAno").readOnly = soLeitura;
    document.getElementById("inputDiretor").readOnly = soLeitura;
}

function visibilidadeDosBotoes(btProcure, btInserir, btAlterar, btExcluir, btSalvar) {
    document.getElementById("btProcure").style.display = btProcure;
    document.getElementById("btInserir").style.display = btInserir;
    document.getElementById("btAlterar").style.display = btAlterar;
    document.getElementById("btExcluir").style.display = btExcluir;
    document.getElementById("btSalvar").style.display = btSalvar;
    document.getElementById("btCancelar").style.display = btSalvar;
    document.getElementById("inputId").focus();
}

function persistirEmLocalPermanente(arquivoDestino, conteudo) {
    // função necessária para funcionar no navegador (browser)
    const blob = new Blob([conteudo], { type: 'text/plain' }); 
    /* 
    Um Blob (Binary Large Object, ou Objeto Binário Grande) em JavaScript é um objeto que representa dados brutos e imutáveis em formato binário.
    Ele permite que o navegador manipule arquivos ou blocos de dados (como imagens, vídeos, áudios ou textos) diretamente na memória do cliente, 
    sem a necessidade imediata de enviá-los ou baixá-los de um servidor.
    */
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = arquivoDestino;
    link.click();
    URL.revokeObjectURL(link.href);
}

function abrirArquivoSalvoEmLocalPermanente() {
    // função necessária para funcionar no navegador (browser)
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.csv';
    input.onchange = function (event) {
        const arquivo = event.target.files[0];
        if (arquivo) {
            converterDeCSVparaListaObjeto(arquivo);
        }
    };
    input.click();
}

function prepararESalvarCSV() {
    let nomeDoArquivoDestino = "Filme.csv";
    let textoCSV = "";
    for (let i = 0; i < listaFilme.length; i++) {
        const linha = listaFilme[i];
        textoCSV += linha.id + ";" + linha.nome + ";" + linha.ano + ";" + linha.diretor + "\n";
    }
    persistirEmLocalPermanente(nomeDoArquivoDestino, textoCSV);
}

function converterDeCSVparaListaObjeto(arquivo) {
    const leitor = new FileReader();
    leitor.onload = function (e) {
        const conteudo = e.target.result; //obtem o conteúdo do arquivo csv
        const linhas = conteudo.split('\n'); //cria um vetor, com cada linha do csv
        listaFilme = [];

        for (let i = 0; i < linhas.length; i++) {
            const linha = linhas[i].trim();
            if (linha) {
                const dados = linha.split(';');
                let novoFilme = new Filme(
                    parseInt(dados[0]),
                    dados[1],
                    parseInt(dados[2]),
                    dados[3]
                );
                listaFilme.push(novoFilme);
            }
        }
        listar();
        mostrarAviso("Arquivo carregado com sucesso!");
    };
    leitor.readAsText(arquivo);
}