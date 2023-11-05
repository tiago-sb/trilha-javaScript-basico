class Pessoa {
    // atributos
    nome;
    idade;
    anoNascimento;
    // funções
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2023 - idade;
    }

    descreverPessoa() {
        return `nome da pessoa ${this.nome}, idade ${this.idade}, ano de nascimento ${this.anoNascimento}`;
    }
}
function compararPessoas(pes1, pes2){
    if(pes1.idade == undefined || pes2.idade == undefined){
        return `dados insatisfatíveis!`;
    } else if(pes1.idade > pes2.idade){
        const diferenca = pes1.idade - pes2.idade;
        return `${pes1.nome} é mais velho(a) que ${pes2.nome} em ${diferenca} anos.`;
    } else if(pes2.idade > pes1.idade){
        const diferenca = pes2.idade - pes1.idade;
        return `${pes2.nome} é mais velho(a) que ${pes1.nome} em ${diferenca} ano(s).`;
    } else {
        return `possuem a mesma idade!`;
    }
}

const primeiraPessoa = new Pessoa("tiago bela", 19);
const segundaPessoa = new Pessoa("railana bailch", 22);

console.log(primeiraPessoa.descreverPessoa())
console.log(segundaPessoa.descreverPessoa())

console.log(compararPessoas(primeiraPessoa, segundaPessoa))