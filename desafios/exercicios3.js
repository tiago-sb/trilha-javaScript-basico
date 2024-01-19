const {gets, print} = require('./funcoes-auxiliares-ex3');

let salarioBruto = gets();
let salarioLiquido;
if(salarioBruto > 2500){
    salarioLiquido = (salarioBruto * 0.85) + 250;
} else if(salarioBruto >= 1100 && salarioBruto < 2500){
    salarioLiquido = (salarioBruto * 0.9) + 250;
} else if(salarioBruto >= 0 && salarioBruto < 1100){
    salarioLiquido = (salarioBruto * 0.95) + 250;
} else {
    print('valor inválido');
}
print(salarioLiquido);