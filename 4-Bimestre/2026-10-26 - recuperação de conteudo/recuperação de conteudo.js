//Recuperação de Conteúdo

//1) Faça o teste de mesa no código abaixo.

// 1. Definição da Classe Produto
class Produto {
  constructor(id, nome, peso, cor, categoria, dataLancamento, preco) {
    this.id = id;
    this.nome = nome;
    this.peso = peso;
    this.cor = cor;
    this.categoria = categoria;
    this.dataLancamento = dataLancamento;
    this.preco = preco;
  }
}

// 2. Criação da lista de produtos (dados de teste)
let listaProdutos = [];
let p = new Produto(1, "Teddy", 1.50, "Marrom", "Ursos", "2023-05-12", 105.90);
listaProdutos.push(p);
p = new Produto(2, "Uni", 0.40, "Rosa", "Mágicos", "2022-11-01", 79.90);
listaProdutos.push(p);
p = new Produto(3, "Arlo", 0.60, "Verde", "Dinossauros", "2023-08-20", 89.90);
listaProdutos.push(p);
p = new Produto(4, "Buck", 0.30, "Verde", "Dinossauros", "2024-02-10", 59.90);
listaProdutos.push(p);
p = new Produto(5, "Mila", 1.2, "Marrom", "Ursos", "2021-09-15", 135.00);
listaProdutos.push(p);

function mostrarContadorPorCategoriaDoAmaral(lista) {
  let vetorCategorias = [];
  let verificador = 0;

  for (let i = 0; i < lista.length; i++) {
    for (let j = 0; j < vetorCategorias.length; j++) {
      if (lista[i].categoria == vetorCategorias[j]) {
        verificador++;
      }
    }
    if (verificador == 0) {
      vetorCategorias.push(lista[i].categoria);
    }
    verificador = 0;
  }

  console.log(vetorCategorias);

  let listagem = "";
  let contador = 0;

  for (let k = 0; k < vetorCategorias.length; k++) {
    listagem += vetorCategorias[k] + ": ";
    for (let l = 0; l < lista.length; l++) {
      if (lista[l].categoria == vetorCategorias[k]) {
        contador++;
      }
    }
    listagem += contador + "\n"; //troquei  br por /n
    contador = 0;
  }
  console.log(listagem); //ajustei para exibir no console
}

console.log("Amaral");
mostrarContadorPorCategoriaDoAmaral(listaProdutos);


