/* objetos são variaveis com varios valores

EX:  const pedro= {nom: pedro, idade:23, genero:masculino}

 Os valores  são chamados de  propriedades.

 eles podem ter método(função)
 */

const humano = {
    nome: "Pedro",
    idade: 23,
    genero: "homen",
    falar: function () { alert("Olá") },
    homen: function () {
        return "O nome é " + this.nome + "e a idade:" + this.idade + "Anos"
    }
};
console.log(humano.homen);
