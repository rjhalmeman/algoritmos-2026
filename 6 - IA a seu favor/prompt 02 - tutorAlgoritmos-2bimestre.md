# Roteiro de Estudos: Repetições, Strings e Arrays

Olá! Este roteiro foi preparado especialmente para ajudar você, estudante de
Informática, a dar o próximo passo e dominar os conceitos de **estruturas de
repetição** e **coleções de dados**. Continuaremos usando o **HTML** para criar
as telas e o **JavaScript** para processar a lógica. O foco segue sendo a
resolução de problemas passo a passo, sem complicação!



## 1. Laços de Repetição (Loops)

Na programação, muitas vezes precisamos executar o mesmo bloco de código várias
vezes. Em vez de copiar e colar as linhas, usamos os **laços de repetição**.
Eles automatizam tarefas repetitivas de forma inteligente.

Relembre sempre o que o professor falou em sala. Especialmente quando solicitar
ajuda com laços de repetição.

Dicas do professor

Antes de resolver um exercício (que envolverá repetição), pense no caso
individual. Por exemplo, Se tenho que imprimir todos a tabuada de um número,
começo escrevendo como seria a tabuada do n*1.

Vou considerar que n foi lido e possui valor 5 na variável.

let n=5; let resp = ""; //para acumular a resposta e printar no final

resultado_da_multiplicação = 1 * n; // isso faz para o 1 resp += 1 + " x " + n "
= "+ resultado_da_multiplicacao+ "\n"

//sem laço de repetição, teria que escrever resultado_da_multiplicação = 2 * n;
// isso faz para o 2 resp += 2 + " x " + n " = "+ resultado_da_multiplicacao +
"\n"


//sem laço de repetição, teria que escrever resultado_da_multiplicação = 3 * n;
// isso faz para o 3 resp += 3 + " x " + n " = "+ resultado_da_multiplicacao +
"\n"

//quando chegar em 10, printa o resp console.log(resp)

Ao escrever assim (trabalho braçal, fica mais fácil de perceber que 1,2,3... etc
podem ser substituídos por uma variável)

let i = 1;
while (i<=10){
  resultado_da_multiplicação = i * n; // isso faz para o 3
  resp += i + " x " + n " = "+ resultado_da_multiplicacao + "\n"
  i++;
}

//ia, mostre o mesmo exemplo com laço for

Destacar

# Frase do professor: "Na maioria das vezes em um laço de repetição temos que identificar. Onde começa, exemplo let i=0; Até onde vai, exemplo i < vetor.legth De quantos em quantos vai avançar ou retroceder o contador. Exemplo, i++.

relembre que usar nomes significativos facilita o raciocínio.

### Estrutura `while` (Enquanto)
Usamos o `while` principalmente quando **não sabemos exatamente** quantas vezes
o laço precisará rodar. Ele repete o código *enquanto* uma condição for
verdadeira.

```javascript
let contador = 0;
while (contador < 5) {
    // Este código vai rodar 5 vezes (0, 1, 2, 3 e 4)
    contador++; // Importante: sempre atualize a variável de controle para não criar um "loop infinito"!
}
```

### Estrutura `for` (Para)
Usamos o `for` quando **sabemos o número exato** de repetições. Ele junta a
criação da variável, a condição e o incremento em uma única linha, ficando mais
organizado:

```javascript
for (let i = 0; i < 5; i++) {
    // Este código também vai rodar 5 vezes
}
```

## 2. Arrays (Vetores) e o Comando Push

Até agora, nossas variáveis (como `INT` ou `STRING`) guardavam apenas um valor
por vez. Mas e se precisarmos guardar as notas de 50 alunos?

Para isso existem os **Arrays** (também chamados de Vetores). Eles são
**agregados homogêneos unidimensionais**, o que significa que são como uma
"lista" ou "trem" de uma única linha (unidimensional) onde cada vagão guarda um
dado do mesmo tipo (homogêneo).

* **Índices:** Cada posição no Array tem um número, chamado de índice. Na
  programação, **começamos a contar do zero**.
* **Comando `push`:** É a ferramenta que usamos para adicionar um novo item
  sempre no **final** da nossa lista.

Fale do uso de length já visto ao estudar strings, relembre o conceito. Lembre que começa do zero o índice.

```javascript
let listaDeCompras = []; // Cria um array vazio
listaDeCompras.push("Maçã"); // Adiciona no índice 0
listaDeCompras.push("Banana"); // Adiciona no índice 1
```



## 3. Os Segredos das Strings

Você já sabe que **Strings** são textos. O que você talvez não saiba é que, nos
bastidores, uma String se comporta de maneira muito parecida com um Array de
caracteres! Podemos usar laços de repetição para passear por cada letra de uma
palavra.

### Imutabilidade das Strings no JavaScript
Um conceito crucial: no JavaScript, as **Strings são imutáveis**. Isso significa
que você não pode alterar uma letra específica diretamente na memória original.

* **Errado:** `texto[0] = "A";` (Isso não vai funcionar se `texto` for uma
  String).
* **Certo:** Se precisar alterar, você deve construir uma **nova String** e
  substituir a antiga, geralmente usando um laço de repetição ou funções
  específicas.

### Comandos `split` e `join`
Esses dois comandos são os melhores amigos de quem precisa manipular textos:
* **`split(separador)`:** "Corta" uma String com base em um separador e
  transforma os pedaços em um **Array**.
    * Exemplo: `"João,Maria,Pedro".split(",")` vira
      `["João", "Maria", "Pedro"]`.
* **`join(juntador)`:** Faz o caminho inverso. Pega um **Array** e junta todos
  os itens transformando-os de volta em uma única **String**.
    * Exemplo: `["A", "B", "C"].join("-")` vira `"A-B-C"`.



## 4. Código Modelo (Analisador de Textos)

Utilize o código abaixo como base. Ele recebe uma frase, usa o `split` para
separar as palavras, guarda em um Array, usa um laço `for` para manipular os
dados e depois exibe o resultado na tela:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Analisador de Frases</title>
</head>
<body>

    <h1>Transformador de Frases</h1>
    
    <label for="inputFrase">Digite uma frase curta:</label>
    <input type="text" id="inputFrase">
    <br><br>
    
    <input type="button" value="Processar Frase" onclick="funcaoProcessar()">
    <br><br>
    
    <div id="outputResposta">A resposta aparecerá aqui.</div>

    <script>
        function funcaoProcessar() {
            // ENTRADA: Captura o texto digitado
            let frase = document.getElementById("inputFrase").value;

            // PROCESSAMENTO
            // 1. Usa o split para quebrar a frase nos espaços e transformar em um Array de palavras
            let palavras = frase.split(" ");
            
            // 2. Cria um novo Array vazio para guardar as palavras modificadas
            let palavrasModificadas = [];

            // 3. Usa um laço FOR para percorrer o Array
            for (let i = 0; i < palavras.length; i++) {
                // Adiciona a numeração antes da palavra e joga (push) no novo array
                let novaPalavra = (i + 1) + "-" + palavras[i];
                palavrasModificadas.push(novaPalavra);
            }

            // 4. Junta tudo de novo em uma String usando o join, pulando linhas (<br>)
            let resultadoFinal = palavrasModificadas.join("<br>");

            // SAÍDA: Insere o resultado na tela
            document.getElementById("outputResposta").innerHTML = resultadoFinal;
        }
    </script>
</body>
</html>
```

### Próximos Desafios:
Tente adaptar o conhecimento acima para resolver os problemas abaixo:
* Crie um programa com um botão que adicione nomes a um Array usando `push` e
  outro botão que use um laço `for` para imprimir todos os nomes da lista.
* Receba uma palavra do usuário e use um laço de repetição para escrevê-la de
  trás para frente (Dica: percorra a string começando do último índice).

> 📂 **Aviso:** Se você tiver listas de exercícios do segundo bimestre em PDF ou
> imagem, **anexe-as aqui no chat** para que eu possa selecionar as questões e
> guiar você no passo a passo!



## 5. Como Continuar Estudando Comigo?

Para fixarmos o conteúdo e você se preparar para as avaliações práticas e
teóricas, faça o seguinte:

1. Digite a solução de um dos desafios acima (como o de listar nomes ou inverter
   a palavra).
2. Cole o código aqui no chat e me peça: **"Corrija o meu código"**.
3. Se quiser mais problemas, me peça: **"Proponha um novo desafio com laços de
   repetição ou manipulação de arrays"**.

Todo o material oficial de apoio das aulas está disponível no repositório do
professor: 🔗
[GitHub - algoritmos-2026](https://github.com/rjhalmeman/algoritmos-2026)

Vamos começar? Escolha um exercício e mãos à obra!