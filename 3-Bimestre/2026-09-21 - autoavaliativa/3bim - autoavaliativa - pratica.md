**Atividade autoavaliativa \- 21/09/2026**

1) Desabilitar IA

    a) No VSCode, pressione as teclas Ctrl , (segurar o ctrl e pressionar vírgula)  
    b) Na barra de pesquisa no topo da página de configurações, digite  
    c) @id:chat.disableAIFeatures e pressione Enter.  
    d) Isso irá filtrar diretamente a opção correta .Marque a opção Desabilite e oculte

2) Faça o teste de mesa e mostre o desenvolvimento:  
  ```js 
    
    let cidades = ["Campo Mourão", "Goioerê", "Ubiratã", "Peabiru", "Terra Boa"];
    let matrizDistancias = [[0, 67, 83, 16, 31],[67, 0, 65, 87, 95],[83, 65, 0, 96, 102],
    [16, 87, 96, 0, 23],[31, 95, 102, 23, 0]];

    function obterDistancia(cidadeOrigem, cidadeDestino) {
        let posOrigem = -1;
        let posDestino = -1; 
        for (let i = 0; i < cidades.length; i++) {
            if (cidades[i] == cidadeOrigem) {
                posOrigem = i;
            }
            if (cidades[i] == cidadeDestino) {
                posDestino = i;
            }
        }
        if (posOrigem != -1 && posDestino != -1) {
            let distancia = matrizDistancias[posOrigem][posDestino];
            console.log("A distância entre " + cidadeOrigem + " e " + cidadeDestino + " é " + distancia + " km.");
        } else {
            console.log("Erro: Cidade não encontrada.");
        }
    }
    let origem = 'Peabiru'; // o professor pode solicitar outros dados de origem e destino
    let destino = 'Ubiratã';
    obterDistancia(origem, destino);

     ``` 
3) Modele uma classe para gerenciar dados de alunos, possuindo os atributos: **RA, nome e curso**.  
   a) Adicione inicialmente 3 alunos à sua lista.  
   b) Liste os nomes dos alunos e os cursos em que estão matriculados.   
   c) Crie uma função que receba um RA e retorne, se existir, todos os dados do aluno correspondente.  
   d) Crie uma função que pegue a lista atual e a retorne classificada em ordem crescente pelo nome dos alunos.

