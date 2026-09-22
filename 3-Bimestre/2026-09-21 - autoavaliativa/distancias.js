let cidades = ["Campo Mourão", "Goioerê", "Ubiratã", "Peabiru", "Terra Boa"];
let matrizDistancias = [
    [0, 67, 83, 16, 31],
    [67, 0, 65, 87, 95],
    [83, 65, 0, 96, 102],
    [16, 87, 96, 0, 23],
    [31, 95, 102, 23, 0]
];

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
let destino = 'Goioerê';
obterDistancia(origem, destino);
