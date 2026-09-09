
// arrays 
//As arrays  podem ter também outros arrays ou funçõesdentro delas.
//primeiro item sempre será o zero.
const lista = [
    "arroz",
    "feijão",
    "leite",
    "suco",
];
// seráo suco pois sempre começa por zero.
let x = lista[3];

//para ver todo os itens da arrays/matriz.
console.log(lista);

//diferença de objeto e array
const pessoa = ["Pedro", "Alexandre", 30];//array
pessoa[0];

const humano = { nome: "pedro", sobrenome: "alexandre", idade: 30 }//objeto
pessoa.nome;



//pegando o ultimo valor da array
console.log(pessoa[pessoa.length - 1]);

//descobrindo se a variavel é uma array
//se for um array é vai retorna true se não vai ser false
Array.isArray(pessoa)

//Metodos de arrays/matrizes
//Metodo join
document.getElementById("texto5").innerHTML = pessoa.join(" - ");

//Metodo pop é usado para remover o ultimo item da lista
pessoa.pop();

//Metodo shift é usado para remover o primeiro item
/*quando o primeiro item é removido os itens da lista será ajustada exemplo:

                    0           1        2
//const pessoa = ["Pedro", "Alexandre", 30]
                       0        1
  const pessoa = ["Alexandre", 30]
*/
pessoa.shift();

//adicionar um item no primeiro local é usado o metodo unshift
pessoa.unshift("bonito");


//Metodo push ou usar o length
//adicionando um valor na array (dois metodos)
pessoa.push("Brasileiro");
pessoa[pessoa.length] = "Masculino";


//para remover um item sem mexe nas posições é usado o metodo delete
delete pessoa[0];// eleirá subistituir um item por underfined

//adicionand itens numa mesma posição
//o prieiro numero é a posição
//o segundonumero para quantidade que deseja remover  ele vai sobrescreve
pessoa.splice(1, 0, "homen", "forte");


//juntando matrizes
const lista1 = ["arroz", "macarrão", "carne", "leite"];
const lista2 = ["refrigerante", "suco", "maçã", "biscoito"];
//conatenando as matrizes
const lista3 = lista1.concat(lista2);

//fatiando matrizes pde colocar um segundo numero para cortade um item ate outro item especifico
const sobremesa = lista2.slice(2)

//mostrando em ordem alfabetica
lista1.sort();

//para deixar os item emordem reversa
lista2.reverse();

//deixando numeros em ordem
const numeros = [1, 100, 20, 300];

//função comparativa
numeros.sort(function (a, b) { return a - b });

//pegando o maior numero
function MaiorNumero(array) {
    return Math.max.apply(null,array)
};

//menor numero
function MenorNumero(array) {
    return Math.min.apply(null,array)
};

document.getElementById("texto5").innerHTML = MaiorNumero(numeros);

function filtragem(value,index,array) {
    return value > 20
}

//filtra valores
numeros.filter(filtragem);

