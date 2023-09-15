var vetor = ["tiago", 19, 1.78, 'M'] // declaração do array
for(let i = 0; i < vetor.length; i++){
    console.log(vetor[i])
}
vetor.forEach(function(item){console.log(item)})
let vetor2 = [1, 2, 3, 4, 5]
vetor2.pop()
vetor2.forEach(function(item){console.log(item)})

var xicara = {
    cor: 'branca',
    cheia: true,
    tamanho: 'p',
}
console.log(xicara)
console.log(xicara.cheia)