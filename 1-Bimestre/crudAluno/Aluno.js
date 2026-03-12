class Aluno {
    constructor(codigo, nome, altura, data_nascimento, posicaoNaLista) {
        this.codigo = codigo;
        this.nome = nome;
        this.altura = altura;
        this.data_nascimento = data_nascimento;


        this.posicaoNaLista = posicaoNaLista; //atributo para facilitar a alteração e exclusão 
    }
}
