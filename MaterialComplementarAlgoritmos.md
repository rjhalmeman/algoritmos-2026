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
  - [Conclusão](#conclusão)

---

## Introdução

Neste tutorial, vamos aprender a implementar **algoritmos básicos** utilizando **HTML e JavaScript**, focando em dois tipos fundamentais:

- **Algoritmos sequenciais**
- **Algoritmos com condicionais**

A ideia é entender como a lógica funciona na prática, usando entradas simples e exibindo resultados diretamente na página.

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

Neste exemplo, o algoritmo recebe duas notas e calcula a **média aritmética**.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Média</title>
</head>
<body>

<h2>Cálculo de Média</h2>

<input type="number" id="nota1" placeholder="Nota 1">
<input type="number" id="nota2" placeholder="Nota 2">
<button onclick="calcularMedia()">Calcular</button>

<p id="resultado"></p>

<script>
function calcularMedia() {
  let n1 = Number(document.getElementById("nota1").value);
  let n2 = Number(document.getElementById("nota2").value);

  let media = (n1 + n2) / 2;

  document.getElementById("resultado").innerText = "Média: " + media;
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
<html>
<head>
  <meta charset="UTF-8">
  <title>Área</title>
</head>
<body>

<h2>Área do Retângulo</h2>

<input type="number" id="base" placeholder="Base">
<input type="number" id="altura" placeholder="Altura">
<button onclick="calcularArea()">Calcular</button>

<p id="resultado"></p>

<script>
function calcularArea() {
  let base = Number(document.getElementById("base").value);
  let altura = Number(document.getElementById("altura").value);

  let area = base * altura;

  document.getElementById("resultado").innerText = "Área: " + area;
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
- **if**
- **else**
- **else if**

Isso permite alterar o fluxo do programa.

---

### 2.2 Exemplo: Verificar Maior Número

O algoritmo compara dois valores e informa qual é o maior.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Maior Número</title>
</head>
<body>

<h2>Maior Número</h2>

<input type="number" id="num1" placeholder="Número 1">
<input type="number" id="num2" placeholder="Número 2">
<button onclick="verificar()">Verificar</button>

<p id="resultado"></p>

<script>
function verificar() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);

  if (n1 > n2) {
    document.getElementById("resultado").innerText = "Maior: " + n1;
  } else if (n2 > n1) {
    document.getElementById("resultado").innerText = "Maior: " + n2;
  } else {
    document.getElementById("resultado").innerText = "São iguais";
  }
}
</script>

</body>
</html>
```

---

### 2.3 Exemplo: Classificação de Idade

Este algoritmo classifica a pessoa em categorias.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Classificação</title>
</head>
<body>

<h2>Classificação por Idade</h2>

<input type="number" id="idade" placeholder="Idade">
<button onclick="classificar()">Classificar</button>

<p id="resultado"></p>

<script>
function classificar() {
  let idade = Number(document.getElementById("idade").value);

  if (idade < 12) {
    document.getElementById("resultado").innerText = "Criança";
  } else if (idade < 18) {
    document.getElementById("resultado").innerText = "Adolescente";
  } else if (idade < 60) {
    document.getElementById("resultado").innerText = "Adulto";
  } else {
    document.getElementById("resultado").innerText = "Idoso";
  }
}
</script>

</body>
</html>
```

---

## Conclusão

Você aprendeu:

- Como funciona um **algoritmo sequencial**
- Como implementar **condições com if/else**
- Como integrar **HTML + JavaScript** para criar interatividade

Esses são os **fundamentos da lógica de programação** e servem como base para sistemas mais complexos.

--- 