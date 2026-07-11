# Lista de Exercícios Consolidada: Matrizes, Objetos e Vetores

> **Nota Educativa:** Para a resolução dos exercícios abaixo, lembre-se de utilizar **funções** (ou métodos) sempre que possível ou necessário, promovendo o reaproveitamento e a organização do código. Para as questões que envolvem interface, procure sempre separar a camada de visualização (**HTML**) da lógica de programação (**JavaScript**).

## Tópico 1: Matrizes
*Operações básicas, buscas, transformações e análise de dados bidimensionais.*

1. Crie um algoritmo capaz de **adicionar elementos em uma matriz** e, em seguida, listar todo o conteúdo dessa matriz.
2. Leia uma **matriz de ordem 3x4** (3 linhas e 4 colunas). Faça uma **função** separada para calcular e mostrar:
   - a) A **soma dos elementos** de cada coluna.
   - b) A **média aritmética** de cada linha.
   - c) A **soma de todos os elementos** presentes na matriz.
3. Leia os dados para uma **matriz quadrada de ordem 3**. Faça uma **função** que imprima exclusivamente os elementos da **diagonal principal**.
4. Leia os dados para uma **matriz quadrada de ordem 4**. Faça uma **função** que calcule a **média dos elementos** pertencentes à **diagonal secundária**.
5. Escreva um algoritmo que leia uma **matriz 3x3 de números inteiros** e possua uma **função** encarregada de calcular a **soma de todos os seus elementos**.
6. Implemente um algoritmo que leia uma **matriz 4x4 de números inteiros** e crie uma **função** que gere a sua **matriz transposta**.
7. Crie um algoritmo que leia **duas matrizes de ordem 2x2** e calcule o **produto (multiplicação)** entre essas matrizes.
8. Escreva um algoritmo que leia uma matriz de números inteiros e receba também um **número inteiro X**. Faça uma **função** que mostre a **posição (linha e coluna)** desse número na matriz, caso ele esteja presente.
9. Desenvolva um algoritmo que leia uma matriz de números inteiros. Faça uma **função** que encontre o **maior elemento**, e outra que encontre o **menor elemento**, imprimindo ambos juntamente com suas respectivas **posições**.
10. Implemente um algoritmo que gere e preencha uma matriz com **números inteiros aleatórios**. Faça **funções** que calculem as **somas dos elementos** da diagonal principal e da diagonal secundária.
11. Escreva um algoritmo que leia uma **matriz 3x3** de números inteiros e tenha uma **função** para calcular a **média geral** dos seus elementos.
12. Crie uma **função** que gere uma **matriz identidade** de ordem N (onde o valor de **N** deve ser fornecido pelo usuário). *(Nota: A matriz identidade é uma matriz quadrada onde os elementos da diagonal principal são iguais a 1 e os demais são 0).*
13. Desenvolva uma **função** que receba uma matriz qualquer de números inteiros e **substitua todos os elementos negativos por zero**. Mostre a matriz resultante.
14. Escreva uma **função** que receba uma **matriz 3x3** de números inteiros e gere uma nova matriz que seja a **imagem espelhada horizontalmente** da matriz original. Mostre o resultado em formato de grade.
15. Crie um algoritmo que leia uma **matriz 4x4** de números inteiros e verifique se ela é uma **matriz simétrica**. *(Nota: Uma matriz é considerada simétrica se for uma matriz quadrada idêntica à sua matriz transposta)*. Use **funções** para a verificação.
16. Escreva um programa que, a partir de um nome completo informado pelo usuário, exiba apenas suas **iniciais**. As iniciais são formadas pela primeira letra de cada palavra do nome. **Atenção:** Conectores como *e, do, da, dos, das, de* não devem ser considerados. As iniciais devem ser impressas sempre em **maiúsculas**. *(Exemplo: "Maria das Graças Pimenta" => MGP)*.
17. Homer Simpson, Barney Gumble e Carl Carlson estão competindo para ver quem come mais rosquinhas em uma semana. Faça um algoritmo que utilize uma **matriz**, onde cada elemento contém o número de rosquinhas consumidas por uma pessoa em um dia específico. Desenvolva a lógica para determinar **quem comeu mais rosquinhas** na semana. Em caso de empate, retorne todos os empatados.
    *(Exemplo de estrutura: `[[10, 5, 8, 12, 7], [8, 6, 10, 9, 11], [12, 7, 9, 8, 10]]`)*

### Desafios Avançados com Matrizes

18. Faça um programa que popule uma matriz estruturando um **Triângulo de Pascal**. A parte acima da diagonal principal da matriz deverá ser preenchida obrigatoriamente com **zeros**.
19. Faça um programa para gerar um **Quadrado Mágico** em uma matriz quadrada de ordem ímpar. 
    - **Regras:** O número 1 inicia na última coluna, na linha do meio. Em seguida, aplica-se o movimento "uma linha para baixo, uma coluna para a direita" para posicionar o próximo número. 
    - Se a célula destino já estiver ocupada (coincidência), conte duas linhas para baixo e uma coluna para a direita a partir do local da coincidência. 
    - Quando o movimento "sair" dos limites da matriz, ele deve reaparecer do lado oposto (ex: saiu na coluna 4 de uma matriz 3x3, volta para a coluna 1). 
    - *(Nota: No quadrado mágico, a soma dos valores de qualquer linha, coluna ou diagonal será sempre igual)*.

### Operações Complexas em Matrizes NxM (Integrando HTML e JS)

20. Leia uma **matriz de ordem NxM** de números inteiros e armazene-a na memória. Construa uma interface de modo que o **HTML e o JavaScript fiquem separados**. Em seguida, crie uma **função** independente para realizar cada uma das operações abaixo:
    - a) **Somar todos os elementos** da matriz.
    - b) **Somar os elementos de uma única coluna** (o índice da coluna deve ser informado pelo usuário).
    - c) Calcular a **média aritmética simples** de uma linha específica (informada pelo usuário).
    - d) Extrair e separar em um vetor isolado todos os **números pares** contidos na matriz.
    - e) Contabilizar e informar **quantos números primos** existem na matriz.
    - f) Identificar e mostrar a **posição exata (linha e coluna)** do maior elemento da matriz.
    - g) **Multiplicar dois números** da matriz utilizando as suas posições, que devem ser fornecidas pelo usuário.
    - h) Separar todos os elementos da matriz em **2 vetores distintos**: um contendo apenas os números pares e o outro apenas os ímpares.
    - i) Implementar uma **função de busca** que procure um elemento e informe se ele está ou não presente.
    - j) Implementar uma **função de contagem** que procure um determinado elemento e retorne quantas vezes ele se repete.
    - k) Implementar uma função que procure e **mostre a primeira posição encontrada** de um elemento.
    - l) Implementar uma função que retorne **todas as posições** (linhas e colunas) em que um determinado elemento aparece.

### Testes de Mesa e Compreensão de Código

21. Considere o código JavaScript a seguir e realize o **teste de mesa** documentando como a memória se comporta e qual será o resultado exibido:
    ```javascript
    let linhas = 3;
    let colunas = 4;
    let matriz = new Array(linhas);
    for (let i = 0; i < linhas; i++) {
      matriz[i] = new Array(colunas);
    }
    console.log(matriz);
    ```

22. Considere o seguinte trecho de código JavaScript que utiliza a função `.fill()` e realize também o seu respectivo **teste de mesa**:
    ```javascript
    let linhas = 3;
    let colunas = 4;
    let matriz = new Array(linhas);
    for (let i = 0; i < linhas; i++) {
      matriz[i] = new Array(colunas).fill(0);
    }
    console.log(matriz);
    ```

## Tópico 2: Objetos e Vetores
*Estruturação e manipulação de dados em formato de orientação a objetos.*

23. Desenvolva uma **classe** capaz de armazenar uma **lista de pessoas**. A classe deve conter os atributos essenciais: *CPF, Nome, Data de Nascimento e Altura*. Desenvolva os seguintes métodos/funções:
    - a) Uma função para listar **somente os nomes** de todas as pessoas cadastradas.
    - b) Uma função para listar **os nomes e as alturas** correspondentes.
    - c) Uma função que receba um CPF específico e mostre **todos os dados** da pessoa dona deste CPF.
    - d) Uma função de busca onde, ao informar um nome, ela retorne **todos os dados da pessoa**. Caso o nome não esteja na lista, emita um aviso ao usuário.

24. Crie uma **classe** destinada a gerenciar uma **lista de livros**, contemplando os atributos: *ISBN, Título, Autor, Ano de Publicação e Preço*.
    - a) Faça uma função para **adicionar 5 livros** à lista. Essa função deverá retornar um vetor preenchido com todos os dados recém-inseridos.
    - b) Faça uma função que processe a lista e retorne um novo vetor **exclusivo para os títulos** dos livros.
    - c) Faça uma função que receba um **Ano de Publicação** e devolva uma lista com todos os títulos lançados naquele ano específico.
    - d) Faça uma função que processe a lista e retorne duas informações do **livro mais caro**: o seu *Nome* e o seu *Preço*.
    - e) Faça uma função para listar conjuntamente o **título e o preço** de todos os livros, retornando essas informações em um vetor.

25. Modele uma **classe** para gerenciar **dados de alunos**, possuindo os atributos: *RA, Nome e Curso*.
    - a) Adicione inicialmente **5 alunos** à sua lista.
    - b) Crie uma função que retorne uma estrutura relacionando os **nomes dos alunos e os cursos** em que estão matriculados.
    - c) Crie uma função que receba um **RA** e retorne, se existir, **todos os dados** do aluno correspondente.
    - d) Crie uma função que receba o nome de um **Curso** e retorne uma lista contendo os nomes de todos os alunos daquele curso.
    - e) Crie uma função que pegue a lista atual e a retorne **classificada em ordem crescente** pelo nome dos alunos.

26. Faça um programa, utilizando **JavaScript e HTML**, que funcione como o sistema de dados para uma **pizzaria**:
    - a) Crie uma **lista de pizzas disponíveis no cardápio** (Ex: 4 queijos, marguerita, calabresa, frango com catupiry, etc.).
    - b) Crie de forma independente uma **lista de ingredientes culinários** utilizados no estabelecimento (Ex: mussarela, molho de tomate, massa de pizza, etc.).
    - c) Implemente um modelo computacional **eficiente** para gerenciar a composição do cardápio: os ingredientes não devem ter seus dados repetidos na memória. *(Exemplo Prático: Ao cadastrar a pizza Marguerita, ela não reescreverá o ingrediente "mussarela"; apenas fará uma referência ao item previamente cadastrado na lista de ingredientes, apontando a quantidade necessária para aquela receita).*

## Tópico 3: Interfaces com Objetos e Vetores
*Para os exercícios práticos desta seção, construa aplicações interativas (HTML + JS) de forma que o usuário consiga adicionar novos registros à lista e visualizá-la dinamicamente na tela.*

27. Organize computacionalmente um sistema de **lista de compras** inicializado com a estrutura abaixo (permitindo inserções dinâmicas):
    - 3 Pacotes de arroz (5kg)
    - 2 Pacotes de feijão (1kg)
    - 12 Maçãs
    - 1 Dúzia de bananas
    - 1 Bolacha de maizena (500g)
28. Organize computacionalmente um catálogo ou **lista de filmes**. O sistema deve armazenar e exibir para cada registro: **Nome do Filme, Ano de Lançamento e Gênero**.
29. Organize computacionalmente um acervo ou **lista de Músicas**. O sistema deve armazenar e exibir de forma estruturada: **Nome da Música, Duração, Ano de Lançamento e Nome do Intérprete/Banda**.
