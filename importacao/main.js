// importando os arquivos exportados do arquivo anterior
const {gets, print} = require('./auxiliares');

let maior = -1;
for(let i = 0; i < 5; i++){
    const numeroSorteado = gets();
    if(maior < numeroSorteado){
        maior = numeroSorteado;
    }
}

print(maior);