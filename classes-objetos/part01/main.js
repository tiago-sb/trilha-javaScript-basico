
// definindo objetos em javaScript -> coleção dinamica de chave e valor
const jogador = {
    nome: "tiago bela",
    idade: 19,
    // atributo que recebe uma funcao como valor
    // this, assume o valor da variável em relação ao seu conceito
    descrever: function (){
        console.log(`meu nome é ${this.nome}, e tenho ${this.idade} anos`)
    }
}

// alocação dinâmica de atributo para objeto
jogador.altura = 1.71

console.log(jogador.nome + " " + jogador.idade)

//  deletando atributo do objeto
//  delete jogador.idade
//  console.log(jogador.nome + " " + jogador.idade)
console.log(jogador.altura)

jogador.descrever()

// console.log(jogador['nome'])
