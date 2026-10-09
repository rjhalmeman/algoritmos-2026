function mostrarCategoriasAmaralAjustada(categorias){
    let categorias = [];
    let verificacion = 0;
    for(let i = 0; i < lista.length; i++){
        for(let j = 0; j < Categorias.length; j++){
            if(lista[i].categoria == Categorias[j]){
                verificacion++;
            }
        }
        if(verificacion == 0){
            Categorias.push(lista[i].categoria);
            verificacion = 0;
        }
    }
    let listagem = "";
    let contador = 0;
    for(let k = 0; k < lista.length; k++){
        listagem = Categorias[k] + ": ";
        for(let l = 0; l < lista.length; l++){
            if(lista[l].categoria == Categorias[k]){
                contador++;
            }
        }
        listagem += contador + "<br>";
        contador = 0;
    }
    document.getElementById("resposta").innerHTML = listagem;
}