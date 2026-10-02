/* JSON siginifica Javascript object Notation que traduzido pro português fica algo 
como notação de objeto JavaScript.

De forma simples JSON é basicamente uma forma de converter um objeto em texto
e o contrário também, um texto em um objeto

é usado principalmente para transmitirdados entre sistemas de forma simples.

Para trabalhar com json no JavaScript usamos dois métodos:

JSON.parse() -> Converte texto no padrão Json em objetos.
JSON.stringify() -> Converte objeto em texto padrão em json.

*/
// exmplo 1
/*const carro = {
    marca:  "Fiat",
    modelo: "Uno",
    ano:     2001,
    motor:    [1.6, 1.4, 1.0]
};

let texto = JSON.stringify(carro);

document.getElementById("area").innerHTML = texto;

let objecto = JSON.parse(carro);
console.log(object.motor[2]);
*/

//exemplo pratico usando viacep
const ajax = new XMLHttpRequest();
ajax.open('GET', 'https://viacep.com.br/ws/01001000/json/');
ajax.send();

ajax.onload = function () {
    document.getElementById('area').innerHTML = this.responseText;
    let obj = JSON.parse(this.responseText);
    console.log(obj.ddd);
};