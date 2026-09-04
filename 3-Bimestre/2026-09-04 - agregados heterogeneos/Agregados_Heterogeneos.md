# Agregados Heterogêneos (Registros / Structs)

Um **agregado heterogêneo** é uma estrutura de dados que permite agrupar, sob o mesmo nome de variável, múltiplos valores de **tipos de dados distintos** (como números inteiros, textos, decimais e booleanos). Enquanto um vetor tradicional é um **agregado homogêneo** (armazena dados de um único tipo), o registro permite modelar **entidades do mundo real** (como Aluno, Produto ou Cliente) associando **campos** nomeados a uma única estrutura.

---

### 1. Como vai ficar armazenado na memória do computador

Na **memória RAM**, variáveis simples ocupam posições com base no seu tipo de dado (ex: um número inteiro ocupa 4 bytes; um texto ocupa o espaço equivalente aos seus caracteres/ponteiro).

Quando declaramos um **agregado heterogêneo**, o computador reserva um **bloco contíguo de memória** dimensionado para comportar todos os seus **campos** sequencialmente:

* **Endereço Base (Ex: $1000$):** `ra` (**Inteiro**) $\rightarrow$ Ocupa 4 bytes ($1000$ a $1003$)
* **Endereço Sequencial (Ex: $1004$):** `nome` (**Texto**) $\rightarrow$ Ocupa 8 bytes ($1004$ a $1011$)
* **Endereço Sequencial (Ex: $1012$):** `media` (**Real / Float**) $\rightarrow$ Ocupa 8 bytes ($1012$ a $1019$)

O identificador da variável aponta para o **endereço inicial** do bloco na memória. A leitura e escrita em um campo específico ocorrem calculando o **deslocamento (offset)** a partir desse endereço base.

---

### 2. Como inicializar as variáveis

Para utilizar um agregado heterogêneo, definimos o esquema do **registro** e inicializamos a variável individual ou uma **coleção de registros** (vetor de agregados).

```javascript
// Inicialização de um registro individual com seus campos e tipos iniciais
let aluno = {
    ra: 0,           // Tipo: Inteiro
    nome: "",        // Tipo: Texto
    media: 0.0,      // Tipo: Real (Decimal)
    ativo: false     // Tipo: Booleano
};

// Inicialização de uma coleção (Vetor de Agregados Heterogêneos)
let listaAlunos = [];
```

---

### 3. Entrada de dados

A **entrada de dados** é realizada acessando cada **campo** individualmente por meio do **operador ponto (`.`)**, seja por atribuição direta ou pela leitura de dados enviados pelo usuário.

```javascript
// Atribuição de valores aos campos do registro
aluno.ra = 202601;
aluno.nome = "Ana Silva";
aluno.media = 8.5;
aluno.ativo = true;

// Armazenamento do agregado preenchido dentro do vetor
listaAlunos.push(aluno);

// Cadastro de um segundo registro diretamente no vetor
listaAlunos.push({
    ra: 202602,
    nome: "Bruno Costa",
    media: 6.0,
    ativo: true
});
```

---

### 4. Processamento

No **processamento**, iteramos sobre a estrutura e manipulamos os dados acessando os **campos específicos** para realizar cálculos, validações ou alterar o estado dos registros.

```javascript
let somaMedias = 0;

// Algoritmo para percorrer a coleção de registros
for (let i = 0; i < listaAlunos.length; i++) {
    // Acesso ao campo 'media' do registro na posição atual para acúmulo
    somaMedias += listaAlunos[i].media;
    
    // Criação e atribuição de um novo campo com base em uma condição
    if (listaAlunos[i].media >= 7.0) {
        listaAlunos[i].situacao = "Aprovado";
    } else {
        listaAlunos[i].situacao = "Recuperação";
    }
}

// Cálculo da média geral da turma
let mediaGeral = somaMedias / listaAlunos.length;
```

---

### 5. Saída

A **saída de dados** obtém as informações armazenadas no agregado heterogêneo e as exibe de forma formatada para o usuário.

```javascript
console.log("=== LISTAGEM DE ALUNOS ===");

// Laço para exibição dos dados campo a campo
for (let i = 0; i < listaAlunos.length; i++) {
    const registro = listaAlunos[i];
    
    console.log(
        "RA: " + registro.ra + 
        " | Nome: " + registro.nome + 
        " | Média: " + registro.media + 
        " | Situação: " + registro.situacao
    );
}

console.log("Média Geral do Grupo: " + mediaGeral);
```