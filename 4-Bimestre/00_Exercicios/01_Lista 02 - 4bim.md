```markdown
Lista de Exercícios 02 - CRUD

## Exercícios 17 a 30 — CRUD Avançado (Com Pesquisas, Filtros, Ordenação e Cálculos)

### 17) Peça de Computador (Hardware)
* **Atributos e Tipos**:
  * `int` **idHardware** (Identificador único da peça)
  * `string` **nomePeca** (Nome e modelo, ex: "RTX 4090")
  * `string` **categoria** (Tipo de peça: CPU, GPU, RAM, Placa-Mãe)
  * `int` **quantidadeEstoque** (Unidades disponíveis)
  * `float` **preco** (Preço unitário)
* **Requisitos Extras**:
  * **Pesquisa**: Buscar e listar peças por uma **categoria** específica digitada pelo usuário.
  * **Filtro**: Botão para exibir apenas as peças que estão em **"Baixo Estoque"** (menos de 5 unidades).
  * **Ordenação**: Classificar a lista pelo **preco** em ordem **decrescente** (do mais caro ao mais barato).
  * **Cálculo**: Exibir na tela a **Soma Total** em dinheiro do estoque atual (multiplicando o estoque de cada peça pelo seu preço).

### 18) Missão Espacial
* **Atributos e Tipos**:
  * `int` **idMissao** (Identificador da missão)
  * `string` **nomeMissao** (Nome do projeto, ex: "Apollo 11")
  * `string` **agencia** (Agência responsável, ex: NASA, ESA)
  * `int` **anoLancamento** (Ano em que o foguete foi lançado)
  * `bool` **teveSucesso** (`true` se a missão foi bem-sucedida, `false` se falhou)
* **Requisitos Extras**:
  * **Filtro 1**: Botão para listar apenas as missões que falharam (**teveSucesso == false**).
  * **Filtro 2**: Listar apenas missões lançadas **após o ano 2000**.
  * **Ordenação**: Ordenar as missões cronologicamente pelo **anoLancamento** em ordem **crescente**.
  * **Cálculo**: Exibir a **Porcentagem de Sucesso geral** (quantidade de missões bem-sucedidas em relação ao total cadastrado).

### 19) Obra de Arte
* **Atributos e Tipos**:
  * `int` **idObra** (Identificador da pintura ou escultura)
  * `string` **titulo** (Nome da obra)
  * `string` **autor** (Nome do artista)
  * `int` **anoCriacao** (Ano em que foi finalizada)
  * `float` **valorEstimado** (Valor no mercado de arte)
* **Requisitos Extras**:
  * **Pesquisa**: Buscar obras através do nome do **autor**.
  * **Filtro**: Listar apenas as obras avaliadas em **mais de R$ 1.000.000,00**.
  * **Ordenação**: Classificar a lista pelo **anoCriacao** em ordem **decrescente** (das mais recentes para as mais antigas).
  * **Cálculo**: Mostrar a **Média de Valor Estimado** das obras atualmente listadas na tela.

### 20) Cerveja Artesanal
* **Atributos e Tipos**:
  * `int` **idCerveja** (Identificador do rótulo)
  * `string` **nome** (Nome comercial)
  * `string` **estilo** (Ex: IPA, Stout, Pilsen)
  * `float` **teorAlcoolico** (Porcentagem de álcool - ABV)
  * `int` **ibu** (Índice de amargor)
* **Requisitos Extras**:
  * **Pesquisa**: Filtrar cervejas informando o **estilo**.
  * **Filtro**: Exibir apenas cervejas altamente amargas (**ibu > 50**).
  * **Ordenação**: Ordenar a lista pelo **teorAlcoolico** em ordem **crescente** (das mais leves às mais fortes).
  * **Cálculo**: Calcular e exibir a **Média de Amargor (IBU)** das cervejas cadastradas.

### 21) Fóssil de Dinossauro
* **Atributos e Tipos**:
  * `int` **idFossil** (Identificador de registro no museu)
  * `string` **especie** (Nome do dinossauro, ex: T-Rex)
  * `string` **periodo** (Ex: Jurássico, Cretáceo)
  * `float` **pesoKg** (Peso da ossada em quilos)
  * `float` **percentualCompleto** (Porcentagem do esqueleto encontrada)
* **Requisitos Extras**:
  * **Pesquisa**: Buscar fósseis pelo **periodo** em que viveram.
  * **Filtro**: Mostrar apenas fósseis em excelente estado de conservação (**percentualCompleto >= 80.0**).
  * **Ordenação**: Classificar pelo **pesoKg** em ordem **decrescente** (do mais pesado para o mais leve).
  * **Cálculo**: Somar o **Peso Total (em Toneladas)** de todos os fósseis da lista.

### 22) Espécie de Inseto
* **Atributos e Tipos**:
  * `int` **idInseto** (Identificador da espécie)
  * `string` **nomeComum** (Nome popular)
  * `string` **ordem** (Classificação biológica, ex: Coleoptera)
  * `float` **tamanhoMm** (Tamanho médio em milímetros)
  * `bool` **ehVenenoso** (`true`/`false`)
* **Requisitos Extras**:
  * **Filtro 1**: Exibir exclusivamente os insetos venenosos (**ehVenenoso == true**).
  * **Filtro 2**: Listar insetos considerados gigantes (**tamanhoMm > 50.0**).
  * **Ordenação**: Ordenar **alfabeticamente** pelo **nomeComum**.
  * **Cálculo**: Calcular o **Tamanho Médio** de todos os insetos cadastrados.

### 23) Criptomoeda
* **Atributos e Tipos**:
  * `int` **idCripto** (Identificador no sistema)
  * `string` **nome** (Ex: Bitcoin, Ethereum)
  * `string` **sigla** (Ex: BTC, ETH)
  * `float` **valorAtual** (Cotação no momento)
  * `float` **maximaHistorica** (Maior valor já atingido)
* **Requisitos Extras**:
  * **Pesquisa**: Buscar rapidamente uma moeda informando sua **sigla**.
  * **Filtro**: Mostrar apenas moedas que estão custando **menos de 50% da sua máxima histórica** (indicando possível queda).
  * **Ordenação**: Ordenar pelo **valorAtual** em ordem **decrescente**.
  * **Cálculo**: Somar o **Valor Total** necessário para comprar exatamente 1 unidade de cada criptomoeda listada.

### 24) Tênis de Edição Limitada (Sneakers)
* **Atributos e Tipos**:
  * `int` **idTenis** (Identificador do calçado)
  * `string` **modelo** (Nome da silhueta)
  * `string` **marca** (Ex: Nike, Adidas)
  * `int` **tamanho** (Numeração do calçado)
  * `float` **precoRevenda** (Valor de mercado secundário)
* **Requisitos Extras**:
  * **Pesquisa**: Buscar tênis por uma **marca** específica.
  * **Filtro**: Listar apenas tênis que sirvam em um determinado **tamanho** informado pelo usuário.
  * **Ordenação**: Classificar do mais barato ao mais caro através do **precoRevenda**.
  * **Cálculo**: Calcular a **Média de Preço** dos tênis que aparecem na lista filtrada.

### 25) Queijo Artesanal
* **Atributos e Tipos**:
  * `int` **idQueijo** (Identificador no catálogo)
  * `string` **nome** (Nome do queijo, ex: Gorgonzola, Canastra)
  * `string` **tipoLeite** (Vaca, Cabra, Ovelha, Búfala)
  * `int` **tempoMaturacaoMeses** (Meses em cura)
  * `float` **precoKg** (Valor cobrado por quilo)
* **Requisitos Extras**:
  * **Pesquisa**: Filtrar queijos indicando o **tipoLeite**.
  * **Filtro**: Listar queijos muito curados (com **tempoMaturacaoMeses** maior ou igual a 12).
  * **Ordenação**: Classificar pelo **tempoMaturacaoMeses** em ordem **crescente** (do mais fresco ao mais curado).
  * **Cálculo**: Somar o **Preço Médio por Kg** apenas dos queijos feitos de leite de cabra.

### 26) Relógio Mecânico
* **Atributos e Tipos**:
  * `int` **idRelogio** (Identificador da peça)
  * `string` **modelo** (Nome da coleção)
  * `string` **fabricante** (Marca, ex: Rolex, Omega)
  * `int` **anoFabricacao** (Ano de produção)
  * `float` **valorMercado** (Preço atual de venda)
* **Requisitos Extras**:
  * **Pesquisa**: Buscar peças vintage fabricadas **antes do ano 1990**.
  * **Filtro**: Exibir apenas relógios de um **fabricante** específico.
  * **Ordenação**: Ordenar pelo **valorMercado** em ordem **decrescente**.
  * **Cálculo**: Obter e destacar na interface o **Valor do Relógio Mais Caro** da coleção (buscando o valor máximo).

### 27) História em Quadrinhos (HQ)
* **Atributos e Tipos**:
  * `int` **idHq** (Identificador na coleção)
  * `string` **tituloPrincipal** (Nome do herói ou arco)
  * `string` **editora** (Ex: Marvel, DC, Image)
  * `int` **numeroEdicao** (Volume ou fascículo)
  * `float` **notaConservacao** (Nota de 1.0 a 10.0 baseada em órgãos de classificação)
* **Requisitos Extras**:
  * **Pesquisa**: Buscar edições específicas pelo **tituloPrincipal**.
  * **Filtro**: Exibir apenas quadrinhos em estado "Mint/Near Mint" (**notaConservacao >= 9.0**).
  * **Ordenação**: Ordenar pelo **numeroEdicao** em ordem **crescente**, organizando a leitura cronologicamente.
  * **Cálculo**: Mostrar a **Média de Conservação** de toda a biblioteca cadastrada.

### 28) Foguete de Modelismo (Minifoguetes)
* **Atributos e Tipos**:
  * `int` **idFoguete** (Identificador do modelo)
  * `string` **nomeModelo** (Nome de batismo do foguete)
  * `float` **pesoGramas** (Peso da estrutura sem motor)
  * `float` **altitudeMaximaMetros** (Recorde de altura de voo)
  * `int` **motoresUsados** (Quantidade de motores no cluster)
* **Requisitos Extras**:
  * **Filtro 1**: Mostrar apenas foguetes pesados (**pesoGramas > 500**).
  * **Filtro 2**: Listar foguetes que conseguiram quebrar a marca de **1000 metros** em **altitudeMaximaMetros**.
  * **Ordenação**: Classificar pela quantidade de **motoresUsados** em ordem **decrescente**.
  * **Cálculo**: Somar a **Altitude Máxima Combinada** de todos os lançamentos registrados na lista.

### 29) Exoplaneta (Planeta Fora do Sistema Solar)
* **Atributos e Tipos**:
  * `int` **idPlaneta** (Identificador no telescópio)
  * `string` **nome** (Nomenclatura oficial, ex: Kepler-186f)
  * `string` **tipo** (Rochoso, Gigante Gasoso, Super-Terra)
  * `float` **distanciaAnosLuz** (Distância do planeta até a Terra)
  * `bool` **zonaHabitavel** (`true` se puder conter água líquida)
* **Requisitos Extras**:
  * **Filtro 1**: Listar exclusivamente planetas localizados na **zonaHabitavel**.
  * **Filtro 2**: Listar apenas exoplanetas considerados próximos (menos de **50 anos-luz** de distância).
  * **Ordenação**: Ordenar **alfabeticamente** pelo **nome** do planeta.
  * **Cálculo**: Contabilizar e exibir a **Quantidade Total** de planetas do tipo "Gigante Gasoso" descobertos.

### 30) Vinho de Colecionador
* **Atributos e Tipos**:
  * `int` **idVinho** (Identificador da garrafa na adega)
  * `string` **nomeRotulo** (Nome do vinho e vinícola)
  * `string` **uvaPrincipal** (Cabernet, Merlot, Malbec, etc.)
  * `int` **anoSafra** (Ano da colheita)
  * `float` **pontuacaoEspecialista** (Nota de 0 a 100 dada por críticos)
* **Requisitos Extras**:
  * **Pesquisa**: Filtrar garrafas indicando a **uvaPrincipal**.
  * **Filtro**: Mostrar apenas vinhos altamente recomendados (**pontuacaoEspecialista >= 95**).
  * **Ordenação**: Ordenar pela antiguidade do **anoSafra** (do mais antigo para o mais recente).
  * **Cálculo**: Exibir a **Média de Pontuação** das garrafas listadas na tela após a pesquisa.

```
