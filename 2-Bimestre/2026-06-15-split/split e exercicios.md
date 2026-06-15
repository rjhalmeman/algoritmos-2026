# ✂️ Cortando Textos com o `.split()` no JavaScript

Se você está começando agora no mundo dos algoritmos, já deve ter percebido que manipular textos (**strings**) é algo que fazemos o tempo todo. Mas e se você recebesse um textão e precisasse separar cada pedaço dele? É aí que entra o método **`.split()`** do JavaScript!

Vamos entender como ele funciona de um jeito bem simples e visual.

---

## 🍫 A Analogia: A Barra de Chocolate

Imagine que você tem uma **string** que é uma barra de chocolate comprida. Você quer dividir esse chocolate com seus amigos, mas não quer dar a barra inteira para uma pessoa só. Você quer pedaços individuais.

O **`.split()`** é a marcação do chocolate. 

Para dividir, você precisa dar um comando simples e dizer **onde** ela deve cortar. Esse "onde" é o que chamamos de **separador**.

Assim que faz os cortes, organiza todos os pedaços soltos e os guarda dentro de uma caixa indexada. Na programação, essa caixa é um vetor **Array** (uma lista de elementos).

---

## 🛠️ Na Prática: Como o `.split()` funciona?

A estrutura básica (sintaxe) dele é a seguinte:

```javascript
let resultado = textoOriginal.split(separador);
```

Vamos ver três exemplos clássicos que você vai usar muito na sua jornada!

### 1. Separando uma frase por espaços (Descobrindo as palavras)
Imagine que temos a frase: `"Programação é o futuro"`. Se quisermos isolar cada palavra, o nosso ponto de corte (o separador) será o **espaço em branco** (`" "`).

```javascript
let frase = "Programação é o futuro";

// Dizemos para o split cortar sempre que encontrar um espaço
let palavras = frase.split(" ");

console.log(palavras);
// 📦 O resultado na caixa (Array) será:
// ["Programação", "é", "o", "futuro"]

| Índice | Palavra |
| --- | --- |
| **0** | `"Programação"` |
| **1** | `"é"` |
| **2** | `"o"` |
| **3** | `"futuro"` |

```

### 2. Separando uma lista por vírgulas (A lista de compras)
E se você receber dados de um formulário onde itens estão separados por vírgulas? Moleza para o `.split()`.

```javascript
let listaDeJogos = "Minecraft,Valorant,Fortnite,Zelda";

// O corte acontece exatamente na vírgula
let meusJogos = listaDeJogos.split(",");

console.log(meusJogos);
// 📦 O resultado será:
// ["Minecraft", "Valorant", "Fortnite", "Zelda"]
```

### 3. O "Corte Radical": Separando letra por letra
Se você passar um separador totalmente vazio — aspas coladas uma na outra (`""`) —, o JavaScript vai entender que você quer cortar **absolutamente tudo**, caractere por caractere.

Isso útil quando precisamos transformar uma string em vetor de caracteres.

```javascript
let nickname = "Gamer";

let letras = nickname.split("");

console.log(letras);
// 📦 O resultado será:
// ["G", "a", "m", "e", "r"]
```

---

## 💡 Resumo para Não Esquecer!

* O **`.split()`** pega uma **string** (texto) e a transforma em um **array** (vetor).
* Ele precisa de um **separador** para saber onde cortar.
* O separador que você escolheu **some** do resultado final (ele é apenas a "marca do corte").
* Se o separador não for encontrado no texto, ele simplesmente coloca o texto inteiro dentro da caixa.

---

## 🏆 Desafio Rápido!
Olhe para este código abaixo. O que você acha que vai aparecer no `console.log`?

```javascript
let data = "15/junho/2026";
let pedaços = data.split("/");
console.log(pedaços);
```

*Dica: Quem é a tesoura aqui? Isso mesmo, a barra `/`! Então a caixa final terá três pedaços guardados.* 😉

Agora é sua vez: abra o console do seu navegador ou o VS Code e teste você mesmo criando seus próprios pontos de corte! Boa codificação! 💻🔥


Faça uma função que conte quantas palavras tem um texto.




Retirados das listas

AL8b - 1) Faça um programa, usando HTML e JS que lê um nome completo e imprime esse nome em formato inglês. Por exemplo, Ayrton Senna da Silva torna-se: Silva, Ayrton Senna da. Deve-se criar uma função chamada nomeEmIngles. Usar split.

AL08a - 08) Faça um programa que leia uma palavra e gere uma nova palavra com todas as letras que são vogais em maiúsculo. Por exemplo, a frase: a casa caiu => A cAsA cAIU. 

AL10 - 06) Desenvolva um algoritmo que leia uma palavra e retire todos os caracteres repetidos da palavra.

