function gerarMatrizPell(totalTermos) {
  const k = Math.sqrt(totalTermos);  
  if (!Number.isInteger(k)) {
    console.log("O número de termos deve possuir uma raiz quadrada exata (ex: 4, 9, 16, 25).");
    return;
  }
  let matriz = [];
  let anterior = 0; 
  let atual = 1;    
  let termo = 0;
  let valor=0;
  let proximo = 0;
  for (let i = 0; i < k; i++) {
    let linha = [];    
    for (let j = 0; j < k; j++) {
      if (termo === 0) {
        valor = 0;
      } else if (termo === 1) {
        valor = 1;
      } else {  
        proximo = 2 * atual + anterior;
        anterior = atual;
        atual = proximo;
        valor = atual;
      }
      linha.push(valor);
      termo++;
    }
    matriz.push(linha);
  }
  return matriz;
}

const resposta = gerarMatrizPell(9);
console.log(resposta);