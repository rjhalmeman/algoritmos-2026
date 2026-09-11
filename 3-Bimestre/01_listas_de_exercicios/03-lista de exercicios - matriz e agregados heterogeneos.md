Agregados Heterogêneos

## Tema: 🏥 Clínica Médica (Pacientes)

Contexto de uma **clínica médica** para praticar o conceito de **agregados heterogêneos** (registros/objetos) e a manipulação de **vetores de estruturas**. Cada paciente é um **agregado heterogêneo** composto por dados de diferentes tipos (**números inteiros**, **textos** e **números decimais**).

---

## Tabela de Dados: Pacientes

Abaixo está a lista contendo **15 registros** de pacientes cadastrados.

| ID | Nome | Convênio | Idade (anos) | Peso (kg) | Altura (m) |
| :---: | :--- | :--- | :---: | :---: | :---: |
| 1 | Ana Souza | Unimed | 34 | 62.5 | 1.65 |
| 2 | Bruno Lima | Bradesco | 45 | 88.0 | 1.78 |
| 3 | Carla Dias | SUS | 28 | 55.0 | 1.60 |
| 4 | Diego Rocha | Amil | 52 | 95.5 | 1.82 |
| 5 | Elisa Martins | Unimed | 19 | 50.0 | 1.58 |
| 6 | Fábio Nunes | SUS | 61 | 78.0 | 1.70 |
| 7 | Gisele Alves | Bradesco | 37 | 68.0 | 1.66 |
| 8 | Hugo Prado | Amil | 24 | 82.0 | 1.85 |
| 9 | Isabel Costa | Unimed | 48 | 70.5 | 1.63 |
| 10 | João Vilela | SUS | 55 | 90.0 | 1.75 |
| 11 | Karen Melo | Bradesco | 31 | 58.0 | 1.62 |
| 12 | Lucas Reis | Amil | 42 | 75.0 | 1.72 |
| 13 | Marina Paiva | Unimed | 29 | 60.0 | 1.68 |
| 14 | Nelson Braga | SUS | 67 | 85.0 | 1.74 |
| 15 | Olívia Ferraz | Bradesco | 22 | 53.0 | 1.60 |

---

## Lista de Exercícios

Utilize a tabela de pacientes acima para resolver os enunciados a seguir aplicando a lógica de programação:

1. **Definição da Classe:** Escreva o código da **classe `Paciente`** necessária para servir de molde para os registros da clínica. Indique os 6 atributos (`id`, `nome`, `convenio`, `idade`, `peso` e `altura`) dentro do método **construtor**.

Faça um html, com a solução de todos os exercícios. Um botão para cada exercício. Use funções para organizar o código.

2. **Inicialização do Vetor:** Escreva o código em JavaScript para declarar a variável `listaPacientes` e **popular o vetor** instanciando os 15 pacientes da tabela com o operador `new`.

3. **Listagem Simples:** Crie um algoritmo que utilize um **laço de repetição** (`for`) para percorrer a lista e exibir apenas o **nome** e a **idade** de cada paciente.

4. **Paciente Mais Velho:** Desenvolva um algoritmo para comparar o campo `idade` de todos os registros e exibir o **nome** e a **idade** do paciente **mais velho** da clínica.

5. **Paciente Mais Novo:** Escreva uma rotina que encontre e exiba o **nome** e a **idade** do paciente **mais novo** cadastrado.

6. **Paciente Mais Pesado:** Elabore uma lógica para identificar qual é o paciente com o **maior peso** e imprima todas as suas informações.

7. **Paciente Mais Leve:** Escreva um algoritmo para identificar qual paciente possui o **menor peso** da lista.

8. **Média de Idades:** Crie uma rotina que calcule e exiba a **média das idades** de todos os 15 pacientes cadastrados.

9. **Média de Pesos:** Desenvolva um algoritmo que some o peso individual dos pacientes e calcule o **peso médio** dos registros da clínica.

10. **Pacientes Acima de 50 Anos:** Escreva um algoritmo que percorra a lista e exiba o **nome** e a **idade** apenas dos pacientes que possuem **mais de 50 anos**.

11. **Filtro por Convênio (SUS):** Crie um procedimento que liste o **nome** e o **convênio** de todos os pacientes atendidos pelo **SUS**. (vai precisar de um input para ler o nome do convênio antes de fazer a pesquisa)

12. **Busca por Nome:** Implemente um algoritmo de pesquisa que procure um paciente pelo seu **nome** (ex: `"Marina Paiva"`). Se encontrar, exiba os dados do registro; caso contrário, exiba uma mensagem de alerta.

13. **Cálculo de IMC com Classificação:** Escreva um algoritmo que calcule o **IMC por paciente** (fórmula: `IMC = peso / (altura * altura)`) e exiba, além do valor, a **classificação** correspondente conforme a tabela da **Organização Mundial da Saúde (OMS)** apresentada abaixo.

    **Tabela de Classificação do IMC (OMS):**

    | IMC (kg/m²) | Classificação |
    | :---: | :--- |
    | Menor que 18,5 | **Abaixo do peso** |
    | Entre 18,5 e 24,9 | **Peso normal** |
    | Entre 25,0 e 29,9 | **Sobrepeso** |
    | Entre 30,0 e 34,9 | **Obesidade Grau I** |
    | Entre 35,0 e 39,9 | **Obesidade Grau II** |
    | Maior ou igual a 40,0 | **Obesidade Grau III (Mórbida)** |

    **Exemplo de saída esperada:**

    ```
    Paciente: Ana Souza
    IMC: 22.96
    Classificação: Peso normal
    ```

14. **Pacientes com Sobrepeso:** Crie um algoritmo que percorra a lista e exiba o **nome** e o **IMC** apenas dos pacientes com **IMC acima de 25** (indicativo de sobrepeso).

15. **Contagem por Convênio:** Desenvolva uma rotina para **contar e exibir** quantos pacientes pertencem a cada convênio (**Unimed**, **Bradesco**, **Amil** e **SUS**).

16. **Porcentagem de pacientes por convênio** Considerando a lista completa, quero saber EM PORCENTAGEM quantos são de cada convênio.

17. **Contagem por Faixa Etária:** Crie uma estrutura de decisão para **contar e exibir** quantos pacientes se encaixam em cada categoria:
    * **Jovem:** Idade menor que 30 anos
    * **Adulto:** Idade entre 30 e 59 anos
    * **Idoso:** Idade maior ou igual a 60 anos

18. **Ordenação por Idade:** Implemente um algoritmo que organize o vetor de pacientes em **ordem crescente de idade** (do mais novo ao mais velho) e exiba a lista final reorganizada. **Não é para usar o comando `sort` do JS** ou outro comando pré-definido. Use algum método de ordenação (ex: **Bubble Sort**).

19. **Ordenados por alturas:** Crie um algoritmo que liste os paciente ordenando pela altura. Do mais baixo para o mais alto.

20. **Paciente Mais Alto e Mais Baixo:** Desenvolva uma rotina que identifique e exiba o **nome**, a **altura** do paciente **mais alto** e do paciente **mais baixo**.

21. Matriz Convênio × Faixa Etária: Construa uma matriz bidimensional 4×3 onde: As linhas representam os convênios: Unimed, Bradesco, Amil, SUS. As colunas representam as faixas etárias: Jovem (<30), Adulto (30–59), Idoso (≥60). Cada célula M[i][j] deve conter a quantidade de pacientes do convênio i na faixa etária j. Ao final, exiba a matriz em formato de tabela e imprima o total geral de pacientes.

Saída esperada (exemplo):

text
              Jovem  Adulto  Idoso  | Total
Unimed          1      2       1    |   4
Bradesco        1      2       1    |   4
Amil            2      1       0    |   3
SUS             0      2       2    |   4
-----------------------------------------
Total           4      7       4    |  15

23. Matriz Convênio × Classificação de IMC: Construa uma matriz 4×6 cruzando: Linhas: Unimed, Bradesco, Amil, SUS.
Colunas: Abaixo do peso, Peso normal, Sobrepeso, Obesidade I, Obesidade II, Obesidade III. Cada célula deve conter a quantidade de pacientes daquele convênio com aquela classificação de IMC. Calcule o IMC com peso / (altura * altura) e use a tabela da OMS para classificar.

Resultado esperado
| Convênio | Abaixo do peso | Peso normal | Sobrepeso | Obesidade I | Obesidade II | Obesidade III | **Total** |
| :--- | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| **Unimed** | 0 | 3 | 1 | 0 | 0 | 0 | **4** |
| **Bradesco** | 0 | 3 | 1 | 0 | 0 | 0 | **4** |
| **Amil** | 0 | 1 | 2 | 0 | 0 | 0 | **3** |
| **SUS** | 0 | 1 | 3 | 0 | 0 | 0 | **4** |
| **Total** | **0** | **8** | **7** | **0** | **0** | **0** | **15** |