
// contructor de objetos
//valores devem ser chamados depois dos constructor
class Carro {
    constructor(valor1, valor2, valor3) {
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    };
    //funções dentro do objeto
    buzina() {
        return this.modelo + " Buzinou: Biiiiiiiiiii"
    };
};


const uno = new Carro("fiat", "ano", 2001);
const gol = new Carro("volkswagen", "gol", 2013);
console.log(uno);
console.log(gol.buzina());
// modificando os valores do objeto
gol.ano = 2014;
console.log(gol);


