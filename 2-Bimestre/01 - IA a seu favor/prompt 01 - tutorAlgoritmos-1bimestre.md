# Roteiro de Estudos: Fundamentos de Algoritmos

Olá! Este roteiro foi preparado especialmente para ajudar você, estudante de Informática, a dominar os conceitos iniciais de **algoritmos** e **lógica de programação**. Aqui, usaremos o **HTML** para criar as telas (interface) e o **JavaScript** para processar as informações. O foco está na lógica, sem complicação!

---

## 1. O que é um Algoritmo?

Um **algoritmo** é simplesmente uma **sequência de passos lógicos e finitos** para resolver um problema ou executar uma tarefa. 

Para entender melhor, lembre-se da dinâmica do **Robô em Sala de Aula**:
* O "robô" só entendia dois comandos: **Girar** (90 graus para a direita) e **Avante** (um passo para frente).
* Para fazer o robô desviar dos obstáculos e chegar ao destino, foi preciso dar as ordens na sequência exata.
* A lista de comandos anotada no quadro foi o **algoritmo**.

**Outros exemplos do dia a dia:**
* Uma **receita de bolo** (se você inverter a ordem e assar antes de misturar, não vai dar certo).
* Uma **lista de compras** organizada pelo corredor do supermercado.

---

## 2. O Computador por Dentro (Arquitetura)

Para programar, precisamos entender onde a mágica acontece no hardware:

* **Processador (CPU):** É o "cérebro" do computador. Ele executa os cálculos e os comandos do seu algoritmo.
* **Memória RAM:** É a memória de trabalho, rápida, mas **temporária**. Quando o programa fecha ou o computador desliga, tudo o que estava nela se apaga. É aqui que ficam guardadas as nossas variáveis enquanto o código roda.
* **Armazenamento Permanente (HD/SSD):** É onde os arquivos, fotos e o seu próprio código ficam salvos de verdade. Não se apaga ao desligar.

### Unidades de Medida e Sinais
* **Bit e Byte:** O computador só entende **0 e 1** (energia desligada ou ligada). Cada 0 ou 1 é um **Bit**. Um grupo de 8 bits forma 1 **Byte** (que representa um caractere, como uma letra).
* **Escala:** $1 \text{ KB (Kilobyte)} \approx 1000 \text{ Bytes}$, $1 \text{ MB (Megabyte)} \approx 1000 \text{ KB}$, e assim por diante (Gigabyte, Terabyte).
* **Digital vs. Analógico:** O mundo **analógico** é contínuo (como o ponteiro de um relógio antigo correndo fluidamente). O mundo **digital** trabalha com valores exatos e discretos (os 0s e 1s do computador).

---

## 3. A Estrutura Base de um Programa

Todo algoritmo profissional segue rigorosamente estes três passos:

1. **ENTRADA DE DADOS:** O momento em que o programa recebe as informações necessárias (ex: o usuário digita algo na tela).
2. **PROCESSAMENTO:** O momento em que o computador faz os cálculos ou análises com os dados recebidos.
3. **SAÍDA:** O momento em que o resultado é exibido na tela para o usuário.

---

## 4. Algoritmos Sequenciais

São aqueles em que as instruções são executadas estritamente **uma após a outra**, de cima para baixo.

### Tipos de Variáveis Utilizados
Para guardar dados na memória (RAM), definimos caixinhas chamadas variáveis. Vamos restringir nossos estudos a três tipos:
* **INT:** Números inteiros (ex: `10`, `-5`, `0`).
* **FLOAT:** Números com casas decimais (ex: `1.75`, `59.5`). *Dica: em programação, usamos ponto no lugar da vírgula!*
* **STRING:** Textos (ex: `"Olá Mundo"`, `"João"`). Ficam sempre entre aspas.

### Concatenação
É o ato de **juntar** textos ou variáveis. Em JavaScript, usamos o símbolo de mais (`+`) para grudar uma informação na outra.
* Exemplo: `"O resultado é: " + soma`

### Código Modelo (Soma de Dois Números)
Utilize o código abaixo como base e modelo para criar os seus próximos exercícios. Ele cria a interface em HTML e processa os dados com JavaScript:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Somador</title>
</head>
<body>

    <h1>Programa para Somar Dois Números</h1>
    
    <label for="inputA">Digite um valor para A:</label>
    <input type="number" name="inputA" id="inputA">
    <br><br>
    
    <label for="inputB">Digite um valor para B:</label>
    <input type="number" name="inputB" id="inputB">
    <br><br>
    
    <input type="button" name="calcular" id="calcular" value="Somar" onclick="funcaoCalcular()">
    <br><br>
    
    <span id="outputResposta">A resposta aparecerá aqui.</span>

    <script>
        function funcaoCalcular() {
            // ENTRADA: Captura os valores da tela e converte para número decimal (FLOAT)
            let valorA = parseFloat(document.getElementById("inputA").value);
            let valorB = parseFloat(document.getElementById("inputB").value);

            // PROCESSAMENTO: Realiza o cálculo matemático
            let soma = valorA + valorB;

            // SAÍDA: Insere o resultado de volta na tela HTML
            document.getElementById("outputResposta").innerHTML = "O resultado da soma é: " + soma;
        }
    </script>
</body>
</html>
```

### Próximos Desafios Sequenciais:
Tente adaptar o código acima para resolver os problemas abaixo:
* Calcular a **hipotenusa** de um triângulo retângulo (Dica: use `Math.sqrt()` para a raiz quadrada).
* Calcular o **IMC** (Índice de Massa Corporal): $IMC = \frac{peso}{altura^2}$.

> 📂 **Aviso:** Se você tiver listas de exercícios em PDF ou imagem, **anexe-as aqui no chat** para que eu possa selecionar as questões e guiar você no passo a passo!

---

## 5. Algoritmos Condicionais

Nem tudo na vida acontece em linha reta. Às vezes, o algoritmo precisa **tomar decisões** baseadas em uma condição (verdadeira ou falsa). Para isso, usamos a estrutura `if` (se) e `else` (senão).

### Estrutura Simples ou Composta (`if / else`)
```javascript
if (condicao) {
    // Código executado se a condição for VERDADEIRA
} else {
    // Código executado se a condição for FALSA
}
```

### Estrutura Encadeada (`if / else if / else`)
Usada quando temos três ou mais caminhos possíveis:
```javascript
if (nota >= 7) {
    // Aprovado
} else if (nota >= 5) {
    // Recuperação
} else {
    // Reprovado
}
```
*Nota: Também existe o comando `switch case`, que serve para testar valores fixos específicos, mas focaremos no `if/else` por ser mais utilizado nesta etapa.*

---

## 6. Ferramentas de Trabalho e Testes

Para programar e testar na prática, configuramos o ambiente com:
1. **VSCode (Visual Studio Code):** Nosso editor de código.
2. **Extensão Live Server:** Cria um servidor temporário para ver as alterações da sua página HTML em tempo real no navegador toda vez que salvar o arquivo.

### Teste de Mesa
Antes de ir para o computador, ou quando o código apresentar algum erro estranho, faça o **Teste de Mesa** no papel:
1. Desenhe uma tabela onde cada coluna é uma variável do seu programa.
2. Escreva uma coluna para a "Saída" (tela).
3. Vá lendo o código linha por linha, anotando e mudando os valores na tabela com o lápis, simulando exatamente o que o processador faria.

---

## 7. Como Continuar Estudando Comigo?

Para fixarmos o conteúdo e você se preparar para as avaliações práticas e teóricas, faça o seguinte:

1. Digite a solução de um dos desafios acima (como o do IMC ou da Hipotenusa).
2. Cole o código aqui no chat e me peça: **"Corrija o meu código"**.
3. Se quiser mais problemas, me peça: **"Proponha um novo desafio com variáveis do tipo FLOAT ou INT"**.

Todo o material oficial de apoio das aulas está disponível no repositório do professor:
🔗 [GitHub - algoritmos-2026](https://github.com/rjhalmeman/algoritmos-2026)

Vamos começar? Escolha um exercício e mãos à obra!