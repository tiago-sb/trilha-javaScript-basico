var vetor = ["tiago", 19, 1.71, 'M'] // declaração do array
for(let i = 0; i < vetor.length; i++){
    console.log(vetor[i])
}
vetor.pop()
vetor.forEach(function(item){console.log(item)})

let vetor2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let somatorio = 0
vetor2.forEach(function(item){
    somatorio += item
})
console.log(somatorio)

var xicara = {
    cor: 'branca',
    cheia: true,
    tamanho: 'p',
}
console.log(xicara)
console.log(xicara.cheia)

const alunos = ["tiago", "julia", "marcos", "felipe junior", "marlos"]
alunos.push("thiago")
alunos.forEach(function(alunos, numero){console.log(`aluno ${numero + 1}: ${alunos}`)})
