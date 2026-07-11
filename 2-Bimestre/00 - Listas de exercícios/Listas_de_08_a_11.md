# Lista 08: Repetição e Strings (Básicos)
> **Nota:** Todos os exercícios devem ser desenvolvidos com HTML e JavaScript.

1. **Laço de Repetição:** Escreva um programa que leia um nome e escreva-o 10 vezes em linhas diferentes.
2. **Números Pares:** Peça um número `N` ao usuário e exiba todos os **números pares** de 1 até `N`.
3. **Somatório:** Solicite um número inteiro positivo e **soma** todos os números de 1 até esse número.
4. **Tabuada Simples:** Solicite um número inteiro e exiba a sua **tabuada** de 1 a 10.
5. **Cálculo de Crescimento:** Um criador de conteúdo ganha 5 seguidores por dia. Use um laço para calcular e mostrar quantos seguidores ele terá **após 30 dias** (iniciando em 0).
6. **Matemática Financeira:** Calcule as parcelas de um produto a prazo. Solicite: valor, taxa de juros mensal (%) e quantidade de meses. Calcule o **valor total com juros** e o **valor de cada parcela**.
7. **Sequência de Fibonacci:** Calcule a sequência até um termo informado (ex: até o 8º termo → `0, 1, 1, 2, 3, 5, 8, 13`).
8. **Funções com Laços:** Crie uma função que recebe um número e **até qual múltiplo** mostrar a sua tabuada (ex: tabuada do 7 até 15).
9. **Soma de Ímpares:** Crie uma função que recebe um número `N` e retorna a soma de **todos os ímpares** de 1 até `N`.
10. **Alternância de Padrões:** Leia um nome e um sobrenome. Escreva-os 10 vezes **alternando a ordem** em cada linha (ex: João Silva, Silva João, etc).
11. **Formatação de Nome:** Leia um nome completo e imprima em **formato inglês** criando a função `nomeEmIngles` (ex: Ayrton Senna da Silva → Silva, Ayrton Senna da).
12. **Inversão de Palavra (While):** Leia uma palavra e mostre-a invertida usando um **laço `while`**.
13. **Inversão de Palavra (For):** Leia uma palavra e mostre-a invertida usando um **laço `for`**.
14. **Palíndromo:** Verifique se uma palavra é um **palíndromo** (lê-se igual de trás para frente, ex: arara).
15. **Substituição Básica:** Leia uma frase e substitua todas as letras "a" pelo caractere **"@"**.
16. **Filtragem de Vogais:** Leia uma frase e monte outra contendo **apenas as vogais** (usando laço `while`).
17. **Filtragem de Consoantes:** Leia uma frase e monte outra contendo **apenas as consoantes** (usando laço `for`).
18. **Transformação de Caixa:** Leia uma palavra e gere uma nova com todas as **vogais em maiúsculo**.
19. **Remoção de Espaços:** Leia uma frase e remova **todos os espaços**.
20. **Limpeza de String:** Leia uma frase e remova apenas os espaços que estiverem **"sobrando"** (duplos, no início ou no fim).

---

# Lista 09: Repetição e Strings (Avançado)

1. **Contagem Composta:** Desenvolva um algoritmo que conte o **número de vogais** e o **número de palavras** em uma string.
2. **Ocorrências em Texto:** Conte o número de vezes que uma **determinada palavra** aparece em uma frase.
3. **Substituição Genérica:** Substitua todas as ocorrências de um **determinado caractere** por outro em uma string.
4. **Inversão de Caixa:** Alterne entre **letras maiúsculas e minúsculas** em uma string (ex: "A casa Caiu" → "a CASA cAIU").
5. **Contagem de Consoantes:** Desenvolva um algoritmo que conte o **número de consoantes** em uma string.
6. **Soma de Dígitos:** Solicite um número inteiro positivo e calcule a **soma de seus dígitos** (ex: 123 → 6).
7. **Filtragem por Índice:** Leia uma palavra e gere uma nova contendo apenas os caracteres das **posições (índices) pares**.
8. **Busca de Repetições:** Verifique se uma palavra possui **letras repetidas consecutivas** (ex: "carro" possui "rr").
9. **Abreviação (Acrônimo):** Leia uma frase e gere uma abreviação utilizando apenas a **primeira letra** de cada palavra (ex: Universidade Tecnológica Federal do Paraná → UTFPR).
10. **Desafio Lógico (Sistema de Delegacia):** Crie um sistema para os 3 policiais de Springfield (Clancy, Eddie e Lou) distribuindo ocorrências:
    * Tipos: Direção Perigosa, Barulho, Bebedeira, Homer.
    * Gravidade: Baixo, Médio, Alto.
    * Regra 1: "Homer" tem gravidade alta e vai sempre para o chefe Clancy.
    * Regra 2: Demais ocorrências vão para o policial com **menos casos**.
    * Saída: Resumo de chamados por policial, quantidade de tipo "Homer" e percentual de "Direção Perigosa".

---

# Lista 10: Repetição, Strings e Vetores

1. **Tradução Numérica:** Dado um valor inteiro, imprima **cada dígito por extenso** (ex: 4571 → quatro, cinco, sete, um).
2. **Remoção Condicional:** Imprima uma string do usuário **sem suas vogais**.
3. **Mapeamento de Caracteres:** Leia um vetor de caracteres e gere outro com as vogais substituídas por **`*`**.
4. **Anagramas:** Verifique se duas palavras são **anagramas** (escritas com as mesmas letras), desconsiderando números/caracteres especiais.
5. **Busca de Extremos:** Em uma frase, encontre e imprima a **maior e a menor palavra** (em quantidade de caracteres).
6. **Desduplicação de Caracteres:** Leia uma palavra e retire todos os **caracteres repetidos** dela.
7. **Limpeza de Vetor:** Crie uma função que recebe um vetor de inteiros e retorna um novo vetor **sem elementos duplicados**.
8. **Estatísticas de Conjunto:** Leia valores indefinidamente e calcule: **média aritmética**, quantidade de **positivos**, quantidade de **negativos**, e o **percentual** de positivos e negativos.
9. **Filtro Matemático:** Efetue a soma de todos os **ímpares múltiplos de três** no intervalo de 1 até 500.
10. **Estatísticas de Idade:** Leia idades indefinidamente e calcule: 
    * Pessoas maiores de 21 anos.
    * Pessoas nascidas em **anos bissextos**.
    * Soma e média de todas as idades.
11. **Ordenação Básica:** Leia um conjunto de inteiros e coloque-os em **ordem crescente**.
12. **Criptografia Simples:** Leia uma palavra (máx. 50 letras) e **some 10** ao valor ASCII de cada caractere (Dica: `String.fromCharCode(str.charCodeAt(i) + 10)`).
13. **Descriptografia:** Pegue o resultado do exercício anterior e **subtraia 10** do valor ASCII para recuperar o original.
14. **Cifra de César:** Implemente a Cifra de César onde uma letra lida servirá como **chave de rotação** (ex: chave 'B' rotaciona 2 letras no alfabeto). Ignore não-letras.
15. **Interpolação de Strings:** Receba 2 strings (`A` e `B`) e retorne uma terceira formada pelos **caracteres intercalados** (ex: "Quarta" e "Segunda" → "QSueagrutnada").
16. **Iniciais Refinadas:** Exiba as **iniciais maiúsculas** de um nome, ignorando conectores (e, do, da, dos, das, de, di, du).

---

# Lista 11: Manipulação de Vetores

1. **Contagem de Pares:** Leia um **vetor** de até 20 elementos inteiros inseridos um a um, exiba-o e mostre a quantidade de **valores pares**.
2. **Multiplicação por Índice:** Leia dois vetores de 10 posições. Realize a **multiplicação dos elementos de mesmo índice** e armazene em um terceiro vetor. Exiba o resultado.
3. **Buffer de Dados (Pares/Ímpares):** Leia 20 valores e distribua-os em **dois vetores auxiliares**: um para pares e outro para ímpares (máximo 10 em cada). Exiba-os no final.
4. **Inversão de Vetor:** Leia um vetor de até 20 inteiros e exiba-o na **ordem inversa**. Crie dois botões: um que executa com **`while`** e outro com **`for`**.
5. **Separação por Índices:** Leia um vetor de 10 inteiros. Gere dois novos vetores: um contendo os elementos de **índices ímpares** e outro com os elementos de **índices pares** do vetor original.
6. **Modificação pelo Menor Elemento:** Encontre o **menor elemento** (e seu índice) de um vetor de 10 posições. Crie um novo vetor dividindo todos os elementos do vetor original por esse menor valor.
7. **Algoritmo de Ordenação:** Leia um vetor de `N` posições e ordene-o em **ordem crescente** utilizando a lógica do **Bubble Sort** (não use `.sort()`).
8. **Geração Automática (Primos):** Identifique os 10 primeiros **números primos** maiores que 100 e armazene-os sequencialmente em um vetor de 10 posições (sem input do usuário).
9. **Fusão e Ordenação:** Leia dois vetores de 10 posições. Crie um terceiro de **20 posições unindo-os** e exiba-o em ordem crescente (usando Bubble Sort).
10. **Filtragem Primos:** Leia um vetor `K` de até 15 elementos, identifique os números primos e copie-os para um **novo vetor `P`**. Caso não haja primos, exiba uma mensagem alertando que ficou vazio.
11. **Compactação de Estrutura:** Preencha um vetor `A` de 100 posições (use a função `Math.random` para gerar números de -50 a 50). Crie um vetor `B` compactado **descartando zeros e números negativos**.
12. **Validador de Loteria Esportiva:** Tenha um **vetor gabarito fixo** de 13 respostas (valores permitidos: 1, 2 ou 3). Leia o nome, o endereço e as 13 apostas de um jogador. Calcule os **acertos** e imprima os dados do apostador. Se ele tiver 13 acertos, exiba o texto **"Ganhador"** em `<h1>`.