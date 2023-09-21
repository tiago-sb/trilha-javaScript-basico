function calculadora(){
    alert("bem-vindo(a) a calculadora")
    let primeiroNumero = Number(prompt("escolha um número: "))
    const operacao = prompt("escolha uma operação:\n soma = +\nsubtração = -\nmultiplicação = *\ndivisão real = /\ndivisão inteira = %\npotenciação = ^")
    let segundoNumero = Number(prompt("escolha outro número: "))
    if(!primeiroNumero || !segundoNumero){
        alert("Erro! parêmetros inválidos")
        calculadora()
    } else {
        switch(operacao){
            case '+':
                soma()
                break
            case '-':
                subtracao()
                break
            case '*':
                multiplicacao()
                break
            case '/':
                divisao()
                break
            case '%':
                divisaoInteira()
                break
            case '^':
                potenciacao()
                break
            default:
                window.alert("operacao invalida!")
                calculadora()
        }
    }
    function soma(){
        let resultado = (primeiroNumero + segundoNumero)
        alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
        novaOperacao()
    }
    function subtracao(){
        let resultado = (primeiroNumero - segundoNumero)
        alert(`${primeiroNumero} - ${segundoNumero} = ${resultado}`)
        novaOperacao()
    }
    function multiplicacao(){
        let resultado = (primeiroNumero * segundoNumero)
        alert(`${primeiroNumero} * ${segundoNumero} = ${resultado}`)
        novaOperacao()
    }
    function divisao(){
        let resultado = (primeiroNumero / segundoNumero)
        alert(`${primeiroNumero} / ${segundoNumero} = ${resultado}`)
        novaOperacao()
    }
    function divisaoInteira(){
        let resultado = (primeiroNumero % segundoNumero)
        alert(`${primeiroNumero} % ${segundoNumero} = ${resultado}`)
        novaOperacao()
    }
    function potenciacao(){
        let resultado = (primeiroNumero ** segundoNumero)
        alert(`${primeiroNumero} ^ ${segundoNumero} = ${resultado}`)
        novaOperacao()
    }
    function novaOperacao(){
        let opcao = Number(prompt("deseja fazer outra operação?\n1 - Sim\n2 - Não"))
        if(opcao == 1){
            calculadora()
        } else if(opcao == 2) {
            alert("até mais!")
        } else {
            alert("digite uma operação válida!")
            novaOperacao()
        }
    }
}
calculadora()