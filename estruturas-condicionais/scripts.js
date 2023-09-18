var jogador1 = 0
var jogador2 = 1
var placar

// aninhamento de if
if(jogador1 > 0) {
    console.log("jogador 1 marcou ponto!")
} else if(jogador2 > 0) {
    console.log("jogador 2 marcou ponto!")
} else {
    console.log("ninguem marcou pronto")
}
// if ternário
console.log(jogador1 > 0 ? "jogador 1 marcou ponto!" : jogador2 > 0 ? "jogador 2 marcou ponto!" : "ninguem marcou pronto")

// if(jogador1 > 0 && jogador2 == 0){
//     console.log("jogador 1 marcou gol!!")
//     placar = jogador1 > jogador2
// } else if(jogador2 > 0 && jogador1 == 0){
//     console.log("jogador 2 marcou gol!!")   
//     placar = jogador2 > jogador1
// } else {
//     console.log("ninguém marcou ponto!")
// }
var array = ["tiago", "bela", 19]
for(let i in array){
    console.log(i)
}
for(let i of array){
    console.log(i)
}