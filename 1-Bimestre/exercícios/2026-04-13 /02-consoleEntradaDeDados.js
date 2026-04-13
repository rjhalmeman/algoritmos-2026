//para executar esse código
//Instale o Node.js em seu computador (se não estiver instalado).
//Salve o código em um arquivo com a extensão .js, por exemplo, consoleTerminal.js.
//Abra o terminal ou prompt de comando e navegue até o diretório onde o arquivo está salvo.
//Execute o comando: node consoleTerminal.js ou instale o code runner e clique com o botão direito no arquivo e selecione "Run Code".


const readline = require('readline'); //o readline é um módulo do Node.js que permite ler dados 
// de uma fonte de entrada, como o teclado, e escrever dados em uma fonte de saída, como a tela 
// do console. Ele é comumente usado para criar interfaces de linha de comando interativas, 
// onde o usuário pode digitar informações e o programa pode processar essas informações e fornecer 
// feedback. O readline facilita a leitura de entradas do usuário e 
// a escrita de saídas, tornando mais fácil criar programas que interagem com o usuário por meio do 
// terminal.
//é útil para testar códigos que envolvem entrada de dados, como o prompt de usuário, sem precisar criar uma interface gráfica (HTML).

const rl = readline.createInterface({ //O método readline.createInterface() é usado para criar uma interface de leitura e 
// escrita que permite interagir com o usuário por meio do terminal. Ele recebe um objeto de configuração como argumento, 
// onde você pode especificar as fontes de entrada e saída. No exemplo fornecido, a entrada é configurada para
//  process.stdin (o teclado) e a saída é configurada para process.stdout (a tela do console). Isso permite que o programa 
// leia dados digitados pelo usuário e escreva respostas no console.

    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o valor de x: ', (x) => {
    rl.question('Digite o valor de y: ', (y) => {
        //entrada de dados é sempre string, mesmo que o usuário digite um número, então precisamos converter para número para realizar operações matemáticas.
        // Converter para número
        x = parseFloat(x);
        y = parseFloat(y);
        
        //processamento
        let soma = x + y;

        //saída
        console.log("O valor de armazenado na variável x é: " + x);
        console.log("O valor de armazenado na variável y é: " + y);
        console.log("A soma de x e y é: " + soma);        
        
        rl.close();
    });
});