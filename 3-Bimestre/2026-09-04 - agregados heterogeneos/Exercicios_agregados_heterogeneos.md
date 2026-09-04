# Base de Dados e Exercícios: Agregados Heterogêneos

Contexto de uma **loja de materiais esportivos** para praticar o conceito de **agregados heterogêneos** (registros/objetos) e a manipulação de **vetores de estruturas**.

---

## Tabela de Dados: Produtos Esportivos

Abaixo está a lista contendo **15 registros** de produtos cadastrados. Cada produto é um **agregado heterogêneo** composto por dados de diferentes tipos (**números inteiros**, **textos** e **números decimais**):

| ID | Nome do Produto | Preço Unitário (R$) | Peso (kg) | Quantidade em Estoque |
| :---: | :--- | :---: | :---: | :---: |
| 1 | Bola de Futebol Campo | 89.90 | 0.45 | 30 |
| 2 | Chuteira Society | 199.90 | 0.70 | 15 |
| 3 | Raquete de Tênis | 350.00 | 0.30 | 8 |
| 4 | Bola de Basquete | 120.00 | 0.62 | 20 |
| 5 | Kettlebell 12kg | 180.00 | 12.00 | 5 |
| 6 | Caneleira de Futebol | 35.00 | 0.15 | 40 |
| 7 | Luva de Boxe 12oz | 150.00 | 0.80 | 12 |
| 8 | Prancha Stand Up Paddle | 2500.00 | 11.50 | 2 |
| 9 | Óculos de Natação | 45.00 | 0.08 | 50 |
| 10 | Colchonete de Yoga | 65.00 | 0.90 | 25 |
| 11 | Anilha de Ferro 10kg | 130.00 | 10.00 | 10 |
| 12 | Capacete de Ciclismo | 160.00 | 0.28 | 18 |
| 13 | Corda de Pular Veloz | 25.00 | 0.12 | 60 |
| 14 | Mochila de Hidratação | 210.00 | 0.40 | 14 |
| 15 | Kimono de Jiu-Jitsu | 380.00 | 1.80 | 7 |

---

## Lista de Exercícios

Utilize a tabela de produtos acima para resolver os enunciados a seguir aplicando a lógica de programação:

1. **Definição da Classe:** Escreva o código da **classe `Produto`** necessária para servir de molde para os itens da loja. Indique os 5 atributos (`id`, `nome`, `preco_unitario`, `peso` e `quantidade_estoque`) dentro do método **construtor**.

A partir do exercício 2, crie uma função para resolver cada questão.

2. **Inicialização do Vetor:** Escreva o código em JavaScript para declarar a variável `listaProdutos` e **popular o vetor** instanciando os 15 produtos da tabela com o operador `new`.

3. **Listagem Simples:** Crie um algoritmo que utilize um **laço de repetição** (`for`) para percorrer a lista e exibir apenas o **nome** e o **preço unitário** de cada item.

4. **Produto Mais Pesado:** Desenvolva um algoritmo para comparar o campo `peso` de todos os registros e exibir o **nome** e o **peso** do produto **mais pesado** da loja.

5. **Produto Mais Leve:** Escreva uma rotina que encontre e exiba o **nome** e o **peso** do produto **mais leve** do estoque.

6. **Produto Mais Caro:** Elabore uma lógica para identificar qual é o produto com o **maior preço unitário** e imprima todas as suas informações.

7. **Produto Mais Barato:** Escreva um algoritmo para identificar qual produto possui o **menor preço unitário** da lista.

8. **Média de Preços:** Crie uma rotina que calcule e exiba a **média dos preços unitários** de todos os 15 produtos cadastrados.

9. **Média de Peso:** Desenvolva um algoritmo que some o peso individual dos produtos e calcule o **peso médio** dos itens do catálogo.

10. **Alerta de Estoque Baixo:** Escreva um algoritmo que percorra a lista e exiba o **nome** e a **quantidade** apenas dos produtos que possuem **menos de 10 unidades** em estoque.

11. **Filtro por Faixa de Preço:** Crie um procedimento que liste o **nome** e o **preço** de todos os produtos que custam **até R$ 100,00**.

12. **Busca por Nome:** Implemente um algoritmo de pesquisa que procure um produto pelo seu **nome** (ex: `"Luva de Boxe 12oz"`). Se encontrar, exiba os dados do registro; caso contrário, exiba uma mensagem de alerta.

13. **Valor em Estoque por Item:** Escreva um algoritmo que calcule e mostre o **valor total acumulado por produto** (multiplicando `preco_unitario` por `quantidade_estoque`).

14. **Valor Total do Patrimônio:** Crie um algoritmo que calcule a **soma total do valor de todo o estoque** da loja (somatório do valor em estoque de todos os 15 produtos).

15. **Total de Peças Estocadas:** Desenvolva uma rotina para somar o campo `quantidade_estoque` de todos os registros e informar a **quantidade total de itens físicos** armazenados na loja.

16. **Peso Total da Carga:** Crie um algoritmo para calcular o **peso total combinado** do estoque da loja (multiplicando `peso` por `quantidade_estoque` de cada item e somando o resultado).

17. **Entrada de Mercadoria:** Escreva uma função que receba o `id` de um produto e uma **quantidade recebida**, atualizando e somando esse valor ao atributo `quantidade_estoque` do produto correspondente.

18. **Desconto Promocional:** Desenvolva uma rotina que aplique **10% de desconto** no `preco_unitario` de todos os produtos que pesam **mais de 1.0 kg**.

19. **Contagem por Categoria de Preço:** Crie uma estrutura de decisão para **contar e exibir** quantos produtos se encaixam em cada categoria:
    * **Baratos:** Preço menor que R$ 50,00
    * **Médios:** Preço entre R$ 50,00 e R$ 200,00
    * **Caros:** Preço maior que R$ 200,00

20. **Ordenação por Preço:** Implemente um algoritmo que organize o vetor de produtos em **ordem crescente de preço** (do mais barato ao mais caro) e exiba a lista final reorganizada. Não é para usar o comando Sort do JS ou outro comando pré-definido. Use algum método de ordenação.