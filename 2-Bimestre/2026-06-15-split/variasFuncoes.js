

function issoNaoFunciona(palavra) {
    palavra[0] = palavra[0].toUpperCase();
    return palavra;
}

function maneiraCorretaDeModificarStrings(palavra) {
    let aux = palavra.split(''); //converte a string em um vetor de caracteres
    aux[0] = aux[0].toUpperCase();
    return aux.join(''); //converte o vetor de caracteres de volta para string
}

function contarPalavras(frase) {
    const palavras = frase.split(' ');
    return palavras.length;
}

function nomeIngles(nome){
    let aux =nome.split(" ");
    console.log(aux);
    let restoDoNome = "";
    let sobrenome = aux[aux.length-1];
    for (let i = 0; i < aux.length-1; i++) {
        restoDoNome += aux[i]+ " ";        
    }
    return sobrenome+", "+restoDoNome;
}

function vogaisMaiusculas(frase){
    let vf = frase.split(""); 
    for(let i=0;i<vf.length-1;i++){
        if(vf[i]==='a'|| vf[i]==='e'|| vf[i]==='i'|| vf[i]==='o'|| vf[i]==='u'){
            vf[i] = vf[i].toUpperCase();        
        }
    }
    let resp = vf.join("");
    return resp;
}


console.log(vogaisMaiusculas("Maria Julia Oliveira Santos"));



//console.log(contarPalavras("a copa do mundo atrapalha a vida do professor"));
//console.log(issoNaoFunciona("banana"));
//console.log(maneiraCorretaDeModificarStrings("banana"));