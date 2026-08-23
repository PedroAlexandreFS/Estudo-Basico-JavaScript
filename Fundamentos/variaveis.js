/* No javaScript temos 3 tipos de variaveis são elas:
-> var
-> let
-> const
*/

//DECLARAÇÃO DE VARIAVEIS
var copo = "agua";
document.getElementById("texto2").innerHTML = copo;

//ATRIBUIÇÃO DOS VALORES
var a, b, c;
a = 1;
b = 3;
c = 6;

alert(c);

//EXEMPLO 01
var nome, sobrenome, nomeCompleto, total;

nome = "Pedro";
sobrenome = "Alexandre"
idade = 13;
nomeCompleto = nome + " " + sobrenome;
total = idade + 10;


document.getElementById("texto3").innerHTML = nomeCompleto + " " + total;

/*DIFERENÇA DAS VARIAVEIS
var ele pode ser mudado dentro ou fora do escopo
EXEMPLO 2:
*/

var x = 8; //aqui é 8

{
    //dentro do bloco
    var x = 2; // aqui é dois
}

//aqui fora depois do escopo ainda vai continuar com valor dois continuando o valor do escopo
console.log(x);

//EXEMPLO 3 USANDO LET
let y = 3 //aqui é 3

{
    //o valor do bloco fica no bloco
    let y = 4 //aqui é 4
}

//mas aqui fora ele vai ser o valor de fora do escopo ou seja 3

//EXEMPLO 4 CONST
const z = 5
//ele nunca muda uma em nenhum lugar como nome já diz ele é constante