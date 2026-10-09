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


function listProdutosMariaClara(lista) {
  let categoriasNovas = [];

  for (let i = 0; i < lista.length; i++) {
    let categoriaAtual = lista[i].categoria;

    // Adiciona a categoria apenas se ela ainda não estiver no array
    if (!categoriasNovas.includes(categoriaAtual)) {
      categoriasNovas.push(categoriaAtual);
    }
  }

  return categoriasNovas;
}

function mostrarContagemPorCategoriaMariaClara(listaProdutos) {
  let categoriasNovas = listProdutosMariaClara(listaProdutos);
  let tudo = "";

  // O laço externo percorre cada CATEGORIA ÚNICA
  for (let k = 0; k < categoriasNovas.length; k++) {
    let contagem = 0;

    // O laço interno conta quantos PRODUTOS pertencem a esta categoria
    for (let i = 0; i < listaProdutos.length; i++) {
      if (listaProdutos[i].categoria === categoriasNovas[k]) {
        contagem++;
      }
    }

    tudo += "a categoria " + categoriasNovas[k] + " tem " + contagem + " produtos \n";
  }

  return tudo;
}
function categoriasChico(lista) {
  let resp = " A contagem de produtos por categoria é - <br>";
  let con = 1;

  for (let i = 0; i < lista.length; i++) {
    let cat = lista[i].categoria;
    for (let y = 0; y < lista.length; y++) {
      if (cat == lista[y].categoria) {
        con++;
      }
    }
    resp += cat.categoria + " com " + con + " produtos <br>";
  }
  return resp;
}

function categoriasChicoCorrigido(lista) {
  let resp = "A contagem de produtos por categoria é - <br>";
  let categoriasJaProcessadas = [];

  for (let i = 0; i < lista.length; i++) {
    let cat = lista[i].categoria;

    // Evita processar a mesma categoria mais do que uma vez
    if (!categoriasJaProcessadas.includes(cat)) {
      let con = 0; // Reinicia o contador para a categoria atual

      for (let y = 0; y < lista.length; y++) {
        if (cat === lista[y].categoria) {
          con++;
        }
      }
      resp += cat + " com " + con + " produtos <br>";
      categoriasJaProcessadas.push(cat);
    }
  }
  return resp;
}

function MostrarCaroBaratoEDiferenca() {
  let Maior = listaProdutos[0];
  let Menor = listaProdutos[0];

  for (let produto of listaProdutos) {
    if (produto["preco"] > Maior["preco"]) {
      Maior = produto;
    }
    if (produto["preco"] < Menor["preco"]) {
      Menor = produto;
    }
  } // Termino do Loop

  let diferenca = Maior["preco"] - Menor["preco"];

  console.log("Produto mais caro:", Maior.nome, "- R$", Maior.preco);
  console.log("Produto mais barato:", Menor.nome, "- R$", Menor.preco);
  console.log("Diferença de preço: R$", diferenca.toFixed(2));

  return diferenca;
}

function ordemAlfabeticaLays(listapacientes) {
  for (let j = listapacientes.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (listapacientes[i].categoria > listapacientes[i + 1].categoria) {
        let bolha = listapacientes[i];
        listapacientes[i] = listapacientes[i + 1];
        listapacientes[i + 1] = bolha;
      }
    }
  } let resp = ""
  for (let i = 0; i < listapacientes.length; i++) {
    resp += listapacientes[i].categoria + "\n"; //"<br>"
  } return resp
}

function quantidadecategoriaLays(listapacientes) {
  let resp = ""
  ordemAlfabeticaLays(listapacientes)
  let quantidade = 0
  for (let i = 0; i < listapacientes.length; i++) {
    quantidade++;
    if (i == listapacientes.length - 1 || listapacientes[i].categoria != listapacientes[i + 1].categoria) {
      resp += listapacientes[i].categoria + ": " + quantidade + "\n";//+ "<br>"
      quantidade = 0
    }
  }
  return resp;
}

function contarPorCategoria() {
  let contagem = {};

  for (let i = 0; i < listaProdutos.length; i++) {
    let cat = listaProdutos[i].categoria;
    if (contagem[cat]) {
      contagem[cat]++;
    } else {
      contagem[cat] = 1;
    }
  }

  let html = "<br>Quantidade de produtos por categoria:\n";
  for (let categoria in contagem) {
    html += `- ${categoria}: ${contagem[categoria]} produto(s)\n`;
  }

  //document.getElementById("resposta").innerHTML = html;
  console.log(html)
}


console.log("Amaral");
mostrarContadorPorCategoriaDoAmaral(listaProdutos);

console.log("Maria Clara");
console.log(listProdutosMariaClara(listaProdutos));
console.log(mostrarContagemPorCategoriaMariaClara(listaProdutos));

console.log("Lays")
console.log(ordemAlfabeticaLays(listaProdutos));
console.log(quantidadecategoriaLays(listaProdutos));

console.log("Inusitado")
console.log(contarPorCategoria(listaProdutos));