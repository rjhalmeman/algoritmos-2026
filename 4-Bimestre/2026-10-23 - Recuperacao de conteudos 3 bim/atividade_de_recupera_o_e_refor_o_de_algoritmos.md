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
 
3. **Estrutura de Dados em Console**: Escreva exatamente o texto no formato de **array de arrays** que o comando `console.log(resultado)` exibirá na tela.

