// boolean
var aberto = false
console.log(aberto)
console.log(typeof(aberto))

// number
aberto = 12
console.log(aberto)
console.log(typeof(aberto))

// undefined
var undef
console.log(undef)

// variáveis a nível escopo local
if(aberto == 12){
    let escopoLocal = 13 // escopo de escopoLocal é apenas o bloco if
    console.log(escopoLocal)
}

// variáveis constantes 
const PI = 3.1415 // valor constante Pi que não pode ser alterado
console.log(PI)

// uma boa prática de programação é declarar as variáveis no incício do bloco

var zeroPrimeiro = "0"
var zeroSegundo = 0
if(zeroPrimeiro == zeroSegundo){
    console.log("comparação por valor!")
}
if(zeroPrimeiro !== zeroSegundo){
    console.log("comparação por valor e tipo!")
}