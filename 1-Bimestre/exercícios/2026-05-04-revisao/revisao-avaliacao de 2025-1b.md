# Exercícios de Lógica de Programação - HTML e JavaScript

### Questão 1: Categorização de Atletas

| Linha | Conteúdo do Código |
| :--- | :--- |
| 1 | `<!DOCTYPE html>` |
| 2 | `<html lang="pt-br">` |
| 3 | `<head>` |
| 4 | `    <meta charset="UTF-8">` |
| 5 | `    <meta name="viewport" content="width=device-width, initial-scale=1.0">` |
| 6 | `    <title>Mágico</title>` |
| 7 | `</head>` |
| 8 | `<body>` |
| 9 | `    <label for="inputA">A</label>` |
| 10 | `    <input type="number" name="inputA" id="inputA"><br>` |
| 11 | `    <label for="inputB">B</label>` |
| 12 | `    <input type="number" name="inputB" id="inputB"><br>` |
| 13 | `    <label for="inputC">C</label>` |
| 14 | `    <input type="number" name="inputC" id="inputC"><br>` |
| 15 | `    <input type="button" value="Faça" onclick="magica()"><br>` |
| 16 | `    <label for="resposta">Resposta</label>` |
| 17 | `    <span id="resposta"></span>` |
| 18 | `    <script>` |
| 19 | `        function magica() {` |
| 20 | `            let a = parseInt(document.getElementById("inputA").value);` |
| 21 | `            let b = parseInt(document.getElementById("inputB").value);` |
| 22 | `            let c = parseInt(document.getElementById("inputC").value);` |
| 23 | `            if (a > b) {` |
| 24 | `                aux = a;` |
| 25 | `                a = b;` |
| 26 | `                b = aux;` |
| 27 | `            }` |
| 28 | `            if (b > c) {` |
| 29 | `                aux = b;` |
| 30 | `                b = c;` |
| 31 | `                c = aux;` |
| 32 | `            }` |
| 33 | `            if (a > b) {` |
| 34 | `                aux = a;` |
| 35 | `                a = b;` |
| 36 | `                b = aux;` |
| 37 | `            }` |
| 38 | `            document.getElementById("resposta").textContent = a + "," + b + "," + c;` |
| 39 | `        }` |
| 40 | `    </script>` |
| 41 | `</body>` |
| 42 | `</html>` |

---

### Considerando o código acima

1.a) Desenhe a interface que o usuário vê (tela). Indique na tela o que é entrada, processamento e saída.
1.b) Explique as linhas 15,20,38
1.c) Faça o teste de mesa para os valores a=5, b=2 e c=1.
1.d) Faça o teste de mesa para os valores a=4, b=1 e c=2. 
1.e) O que esse programa faz? (pelas respostas dos testes de mesa você vai responder isso)


### Questão 2: Categorização de Atletas

O **K2 Volei Club de Campo Mourão** precisa de um programa para colocar cada atleta na categoria correta. Deve ser considerado o **ano de nascimento** conforme o quadro abaixo. Faça um programa com **HTML e JS** que solicite o ano de nascimento, calcule e mostre a categoria do atleta. **Faça uma função extra para categorizar o atleta.**

| Categoria | Faixa Etária (Idade) |
| :--- | :--- |
| Sub-12 | Até 12 anos |
| Sub-16 | 13 a 16 anos |
| Sub-18 | 17 a 18 anos |
| Adulto | 19 anos ou mais |

---

### Questão 3: Sistema de Estações de Viagem Internacional

Considere que uma **companhia aérea** que opera voos internacionais quer oferecer um serviço mais completo a seus passageiros. Os países de origem e destino são **Brasil, EUA, Canadá e Argentina**.

Quando um passageiro quer viajar do **hemisfério norte para o sul** e vice-versa, ele precisa estar ciente das diferentes **estações do ano** conforme a época da viagem. Faça um programa usando **HTML e JS** em que seja possível o usuário informar o **país de origem**, o **país de destino** e o **mês da viagem**.

O programa deverá calcular e exibir uma mensagem da seguinte forma. Por exemplo: sair do Brasil no mês 12 com destino ao Canadá.
> **Exemplo de Saída:** Você está no(a) BRASIL que está no hemisfério SUL, cuja estação é VERÃO e o destino é o(a) CANADÁ que está no hemisfério NORTE e lá a estação é INVERNO.

#### Tabela de Referência de Estações:

| SUL | MESES | NORTE |
| :--- | :--- | :--- |
| Verão | Janeiro, Fevereiro, Março | Inverno |
| Outono | Abril, Maio, Junho | Primavera |
| Inverno | Julho, Agosto, Setembro | Verão |
| Primavera | Outubro, Novembro, Dezembro | Outono |
