# 📝 Atividade de Recuperação e Reforço de Conteúdo — Algoritmos e JavaScript

Esta atividade foi elaborada para reforçar e consolidar os conteúdos da avaliação do 2º e 3º bimestres, cobrindo **matrizes**, **teste de mesa**, **arrays de objetos**, **lógica condicional** e **manipulação do DOM**.

---

## 🎯 PARTE 1: Matrizes e Lógica de Repetição (Teste de Mesa)

### 📌 Resumo Teórico
* **Matriz**: Estrutura de dados bidimensional composta por **linhas** ($i$) e **colunas** ($j$), organizada como uma tabela.
* **Acesso aos Elementos**: Para acessar ou alterar um valor específico, usamos a notação `matriz[i][j]`, onde $i$ representa a **linha** e $j$ representa a **coluna**.
* **Teste de Mesa**: Técnica de acompanhamento passo a passo da execução do algoritmo no papel, rastreando os valores das **variáveis** a cada iteração dos laços de repetição.

---

### 🟢 Exercício 1: Teste de Mesa Guiado
Analise o algoritmo em JavaScript abaixo, que cria e preenche uma matriz de dimensão $2 \times 3$:

```javascript
function criarMatrizExemplo(linhas, colunas) {
    let matriz = [];
    
    // Passo 1: Inicializa a matriz com zeros
    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = 0;
        }
    }

    // Passo 2: Preenche a matriz com valores calculados
    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
            if (i === 0) {
                matriz[i][j] = (j + 1) * 2; // Regra para a Linha 0
            } else {
                matriz[i][j] = (j + 1) * 5; // Regra para a Linha 1
            }
        }
    }
    return matriz;
}

let resultado = criarMatrizExemplo(2, 3);
console.log(resultado);
```

#### 📋 Tarefas do Aluno:

## considere o passo 2: Preenche a matriz com valores calculados

1. **Rastreamento de Variáveis**: Preencha o valor atribuído a cada posição no teste de mesa:
   * Quando $i = 0$ e $j = 0$, `matriz[0][0]` recebe: **____**
   * Quando $i = 0$ e $j = 1$, `matriz[0][1]` recebe: **____**
   * Quando $i = 0$ e $j = 2$, `matriz[0][2]` recebe: **____**
   * Quando $i = 1$ e $j = 0$, `matriz[1][0]` recebe: **____**
   * Quando $i = 1$ e $j = 1$, `matriz[1][1]` recebe: **____**
   * Quando $i = 1$ e $j = 2$, `matriz[1][2]` recebe: **____**

2. **Representação Visual**: Desenhe a matriz resultante no **formato de matriz matemática**:
   $$
   \begin{bmatrix}
   a_{00} & a_{01} & a_{02} \\
   a_{10} & a_{11} & a_{12}
   \end{bmatrix}
   $$

3. **Estrutura de Dados em Console**: Escreva exatamente o texto no formato de **array de arrays** que o comando `console.log(resultado)` exibirá na tela.

---

## 🎯 PARTE 2: Pesquisa e Comparação em Arrays de Objetos

### 📌 Resumo Teórico
* **Array de Objetos**: Lista cujos elementos são **objetos com propriedades** (ex: `produto.preco`, `produto.nome`).
* **Busca de Extremos (Maior/Menor)**:
  1. Inicializamos uma variável de controle apontando provisoriamente para o **primeiro elemento da lista** (`lista[0]`).
  2. Percorremos o **array** a partir do índice `1`.
  3. A cada passo, **comparamos** o valor do elemento atual com o extremo armazenado. Se encontrar um valor mais adequado, atualizamos a variável de controle.

---

### 🟢 Exercício 2: Identificar Produto Mais Caro, Mais Barato e Diferença
Com base na lista de objetos `listaProdutos` (da classe `Produto`), complete os trechos marcados com `__?__`:

```javascript
function mostrarCaroBaratoEDiferenca() {
    // Garante que o array não esteja vazio
    if (listaProdutos.length === 0) return;

    // Assumimos incialmente que o primeiro produto é o mais caro e o mais barato
    let maisCaro = listaProdutos[0];
    let maisBarato = listaProdutos[0];

    // Percorremos o array para comparar com os demais
    for (let i = 1; i < listaProdutos.length; i++) {
        // Teste para encontrar o produto de MAIOR preço
        if (listaProdutos[i].preco > __?__) {
            maisCaro = listaProdutos[i];
        }

        // Teste para encontrar o produto de MENOR preço
        if (listaProdutos[i].preco < __?__) {
            maisBarato = listaProdutos[i];
        }
    }

    // Cálculo da diferença absoluta de preço
    let diferenca = maisCaro.preco - __?__;

    // Construção do HTML para exibição na interface
    let mensagem = "<b>Produto Mais Caro:</b> " + maisCaro.nome + " (R$ " + maisCaro.preco.toFixed(2) + ")<br>";
    mensagem += "<b>Produto Mais Barato:</b> " + maisBarato.nome + " (R$ " + maisBarato.preco.toFixed(2) + ")<br>";
    mensagem += "<b>Diferença de Preço:</b> R$ " + diferenca.toFixed(2);

    // Inserção do resultado no elemento do DOM
    document.getElementById("resposta").innerHTML = mensagem;
}
```

---

## 🎯 PARTE 3: Leitura de Dados do DOM e Atualização Condicional

### 📌 Resumo Teórico
* **Captura de Entradas (DOM)**: Utilitários como `document.getElementById("id").value` capturam **entradas de texto ou números** digitadas pelo usuário no HTML.
* **Cálculo Percentual**:
  $$\text{Novo Preço} = \text{Preço Atual} + \left( \text{Preço Atual} \times \frac{\text{Porcentagem}}{100} \right)$$
* **Normalização de Strings**: Usar `.toLowerCase()` e `.trim()` ao comparar textos evita erros causados por letras **maiúsculas/minúsculas** ou **espaços acidentais**.

---

### 🟢 Exercício 3: Aplicar Acréscimo Percentual por Cor
Escreva a função `mostrarComAcrescimo()` em JavaScript para que ela atenda aos seguintes requisitos:
1. Ler a **cor desejada** do campo `<input type="text" id="inputCor">`.
2. Ler a **porcentagem de acréscimo** do campo `<input type="number" id="inputPorcentagemAcrescimo">`.
3. Percorrer a `listaProdutos`.
4. Sempre que a **cor do produto** for idêntica à cor informada pelo usuário, reajustar o seu preço.
5. Exibir a lista atualizada de produtos chamando a função `listarProdutos(listaProdutos)`.

```javascript
function mostrarComAcrescimo() {
    // Escreva a sua lógica aqui
}
```

---

## 🎯 PARTE 4: Acumuladores e Contagem por Categoria

### 📌 Resumo Teórico
* **Mapeamento/Dicionário**: Podemos usar um **objeto JavaScript** (`{}`) como mapa de contagem onde as chaves são os nomes das **categorias** e os valores são as **quantidades**.
* **Lógica de Incremento**:
  * Se a chave da categoria **já existe** no objeto, incrementa-se $1$: `contagem[categoria]++`.
  * Se a chave **não existe**, inicializa-se com o valor $1$: `contagem[categoria] = 1`.

---

### 🟢 Exercício 4: Contar Produtos por Categoria
Complete e compreenda a função `mostrarContagemPorCategoria()` responsável por listar a quantidade de pelúcias em cada categoria existente:

```javascript
function mostrarContagemPorCategoria() {
    let contagem = {};

    // 1. Laço para percorrer a lista de produtos
    for (let i = 0; i < listaProdutos.length; i++) {
        let cat = listaProdutos[i].categoria;
        
        // 2. Condição para verificar se a categoria já foi registrada no mapa
        if (contagem[cat]) {
            contagem[cat]++;
        } else {
            contagem[cat] = 1;
        }
    }

    // 3. Montagem do texto legível para o usuário
    let texto = "<h3>Contagem por Categoria:</h3>";
    for (let categoria in contagem) {
        texto += "<b>" + categoria + ":</b> " + contagem[categoria] + " produto(s)<br>";
    }

    // 4. Atualização do DOM
    document.getElementById("resposta").innerHTML = texto;
}
```

---

## 💡 PARTE 5: Gabarito Comentado e Soluções

### 🔍 Resolução do Exercício 1 (Matrizes e Teste de Mesa)
1. **Valores atribuídos no teste de mesa**:
   * `matriz[0][0] = 2`
   * `matriz[0][1] = 4`
   * `matriz[0][2] = 6`
   * `matriz[1][0] = 5`
   * `matriz[1][1] = 10`
   * `matriz[1][2] = 15`

2. **Matriz no formato matemático**:
   $$
   \begin{bmatrix}
   2 & 4 & 6 \\
   5 & 10 & 15
   \end{bmatrix}
   $$

3. **Formato no console do navegador**:
   ```javascript
   [ [2, 4, 6], [5, 10, 15] ]
   ```

---

### 🔍 Resolução do Exercício 2 (Arrays de Objetos)
As lacunas no código devem ser preenchidas sequencialmente por:
1. `maisCaro.preco`
2. `maisBarato.preco`
3. `maisBarato.preco`

---

### 🔍 Resolução do Exercício 3 (Acréscimo Percentual)
```javascript
function mostrarComAcrescimo() {
    // Captura os valores digitados no HTML
    let corDesejada = document.getElementById("inputCor").value.trim();
    let porcentagem = parseFloat(document.getElementById("inputPorcentagemAcrescimo").value);

    // Validação básica dos dados de entrada
    if (!corDesejada || isNaN(porcentagem)) {
        alert("Por favor, preencha o campo de cor e o valor percentual corretamente.");
        return;
    }

    // Percorre o array aplicando o reajuste nos produtos que correspondem à cor
    for (let i = 0; i < listaProdutos.length; i++) {
        if (listaProdutos[i].cor.toLowerCase() === corDesejada.toLowerCase()) {
            listaProdutos[i].preco += listaProdutos[i].preco * (porcentagem / 100);
        }
    }

    // Atualiza a visualização no HTML
    document.getElementById("resposta").innerHTML = listarProdutos(listaProdutos);
}
```

---

### 🔍 Resolução da Questão 1 da Avaliação Original (`matrizZZF(3, 3, 1, 1)`)
A função da avaliação gera uma matriz onde as linhas **pares** ($0, 2$) são preenchidas da **esquerda para a direita** e as linhas **ímpares** ($1$) são preenchidas da **direita para a esquerda** com a sequência de Fibonacci iniciada pelos argumentos $a=1$ e $b=1$.

* **Sequência gerada**: $1, 1, 2, 3, 5, 8, 13, 21, 34, \dots$
* **Linha 0** (Esquerda $\rightarrow$ Direita): Colunas $0, 1, 2$ recebem os valores `1, 1, 2`.
* **Linha 1** (Direita $\rightarrow$ Esquerda): Colunas $2, 1, 0$ recebem os valores `3, 5, 8` $\rightarrow$ Resultando na linha `[8, 5, 3]`.
* **Linha 2** (Esquerda $\rightarrow$ Direita): Colunas $0, 1, 2$ recebem os valores `13, 21, 34`.

#### **Matriz Resultante no Formato Visual**:
$$
\begin{bmatrix}
1 & 1 & 2 \\
8 & 5 & 3 \\
13 & 21 & 34
\end{bmatrix}
$$

#### **Estrutura de Dados Exibida no Console**:
```javascript
[ [1, 1, 2], [8, 5, 3], [13, 21, 34] ]