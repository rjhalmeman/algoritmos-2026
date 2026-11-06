# Lista de Exercícios 01 - CRUD - 4º Bimestre - Algoritmos

## Orientações Gerais
Esta lista tem como objetivo exercitar a construção de sistemas com operações **CRUD** (**Create**, **Read**, **Update**, **Delete**) aplicados a estruturas de dados na memória.

Para cada um dos exercícios abaixo, desenvolva a solução completa utilizando o **padrão "form"** apresentado pelo professor:
1. **Estrutura do Objeto / Modelo de Dados**: Defina a classe ou registro contendo seus respetivos **atributos** e **tipos de dados**.
2. **Interface do Formulário (Form)**: Construa os campos de entrada (**inputs**) necessários para realizar a leitura das informações digitadas pelo usuário.
3. **Operações Principais de CRUD**:
   - **Create (Cadastrar/Inserir)**: Adicionar um novo elemento no vetor/lista.
   - **Read (Listar/Exibir)**: Apresentar a lista completa de elementos cadastrados em tela.
   - **Update (Editar/Atualizar)**: Permitir a seleção e modificação dos dados de um registro já existente.
   - **Delete (Excluir/Remover)**: Apagar um registro selecionado da estrutura de dados.
4. **Manipulação de Coleções (Filtros e Ordenação)**: A partir do exercício 10, adicione funções específicas de **filtragem de array** e **ordenação de dados** (algoritmos de ordenação ou funções nativas).

---

## Exercícios 01 a 09 — CRUD Simples

### 01) Veículo
* **Atributos e Tipos**:
  * `string` **placa** (Identificador do veículo)
  * `string` **marca** (Fabricante do veículo)
  * `string` **modelo** (Modelo comercial)
  * `int` **ano** (Ano de fabricação)

### 02) Celular
* **Atributos e Tipos**:
  * `string` **numero** (Número de identificação/linha)
  * `string` **modelo** (Nome do modelo do aparelho)
  * `string` **fabricante** (Marca do dispositivo)
  * `float` **preco** (Valor monetário do produto)
  * `float` **peso** (Massa do aparelho em gramas)

### 03) Produto
* **Atributos e Tipos**:
  * `int` **idProduto** (Identificador único do produto)
  * `string` **nome** (Nome descritivo)
  * `int` **quantidadeNoEstoque** (Unidades disponíveis em estoque)
  * `float` **pesoMedioUnitario** (Massa individual em quilogramas)

### 04) Pelúcia
* **Atributos e Tipos**:
  * `int` **idPelucia** (Chave primária da pelúcia)
  * `string` **nome** (Nome comercial ou apelido do brinquedo)
  * `string` **personagem** (Personagem em que é inspirado)
  * `float` **tamanhoEmCm** (Altura ou comprimento em centímetros)
  * `float` **preco** (Valor de venda)

### 05) Música
* **Atributos e Tipos**:
  * `int` **idMusica** (Identificador único da faixa)
  * `string` **titulo** (Título da composição)
  * `string` **artista** (Nome do cantor ou banda)
  * `int` **duracaoEmSegundos** (Tempo de execução em segundos)
  * `string` **genero** (Gênero musical principal)

### 06) Livro
* **Atributos e Tipos**:
  * `int` **idLivro** (Identificador do livro)
  * `string` **titulo** (Título da obra literária)
  * `string` **autor** (Nome do autor)
  * `int` **numeroPaginas** (Quantidade total de páginas)
  * `float` **preco** (Preço de capa)

### 07) Planta Exótica
* **Atributos e Tipos**:
  * `int` **idPlanta** (Identificador da planta)
  * `string` **nomeCientifico** (Nomenclatura taxonômica)
  * `string` **nomePopular** (Nome comum da espécie)
  * `float` **frequenciaRegaDias** (Intervalo de irrigação em dias)
  * `float` **preco** (Valor de mercado)

### 08) Café Especial
* **Atributos e Tipos**:
  * `int` **idCafe** (Identificador do lote de café)
  * `string` **nomeGrao** (Nome ou variedade do grão)
  * `string` **fazendaOrigem** (Propriedade produtora)
  * `int` **notaAvaliacao** (Pontuação de qualidade de 0 a 100)
  * `float` **altitudeMetros** (Altitude do cultivo em metros)

### 09) Instrumento Musical
* **Atributos e Tipos**:
  * `int` **idInstrumento** (Identificador do instrumento)
  * `string` **nome** (Nome do instrumento)
  * `string` **tipoInstrumento** (Família: Cordas, Sopro, Percussão, etc.)
  * `string` **material** (Material principal de fabricação)
  * `float` **preco** (Preço de venda)

---

## Exercícios 10 a 20 — CRUD com Filtros e Ordenação

### 10) Jogador de Esportes
* **Atributos e Tipos**:
  * `int` **idJogador** (Identificador do atleta virtual)
  * `string` **nickname** (Nome de usuário/apelido)
  * `string` **jogoPrincipal** (Modalidade de eSports)
  * `int` **quantidadeVitorias** (Número total de partidas vencidas)
  * `float` **taxaDeVitoria** (Percentual de vitórias/winrate)
* **Requisitos de Pesquisa e Filtros**:
  * **Filtro 1 (Condicional)**: Adicionar um botão que liste apenas os jogadores com **taxa de vitória acima de 70%**.
  * **Filtro 2 (Ordenação)**: Classificar a lista de jogadores pela **quantidade de vitórias** em **ordem decrescente**.

### 11) Tabuleiro Antigo
* **Atributos e Tipos**:
  * `int` **idTabuleiro** (Identificador do item de coleção)
  * `string` **nomeJogo** (Nome do jogo de tabuleiro)
  * `int` **anoFabricacao** (Ano em que foi produzido)
  * `string` **materialPrincipal** (Material predominante da estrutura)
  * `float` **valorEstimado** (Valor de mercado para colecionadores)
* **Requisitos de Pesquisa e Filtros**:
  * **Filtro 1 (Condicional)**: Adicionar um botão que liste apenas os tabuleiros fabricados **antes do ano de 1950**.
  * **Filtro 2 (Ordenação)**: Classificar a lista pelo **valor estimado** em **ordem decrescente** (do mais caro para o mais barato).

### 12) Constelação
* **Atributos e Tipos**:
  * `int` **idConstelacao** (Identificador do agrupamento estelar)
  * `string` **nome** (Nome da constelação)
  * `int` **quantidadeEstrelasPrincipais** (Número de estrelas formadoras do asterismo)
  * `string` **hemisferioVisivel** (Região de observação: "Norte" ou "Sul")
  * `float` **distanciaAnosLuz** (Distância média aproximada da Terra em anos-luz)
* **Requisitos de Pesquisa e Filtros**:
  * **Filtro 1 (Condicional)**: Adicionar um botão que filtre e exiba apenas as constelações visíveis no hemisfério **"Sul"**.
  * **Filtro 2 (Condicional)**: Adicionar um botão que liste apenas constelações com **mais de 10 estrelas principais**.

### 13) Poção Mágica
* **Atributos e Tipos**:
  * `int` **idPocao** (Identificador da receita)
  * `string` **nomePocao** (Nome do preparado alquímico)
  * `string` **efeitoPrincipal** (Efeito resultante no usuário)
  * `int` **tempoPreparoMinutos** (Tempo necessário para o cozimento em minutos)
  * `float` **nivelDificuldade** (Índice de complexidade de 1.0 a 10.0)
* **Requisitos de Pesquisa e Filtros**:
  * **Filtro 1 (Condicional)**: Adicionar um botão para filtrar poções com **tempo de preparo menor que 30 minutos**.
  * **Filtro 2 (Ordenação)**: Classificar a lista pelo **nível de dificuldade** em **ordem decrescente**.

### 14) Varinha Mágica
* **Atributos e Tipos**:
  * `int` **idVarinha** (Identificador do artefato)
  * `string` **materialMadeira** (Tipo de madeira da estrutura)
  * `string` **nucleoMagico** (Componente mágico interno)
  * `float` **tamanhoPolegadas** (Comprimento da varinha em polegadas)
  * `float` **flexibilidade** (Nível de maleabilidade)
* **Requisitos de Pesquisa e Filtros**:
  * **Filtro 1 (Condicional)**: Adicionar um botão que liste apenas as varinhas com núcleo de **"Pena de Fênix"**.
  * **Filtro 2 (Ordenação)**: Classificar a lista pelo **tamanho em polegadas** em **ordem crescente**.

### 15) Criatura Mitológica
* **Atributos e Tipos**:
  * `int` **idCriatura** (Identificador do ser fantástico)
  * `string` **nome** (Nome da criatura)
  * `string` **mitologiaOrigem** (Cultura de origem, ex: Grega, Nórdica, Egípcia)
  * `float` **nivelPerigo** (Escala de periculosidade)
  * `bool` **podeVoar** (Indica se a criatura tem habilidade de vôo: `true`/`false`)
* **Requisitos de Pesquisa e Filtros**:
  * **Filtro 1 (Condicional)**: Adicionar um botão que exiba apenas as criaturas que **podem voar (`podeVoar == true`)**.
  * **Filtro 2 (Ordenação)**: Classificar as criaturas pelo **nível de perigo** em **ordem decrescente** (da mais perigosa para a menos perigosa).

### 16) Sabor de Gelato
* **Atributos e Tipos**:
  * `int` **idGelato** (Identificador da receita de gelato)
  * `string` **nomeSabor** (Nome comercial do sabor)
  * `string` **base** (Base da composição, ex: Leite, Água, Fruta)
  * `bool` **ehVegano** (Indica ausência de ingredientes de origem animal: `true`/