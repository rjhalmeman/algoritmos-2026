# **Vetores em JavaScript**

## **Introdução**

Até agora, trabalhamos com variáveis simples, ou seja, cada variável armazenava apenas um valor de um tipo.

Exemplo:

```javascript
let nota1 = 7;
let nota2 = 8;
let nota3 = 5;
let nome = "Maria"; //na variável nome, guardamos a string Maria.
```

Esse modelo funciona bem para poucos dados.
Mas imagine a seguinte situação.

---

# **Situação Problema**

Precisamos criar um programa para:

* Ler as notas de 30 alunos  
* Armazenar todas as notas  
* Calcular a média da turma

Pelo que vimos até agora, seria necessário:

* Criar uma interface gráfica com 30 campos  
* Declarar 30 variáveis diferentes

Exemplo:

```javascript
let nota1;
let nota2;
let nota3;
let nota4;
let nota5;
...
let nota30;
```

Isso não é nada prático.

Além de cansativo:

* o código fica grande  
* difícil de manter  
* difícil de organizar  
* sujeito a erros

---

# **A Solução: Vetores**

Para resolver esse tipo de problema, utilizamos uma estrutura chamada:

# **Vetor**

Um vetor é:

Um agregado homogêneo unidimensional.

Vamos entender isso de forma simples.

| Palavra | Significado |
| ----- | ----- |
| Agregado | Agrupa vários valores |
| Homogêneo | Todos os valores são do mesmo tipo |
| Unidimensional | Organizado em apenas uma dimensão (uma linha) |

---

# **Ideia Principal do Vetor**

Dentro de uma única variável, conseguimos armazenar vários valores.

Exemplo:

```javascript
let notas = [7, 8, 5, 10, 6];
```

Agora temos:

* apenas UMA variável  
* armazenando VÁRIOS valores

---

# **Comparando**

## **Sem Vetor**

```javascript
let nota1 = 7;
let nota2 = 8;
let nota3 = 5;
let nota4 = 10;
let nota5 = 6;
```

## **Com Vetor**

```javascript
let notas = [7, 8, 5, 10, 6];
```

Muito mais organizado.

---

# **Vetores e Índices**

Cada posição do vetor possui um número chamado:

# **Índice**

O índice indica a posição do elemento.

IMPORTANTE:

Em JavaScript, os índices começam no ZERO.

---

# **Exemplo Visual**

## **Vetor com cinco números inteiros**

```javascript
let numeros = [10, 20, 30, 40, 50];
```

## **Representação Visual**

| 10 | 20 | 30 | 40 | 50 |
| ----- | ----- | ----- | ----- | ----- |
| 0 | 1 | 2 | 3 | 4 |

---

# **Entendendo o Índice**

| Índice | Valor |
| ----- | ----- |
| 0 | 10 |
| 1 | 20 |
| 2 | 30 |
| 3 | 40 |
| 4 | 50 |

---

# **Acessando Valores do Vetor**

Para acessar um valor específico:

```javascript
nomeDoVetor[indice]
```

Exemplo:

```javascript
let numeros = [10, 20, 30, 40, 50];

console.log(numeros[0]);
```

Saída:

```
10
```

---

# **Outro Exemplo**

```javascript
console.log(numeros[3]);
```

Saída:

```
40
```

---

# **Alterando Valores**

Também podemos modificar valores do vetor.

Exemplo:

```javascript
let numeros = [10, 20, 30, 40, 50];

numeros[2] = 999;

console.log(numeros);
```

Saída:

```
[10, 20, 999, 40, 50]
```

---

# **Vetores e Repetição**

O verdadeiro poder dos vetores aparece junto com **estruturas de repetição**.

Exemplo:

```javascript
let numeros = [10, 20, 30, 40, 50];

for (let i = 0; i < 5; i++) {
    console.log(numeros[i]);
}
```

Saída:

```
10
20
30
40
50
```

---

# **O Que Está Acontecendo?**

| Variável | Função |
| ----- | ----- |
| i | Representa o índice |
| numeros\[i\] | Acessa cada posição do vetor |

---

# **Exemplo: Soma dos Valores**

```javascript
let numeros = [10, 20, 30, 40, 50];
let soma = 0;
for (let i = 0; i < 5; i++) {
    soma = soma + numeros[i];
}
console.log(soma);
```

Saída:

```
150
```

---

# **Exemplo: Média das Notas**

```javascript
let notas = [7, 8, 5, 10, 6];
let soma = 0;
for (let i = 0; i < 5; i++) {
    soma = soma + notas[i];
}
let media = soma / 5;
console.log(media);
```

Saída:

```
7.2
```

---

# **Vetores e Strings**

Já trabalhamos anteriormente com algo parecido:

# **Strings**

Uma string é um tipo especial de vetor de caracteres.

Exemplo:

```javascript
let nome = "Maria";
```

Visualmente:

| M | a | r | i | a |
| :---: | :---: | :---: | :---: | :---: |
|  0 |  1 |  2 |  3 |  4 |

---

# **Acessando Caracteres da String**

```javascript
let nome = "Maria";

console.log(nome[0]);
```

Saída:

```
M
```

---

# **Resumo**

# **Vetor**

* Armazena vários valores  
* Usa apenas uma variável  
* Possui índices  
* Índices começam em zero  
* Facilita programas grandes  
* Funciona muito bem com repetição

---

# **Estrutura Básica**

## **Criando vetor**

```javascript
let numeros = [10, 20, 30];
```

## **Acessando valor**

```javascript
numeros[0]
```

## **Alterando valor**

```javascript
numeros[1] = 999;
```

## **Percorrendo vetor**

```javascript
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
```

---

# **Conclusão**

Vetores são fundamentais na programação.

Eles permitem:

* organizar dados  
* reduzir quantidade de variáveis  
* simplificar programas  
* trabalhar com grandes quantidades de informação

Quase todos os sistemas reais utilizam vetores ou estruturas derivadas deles.

