class Carro{
    marca;
    corDoCarro;
    gastoCombustivel;

    constructor(marca, corDoCarro, gastoCombustivel){
        this.marca = marca;
        this.corDoCarro = corDoCarro;
        this.gastoCombustivel = gastoCombustivel;
    }

    calcularGasto(precoCombustivel, distanciaPercorrida){
        return this.gastoCombustivel * precoCombustivel * distanciaPercorrida;
    }

}

const Uno = new Carro("fiat","cinza", 1/12);
console.log(Uno);
console.log(Uno.calcularGasto(5.2, 45));

const Palio = new Carro("fiat","vermelho", 1/10);
console.log(Palio);
console.log(Palio .calcularGasto(5.2, 45));