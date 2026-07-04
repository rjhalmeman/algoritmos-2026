function classificarLivros(vetorLivros) {
    let livrosClassificados = [];

    let resp = "";
    for (let i = 0; i < vetorLivros.length; i++) {
        if (vetorLivros[i] <= 5) {
            resp += "Ocasional";
        } else if (vetorLivros[i] > 5 && vetorLivros[i] <= 12) {
            resp += "Frequente";
        } else if (vetorLivros[i] > 12) {
            resp += "Assíduo";
        }

    }
    return resp;
}

let vetorNomes = ["José Carlos Friburgo", "Maria da Silva", "João Souza", "Ana Cordeiro", "Pedro Silva"];
let vetorLivros = [5, 20, 8, 20, 12];

console.log(classificarLivros(vetorLivros));
console.log("agora testando do modo que a Lais chamou a função");
console.log(classificarLivros(2));
console.log("acima deveria estar a resposta);")

