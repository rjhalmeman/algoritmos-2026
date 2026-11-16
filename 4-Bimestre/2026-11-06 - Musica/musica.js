class Musica {
    constructor(id_musica, titulo, artista, duracaoemsegundos,genero, posicaoNaLista) {
        this.id_musica = id_musica;
        this.titulo = titulo;
        this.artista = artista;
        this.duracaoemsegundos = duracaoemsegundos;
        this.genero = genero;
        this.posicaoNaLista = posicaoNaLista; //atributo para facilitar a alteração e exclusão 
    }
}

### 05) Música
* **Atributos e Tipos**:
  * `int` **idMusica** (Identificador único da faixa)
  * `string` **titulo** (Título da composição)
  * `string` **artista** (Nome do cantor ou banda)
  * `int` **duracaoEmSegundos** (Tempo de execução em segundos)
  * `string` **genero** (Gênero musical principal)