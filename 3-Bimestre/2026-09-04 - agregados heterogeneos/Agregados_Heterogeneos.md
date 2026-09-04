# Agregados Heterogêneos na Prática

Entender **agregados heterogêneos** fica muito simples quando pensamos no funcionamento de uma **ficha de cadastro** em papel e uma **pasta fichário**.

---

### O que é um Agregado Heterogêneo?

É uma estrutura que nos permite **juntar dados de tipos diferentes** (números, textos, datas) dentro de uma **única variável**. 

Em vez de deixar as informações de uma pessoa espalhadas no código, nós as agrupamos em um único pacote.

---

### 1. Por que a Classe `Pessoa` foi criada? (O Agregado)

No arquivo `Pessoa.js`, a classe `Pessoa` funciona como a nossa **"ficha em branco"**[cite: 4]. Ela define o modelo do **agregado heterogêneo**, especificando quais informações toda pessoa deve ter:

* **CPF:** Número (`123`)[cite: 3, 4]
* **Nome:** Texto / String (`"Rebeca"`)[cite: 3, 4]
* **Data de Nascimento:** Texto / String (`"2010-10-25"`)[cite: 3, 4]
* **Altura:** Número Decimal / Float (`1.65`)[cite: 3, 4]

> **Por que isso é útil?**  
> Sem a classe, para cadastrar 30 alunos teríamos que criar 120 variáveis soltas (`nome1`, `cpf1`, `altura1`, `nome2`...). Com a classe, usamos o comando `new Pessoa(...)` para criar um **único objeto** que já carrega todos os 4 dados juntos[cite: 3, 4].

---

### 2. Por que usamos a Lista `listaPessoas`? (O Fichário)

A classe sabe criar apenas **uma ficha por vez**[cite: 4]. Para organizar uma turma inteira, precisamos de um lugar para guardar todas essas fichas juntas.

No arquivo `Pessoa.html`, a variável `let listaPessoas = []` é o nosso **fichário**[cite: 3]:

* O comando `new Pessoa(...)` preenche **uma ficha**[cite: 3, 4].
* O comando `listaPessoas.push(pessoa)` coloca essa ficha dentro do **fichário**[cite: 3].

Assim, a lista armazena as fichas em posições organizadas[cite: 3]:
* **`listaPessoas[0]`**: Ficha da Rebeca[cite: 3]
* **`listaPessoas[1]`**: Ficha da Sofia[cite: 3]
* **`listaPessoas[2]`**: Ficha da Kamily[cite: 3]

---

### 3. O Passo a Passo no Algoritmo

Veja como os dados fluem dentro da aplicação:

1. **Inicialização:** A lista é criada vazia (`let listaPessoas = []`) para receber os registros[cite: 3].
2. **Entrada e Agrupamento:** Chamamos `new Pessoa(123, "Rebeca", ...)` para unir os dados heterogêneos em uma variável[cite: 3, 4].
3. **Processamento:** O comando `listaPessoas.push(pessoa)` insere o objeto preenchido no vetor[cite: 3].
4. **Saída:** A função `listarTodasAsPessoas()` usa um laço `for` para percorrer o fichário linha por linha, acessando os campos com o ponto (`linha.nome`, `linha.cpf`) e exibindo tudo na tela[cite: 3].

---

### Regra de Ouro para Lembrar
* **A Classe (`Pessoa`)** = O modelo da **ficha** (agrupa dados de tipos diferentes)[cite: 4].
* **A Lista (`listaPessoas`)** = O **fichário** (guarda todas as fichas organizadas)[cite: 3].