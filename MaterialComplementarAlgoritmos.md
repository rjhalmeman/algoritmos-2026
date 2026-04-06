# 📘 Tutorial Técnico: Algoritmos com HTML e JavaScript

## 📋 Índice
- [📘 Tutorial Técnico: Algoritmos com HTML e JavaScript](#-tutorial-técnico-algoritmos-com-html-e-javascript)
  - [📋 Índice](#-índice)
  - [Introdução](#introdução)
  - [1. Algoritmos Sequenciais](#1-algoritmos-sequenciais)
    - [1.1 Conceito](#11-conceito)
    - [1.2 Exemplo: Cálculo de Média](#12-exemplo-cálculo-de-média)
    - [1.3 Exemplo: Área de um Retângulo](#13-exemplo-área-de-um-retângulo)
  - [2. Algoritmos com Condicionais](#2-algoritmos-com-condicionais)
    - [2.1 Conceito](#21-conceito)
    - [2.2 Exemplo: Verificar Maior Número](#22-exemplo-verificar-maior-número)
    - [2.3 Exemplo: Classificação de Idade](#23-exemplo-classificação-de-idade)
  - [3. Funções (Functions)](#3-funções-functions)
    - [3.1 Conceito](#31-conceito)
    - [3.2 Exemplo: Calculadora de Dobro](#32-exemplo-calculadora-de-dobro)
  - [4. Algoritmos com Repetição](#4-algoritmos-com-repetição)
    - [4.1 Conceito](#41-conceito)
    - [4.2 Exemplo: Gerador de Tabuada](#42-exemplo-gerador-de-tabuada)
  - [5. Algoritmos com Strings](#5-algoritmos-com-strings)
    - [5.1 Conceito](#51-conceito)
    - [5.2 Exemplo: Manipulação de Texto](#52-exemplo-manipulação-de-texto)
  - [6. Agregados Homogêneos (Vetores e Matrizes)](#6-agregados-homogêneos-vetores-e-matrizes)
    - [6.1 Conceito](#61-conceito)
    - [6.2 Exemplo: Lista de Nomes (Vetor)](#62-exemplo-lista-de-nomes-vetor)
  - [7. Agregados Heterogêneos (Objetos)](#7-agregados-heterogêneos-objetos)
    - [7.1 Conceito](#71-conceito)
    - [7.2 Exemplo: Ficha de Usuário](#72-exemplo-ficha-de-usuário)
  - [8. CRUD em Memória RAM](#8-crud-em-memória-ram)
    - [8.1 Conceito](#81-conceito)
    - [8.2 Exemplo: Gerenciador de Produtos](#82-exemplo-gerenciador-de-produtos)
  - [Conclusão](#conclusão)

---

## Introdução

Neste tutorial, vamos aprender a implementar **algoritmos básicos e avançados** utilizando **HTML e JavaScript**, focando nos tipos fundamentais:

- **Algoritmos sequenciais**
- **Algoritmos com condicionais**
- **Funções (functions)**
- **Algoritmos com repetição**
- **Algoritmos com strings**
- **Algoritmos com agregados homogêneos (uni e multidimensionais)**
- **Algoritmos com agregados heterogêneos (maior ênfase em vetores de objetos)**
- **CRUD em memória RAM**

A ideia é entender como a lógica funciona na prática, usando entradas simples e exibindo resultados diretamente na página, empregando boas práticas como o uso de **labels** para acessibilidade.

---

## 1. Algoritmos Sequenciais

---

### 1.1 Conceito

Um **algoritmo sequencial** executa instruções **uma após a outra**, sem desvios ou decisões. 

Ou seja, o fluxo é **linear**:
1. Entrada de dados
2. Processamento
3. Saída

---

### 1.2 Exemplo: Cálculo de Média

Neste exemplo, o algoritmo recebe duas notas e calcula a **média aritmética**. Utilizamos as tags `<label>` para identificar claramente os campos de entrada.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Média</title>
</head>
<body>

<h2>Cálculo de Média</h2>

<label for="nota1">Nota 1:</label>
<input type="number" id="nota1" placeholder="Ex: 8"><br><br>

<label for="nota2">Nota 2:</label>
<input type="number" id="nota2" placeholder="Ex: 7"><br><br>

<input type="button" onclick="calcularMedia()" value="Calcular Média">

<p id="resultado"></p>

<script>
function calcularMedia() {
  let n1 = parseFloat(document.getElementById("nota1").value);
  let n2 = parseFloat(document.getElementById("nota2").value);

  let media = (n1 + n2) / 2;

  document.getElementById("resultado").innerHTML = "Média: " + media;
}
</script>

</body>
</html>
```

---

### 1.3 Exemplo: Área de um Retângulo

Este algoritmo calcula a **área** multiplicando base e altura.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Área</title>
</head>
<body>

<h2>Área do Retângulo</h2>

<label for="base">Base (cm):</label>
<input type="number" id="base" placeholder="Ex: 10"><br><br>

<label for="altura">Altura (cm):</label>
<input type="number" id="altura" placeholder="Ex: 5"><br><br>

<input type="button" onclick="calcularArea()" value="Calcular Área">

<p id="resultado"></p>

<script>
function calcularArea() {
  let base = parseFloat(document.getElementById("base").value);
  let altura = parseFloat(document.getElementById("altura").value);

  let area = base * altura;

  document.getElementById("resultado").innerHTML = "Área: " + area + " cm²";
}
</script>

</body>
</html>
```

---

## 2. Algoritmos com Condicionais

---

### 2.1 Conceito

Algoritmos com **condicionais** permitem **tomar decisões** com base em uma condição.

Utilizamos estruturas como:
- **if** (se)
- **else** (senão)
- **else if** (senão se)

Isso permite alterar o fluxo do programa dependendo dos dados fornecidos.

---

### 2.2 Exemplo: Verificar Maior Número

O algoritmo compara dois valores e informa qual é o maior ou se são iguais.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Maior Número</title>
</head>
<body>

<h2>Maior Número</h2>

<label for="num1">Número 1:</label>
<input type="number" id="num1"><br><br>

<label for="num2">Número 2:</label>
<input type="number" id="num2"><br><br>

<input type="button" onclick="verificar()" value="Verificar">

<p id="resultado"></p>

<script>
function verificar() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);

  if (n1 > n2) {
    document.getElementById("resultado").innerHTML = "O maior é: " + n1;
  } else if (n2 > n1) {
    document.getElementById("resultado").innerHTML = "O maior é: " + n2;
  } else {
    document.getElementById("resultado").innerHTML = "Os números são iguais.";
  }
}
</script>

</body>
</html>
```

---

### 2.3 Exemplo: Classificação de Idade

Este algoritmo classifica a pessoa em categorias baseadas em sua idade.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Classificação</title>
</head>
<body>

<h2>Classificação por Idade</h2>

<label for="idade">Informe sua idade:</label>
<input type="number" id="idade" placeholder="Ex: 25"><br><br>

<input type="button" onclick="classificar()" value="Classificar">

<p id="resultado"></p>

<script>
function classificar() {
  let idade = parseInt(document.getElementById("idade").value);

  if (idade < 12) {
    document.getElementById("resultado").innerHTML = "Classificação: Criança";
  } else if (idade < 18) {
    document.getElementById("resultado").innerHTML = "Classificação: Adolescente";
  } else if (idade < 60) {
    document.getElementById("resultado").innerHTML = "Classificação: Adulto";
  } else {
    document.getElementById("resultado").innerHTML = "Classificação: Idoso";
  }
}
</script>

</body>
</html>
```

---

## 3. Funções (Functions)

---

### 3.1 Conceito

Uma **função** é um bloco de código criado para realizar uma tarefa específica. Ela permite **reaproveitar código** sem precisar reescrevê-lo. Funções podem receber **parâmetros** (dados de entrada) e usar a palavra-chave `return` para devolver um resultado.

---

### 3.2 Exemplo: Calculadora de Dobro

Neste exemplo, isolamos a lógica matemática em uma função separada que recebe um parâmetro e retorna um valor.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Funções</title>
</head>
<body>

<h2>Calculadora de Dobro</h2>

<label for="numero">Digite um número:</label>
<input type="number" id="numero" placeholder="Ex: 4"><br><br>

<input type="button" onclick="exibirDobro()" value="Calcular Dobro">

<p id="resultado"></p>

<script>
// Função pura que apenas faz o cálculo
function calcularDobro(valor) {
  return valor * 2;
}

// Função responsável por interagir com a tela (HTML)
function exibirDobro() {
  let num = parseFloat(document.getElementById("numero").value);
  
  // Chamamos a função de cálculo passando o número como parâmetro
  let resultado = calcularDobro(num);

  document.getElementById("resultado").innerHTML = "O dobro é: " + resultado;
}
</script>

</body>
</html>
```

---

## 4. Algoritmos com Repetição

---

### 4.1 Conceito

Estruturas de **repetição** (ou laços/loops) são usadas para executar o mesmo bloco de código **várias vezes** até que uma condição seja atendida. As estruturas mais comuns são o **for** (para) e o **while** (enquanto).

---

### 4.2 Exemplo: Gerador de Tabuada

Este algoritmo usa um laço **for** para multiplicar o número digitado de 1 a 10.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Tabuada</title>
</head>
<body>

<h2>Gerador de Tabuada</h2>

<label for="numeroTabuada">Escolha um número:</label>
<input type="number" id="numeroTabuada" placeholder="Ex: 5"><br><br>

<input type="button" onclick="gerarTabuada()" value="Gerar Tabuada">

<p id="resultado"></p>

<script>
function gerarTabuada() {
  let num = parseInt(document.getElementById("numeroTabuada").value);
  let resultadoP = document.getElementById("resultado");
  
  // Limpa o resultado anterior
  resultadoP.innerHTML = "";
  
  // Laço de repetição de 1 a 10
  for (let i = 1; i <= 10; i++) {
    let linha = num + " x " + i + " = " + (num * i) + "<br>";
    resultadoP.innerHTML += linha;
  }
}
</script>

</body>
</html>
```

---

## 5. Algoritmos com Strings

---

### 5.1 Conceito

**Strings** são cadeias de caracteres (textos). Algoritmos com strings envolvem a **manipulação desse texto**, como contar o número de letras, converter para maiúsculas/minúsculas, ou buscar palavras específicas.

---

### 5.2 Exemplo: Manipulação de Texto

Este exemplo lê um texto, conta quantos caracteres ele tem e o transforma em letras maiúsculas.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Manipulação de Strings</title>
</head>
<body>

<h2>Analisador de Texto</h2>

<label for="textoEntrada">Digite uma palavra ou frase:</label>
<input type="text" id="textoEntrada" placeholder="Ex: JavaScript"><br><br>

<input type="button" onclick="analisarTexto()" value="Analisar">

<p id="tamanhoTexto"></p>
<p id="textoMaiusculo"></p>

<script>
function analisarTexto() {
  let texto = document.getElementById("textoEntrada").value;
  
  // .length retorna o tamanho da string
  let tamanho = texto.length;
  // .toUpperCase() converte tudo para maiúsculas
  let maiusculo = texto.toUpperCase();

  document.getElementById("tamanhoTexto").innerHTML = "Quantidade de caracteres: " + tamanho;
  document.getElementById("textoMaiusculo").innerHTML = "Em maiúsculas: " + maiusculo;
}
</script>

</body>
</html>
```

---

## 6. Agregados Homogêneos (Vetores e Matrizes)

---

### 6.1 Conceito

**Agregados Homogêneos** são estruturas de dados que armazenam múltiplos valores do **mesmo tipo**. 
- **Vetor (Array Unidimensional):** Uma lista simples de itens.
- **Matriz (Array Multidimensional):** Uma lista de listas (como uma tabela de linhas e colunas).

---

### 6.2 Exemplo: Lista de Nomes (Vetor)

Aqui criamos um array de strings e adicionamos nomes a ele iterativamente.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Vetores</title>
</head>
<body>

<h2>Lista de Convidados</h2>

<label for="nomeConvidado">Nome:</label>
<input type="text" id="nomeConvidado" placeholder="Ex: Maria"><br><br>

<input type="button" onclick="adicionarNome()" value="Adicionar">

<h3>Convidados Atuais:</h3>
<ul id="listaNomes"></ul>

<script>
// Variável global para armazenar os nomes
let convidados = [];

function adicionarNome() {
  let nome = document.getElementById("nomeConvidado").value;
  
  if (nome !== "") {
    // Adiciona o nome ao final do vetor
    convidados.push(nome);
    document.getElementById("nomeConvidado").value = ""; // Limpa o input
    atualizarLista();
  }
}

function atualizarLista() {
  let lista = document.getElementById("listaNomes");
  lista.innerHTML = ""; // Limpa a visualização
  
  // Percorre o vetor e cria um item de lista (li) para cada nome
  for (let i = 0; i < convidados.length; i++) {
    lista.innerHTML += "<li>" + convidados[i] + "</li>";
  }
}
</script>

</body>
</html>
```

---

## 7. Agregados Heterogêneos (Objetos)

---

### 7.1 Conceito

**Agregados Heterogêneos** (Objetos em JavaScript) permitem agrupar diferentes tipos de dados sob uma mesma estrutura, criando representações lógicas do mundo real (ex: um carro com atributos como cor, portas e ano). Em JavaScript, objetos são criados usando chaves `{}`.

---

### 7.2 Exemplo: Ficha de Usuário

Vamos criar e exibir um objeto contendo diferentes tipos de dados (String, Number, Boolean).

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Objetos</title>
</head>
<body>

<h2>Cadastro de Perfil (Objeto)</h2>

<label for="nomePerfil">Nome:</label>
<input type="text" id="nomePerfil"><br><br>

<label for="idadePerfil">Idade:</label>
<input type="number" id="idadePerfil"><br><br>

<label for="ativoPerfil">Usuário Ativo?</label>
<input type="checkbox" id="ativoPerfil"><br><br>

<input type="button" onclick="salvarPerfil()" value="Salvar Perfil">

<pre id="resultadoObjeto"></pre>

<script>
function salvarPerfil() {
  // Criando o objeto
  let usuario = {
    nome: document.getElementById("nomePerfil").value,
    idade: parseInt(document.getElementById("idadePerfil").value),
    ativo: document.getElementById("ativoPerfil").checked
  };

  // Exibindo o objeto formatado na tela
  document.getElementById("resultadoObjeto").innerHTML = JSON.stringify(usuario, null, 2);
}
</script>

</body>
</html>
```

---

## 8. CRUD em Memória RAM

---

### 8.1 Conceito

**CRUD** é um acrônimo para as quatro operações básicas de armazenamento de dados:
- **C**reate (Criar/Inserir)
- **R**ead (Ler/Listar)
- **U**pdate (Atualizar)
- **D**elete (Apagar)

Fazer isso em **memória RAM** significa que usaremos um **Vetor de Objetos** para gerenciar os dados enquanto a página estiver aberta (se atualizar a página, os dados são perdidos).

---

### 8.2 Exemplo: Gerenciador de Produtos

Este exemplo junta tudo: Vetores, Objetos, Laços de repetição e Lógica para criar um sistema completo e simples.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>CRUD em Memória</title>
  <style>
    table { width: 100%; border-collapse: collapse; margin-top: 20px;}
    th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
  </style>
</head>
<body>

<h2>Gerenciador de Produtos (CRUD)</h2>

<label for="nomeProduto">Produto:</label>
<input type="text" id="nomeProduto" placeholder="Nome do produto"><br><br>

<label for="precoProduto">Preço (R$):</label>
<input type="number" id="precoProduto" placeholder="Ex: 10.50"><br><br>

<input type="button" onclick="criarProduto()" value="Adicionar Produto">

<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Produto</th>
      <th>Preço</th>
      <th>Ações (Update / Delete)</th>
    </tr>
  </thead>
  <tbody id="tabelaProdutos">
    </tbody>
</table>

<script>
// Nossa "Tabela" de Banco de Dados na memória RAM
let bancoDeDados = [];
let idAtual = 1;

// CREATE (Criar)
function criarProduto() {
  let nome = document.getElementById("nomeProduto").value;
  let preco = parseFloat(document.getElementById("precoProduto").value);

  if (nome === "" || isNaN(preco) || preco <= 0) {
    alert("Preencha os dados corretamente!");
    return;
  }

  let novoProduto = {
    id: idAtual,
    nome: nome,
    preco: preco
  };

  bancoDeDados.push(novoProduto);
  idAtual++;
  
  document.getElementById("nomeProduto").value = "";
  document.getElementById("precoProduto").value = "";
  
  lerProdutos(); // Atualiza a tela
}

// READ (Ler)
function lerProdutos() {
  let tbody = document.getElementById("tabelaProdutos");
  tbody.innerHTML = "";

  for (let i = 0; i < bancoDeDados.length; i++) {
    let p = bancoDeDados[i];
    
    tbody.innerHTML += `
      <tr>
        <td>${p.id}</td>
        <td>${p.nome}</td>
        <td>R$ ${p.preco.toFixed(2)}</td>
        <td>
          <input type="button" onclick="atualizarProduto(${p.id})" value="Editar">
          <input type="button" onclick="deletarProduto(${p.id})" value="Excluir">
        </td>
      </tr>
    `;
  }
}

// UPDATE (Atualizar)
function atualizarProduto(idPesquisa) {
  let novoNome = prompt("Digite o novo nome do produto:");
  let novoPreco = prompt("Digite o novo preço:");

  if (novoNome && novoPreco) {
    let precoConvertido = parseFloat(novoPreco);
    
    if(!isNaN(precoConvertido)) {
      for (let i = 0; i < bancoDeDados.length; i++) {
        if (bancoDeDados[i].id === idPesquisa) {
          bancoDeDados[i].nome = novoNome;
          bancoDeDados[i].preco = precoConvertido;
          break; // Para o loop pois já achou o produto
        }
      }
      lerProdutos(); // Atualiza a tela
    } else {
      alert("Preço inválido!");
    }
  }
}

// DELETE (Apagar)
function deletarProduto(idPesquisa) {
  if (confirm("Tem certeza que deseja excluir?")) {
    for (let i = 0; i < bancoDeDados.length; i++) {
      if (bancoDeDados[i].id === idPesquisa) {
        bancoDeDados.splice(i, 1); // Remove 1 item a partir do índice 'i'
        break;
      }
    }
    lerProdutos(); // Atualiza a tela
  }
}
</script>

</body>
</html>
```

---

## Conclusão

Você aprendeu:

- Como funciona a linearidade em um **algoritmo sequencial**.
- Como implementar **condições com if/else**.
- Como estruturar códigos reutilizáveis utilizando **funções**.
- Como automatizar tarefas com **repetições (for)**.
- Como tratar textos usando manipulação de **strings**.
- A diferença entre organizar dados simples em **vetores/matrizes** e dados complexos em **objetos**.
- A criar uma aplicação lógica completa unindo tudo através de um sistema **CRUD**.
- Boas práticas em HTML utilizando **labels** interligadas com inputs para melhor usabilidade, e a simplificar layouts sem o uso excessivo de tags extras.

Esses são os **fundamentos absolutos da lógica de programação**. Dominando essas estruturas, você está pronto para construir interfaces complexas, consumir APIs e dominar frameworks modernos de JavaScript!

---