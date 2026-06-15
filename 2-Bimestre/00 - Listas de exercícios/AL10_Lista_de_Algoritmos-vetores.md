# AL10 - Algoritmos - Lista de Exercícios 10 - TIII - Repetição, strings e vetores

## Nível fácil

01) Escreva um programa que dado um valor numérico digitado pelo usuário (armazenado em uma variável inteira), imprima cada um dos seus dígitos por extenso. Exemplo: 4571 Resultado: quatro, cinco, sete, um.

02) Faça um programa que receba do usuário uma string. O programa imprime a string sem suas vogais (retire as vogais e imprima).

03) Faça um programa que leia um vetor de caracteres, gere e imprima um outro vetor onde as vogais, do primeiro vetor, sejam substituídas pelo caractere ‘*’.

04) Desenvolva um algoritmo que leia duas palavras e verifique se uma palavra é anagrama da outra, ou seja, se as duas palavras podem ser escritas com as mesmas letras. Desconsidere números e caracteres especiais.

05) Desenvolva um algoritmo que leia uma frase e encontre a maior e a menor palavra, considerando o número de caracteres, nessa frase. Imprima as palavras encontradas.

06) Desenvolva um algoritmo que leia uma palavra e retire todos os caracteres repetidos da palavra.

07) Crie uma função que recebe um vetor de números inteiros e retorna um novo vetor sem elementos duplicados. Faça o programa que possibilite o uso da função.

08) Escrever um algoritmo que leia um número não determinado de valores e calcule a média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores negativos e o percentual de valores negativos e positivos.

09) Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de três e que se encontram no conjunto dos números de 1 até 500.

10) Escreva um programa que conta o número de vogais em uma string.

11) Crie um programa que recebe uma string do usuário e a imprime invertida.

12) Faça um algoritmo que permita ao usuário informar a idade de quantas pessoas ele desejar. Após isso o algoritmo deve:
    1) contar quantas pessoas tem mais de 21 anos 
    2) contar quantas pessoas nasceram em anos bissextos 
    3) somar todas as idades 
    4) calcular a média das idades

13) Escrever um algoritmo que leia um número não determinado de valores e calcule a média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores negativos e o percentual de valores negativos e positivos.



## Nível moderado

14) Faça um algoritmo e o respectivo programa em JS para ler um conjunto de números inteiros e colocá-los em ordem crescente.

15) Faça um algoritmo e o respectivo programa em JS que leia uma palavra (máximo de 50 letras) e some 10 no valor ASCII de cada caractere da palavra. Imprima a string resultante. (Criptografia)

16) Faça um algoritmo e o respectivo programa em JS que leia a string resultante do exercício 09 e subtraia 10 no valor ASCII de cada caractere da palavra. (Descriptografia)

17) Desenvolva um algoritmo capaz de fazer a “criptografia” (codificação de dados visando a privacidade de acesso às informações) de uma palavra. Essa criptografia será feita através da codificação dos dados através de um processo de substituição de letras.

Essa codificação é chamada Cifra de César. Uma letra deve ser lida e utilizada como chave. A chave representa o número de rotações no alfabeto que deve ser feito antes de encontrar a nova letra após a criptografia. A letra ‘A’ representa uma rotação de uma letra para a esquerda, ‘B’ uma rotação de duas letras e assim sucessivamente. Faça isso para todas as letras das palavras, ignore caracteres que não sejam letras. Lembre-se que ‘z’ + 1 é igual a ‘a’.

Exemplo: 
Entrada: D 
Claudio 
Saída: Gpeyhms

Dicas: 
Em JS, let str = "Hello"; 
let charCode = str.charCodeAt(1); // Obtém o código ASCII do segundo caractere 
console.log(charCode); // Exibe 101, que é o código ASCII de 'e' 
charCode++; // vai para a letra seguinte 
console.log(charCode); 
let char = String.fromCharCode(charCode); 
console.log(char); // Exibe 'f' 
Somar 1 ao código de uma letra, implica em transformar esta no caractere seguinte.

Pré-requisitos: 
https://pt.wikipedia.org/wiki/ASCII 
https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar

18) Escreva um algoritmo que receba 2 strings (A e B) e retorne uma terceira string (C) formada pelos caracteres de A e B intercalados. Ex.: Se A='Quarta' e B='Segunda', a resposta deve ser 'QSueagrutnada'.

19) Escreva um programa que, a partir de um nome informado pelo usuário, exiba suas iniciais. As iniciais são formadas pela primeira letra de cada nome, sendo que todas deverão aparecer em maiúsculas na saída do programa. Note que os conectores e, do, da, dos, das, de, di, du não são considerados nomes e, portanto, não devem ser considerados para a obtenção das iniciais. As iniciais devem ser impressas em maiúsculas, ainda que o nome seja entrado todo em minúsculas.

Exemplos: 
Maria das Graças Pimenta => MGP 
João Carlos dos Santos => JCS 
José da Silva => JS 
Pedro Pereira Teixeira => PPT

