function mostrarMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        let aux = "";
        for (let j = 0; j < matriz[0].length; j++) {
            aux += matriz[i][j].toString().padStart(3, ' ') + " ";
        }
        console.log(aux);
    }
}

function getPosicao(i, j, m) {
    i = i + 1;
    if (i == m.length) {
        i = 0;
    }
    j++;
    if (j == m.length) {
        j = 0;
    }

    if (m[i][j] != 0) {
        i += 1;
        if (i == m.length) {
            i = 0;
        }
        i += 1;
        if (i == m.length) {
            i = 0;
        }
        j++;
        if (j == m.length) {
            j = 0;
        }
    }
    let p = [i, j];
    return p;
}

function setPosicao(i, j, m, valor) {
    m[i][j] = valor; 
    return m;
}

function facaIsso(ordem) {
    let m = new Array(ordem);
    for (let i = 0; i < ordem; i++) {
        m[i] = new Array(ordem);
        for (let j = 0; j < ordem; j++) {
            m[i][j] = 0;
        }
    }  
    let cont = 1;
    let i = parseInt((ordem) / 2) - 1;
    let j = (ordem - 1) - 1;
    while (cont <= (ordem ** 2)) {
        let prox = getPosicao(i, j, m);
        i = prox[0];
        j = prox[1];
        if (m[i][j] == 0) {
            m = setPosicao(i, j, m, cont);
        }
        cont++;
    }
    return m;
}
console.clear();
let m = facaIsso(13);
mostrarMatriz(m);