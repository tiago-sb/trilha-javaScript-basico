
const numeros = [5, 3, 4, 1, 10, 8];
let i = 0;
function gets(){
    let numeroAtual = numeros[i];
    i++;
    return numeroAtual;
}

function print(texto){
    console.log(texto);
}

module.exports = {
    gets: gets, 
    print: print
};