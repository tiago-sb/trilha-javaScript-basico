const {gets, print} = require('./funcoes-auxiliares-ex2'); 

let maior = null;
let menor = null;
for(let i = 0; i < 6; i++){
    const numeroAtual = gets();
    if(maior < numeroAtual || maior == null){
        maior = numeroAtual;
    }
    if(menor > numeroAtual || menor == null){
        menor = numeroAtual;
    }
}
print(`maior número par: ${maior}`);
print(`menor número impar: ${menor}`);