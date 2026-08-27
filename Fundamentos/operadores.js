/*apredendo os operadores

1 -> aritiméticos 
2 -> Atribuição
3 -> sequência
4 -> comparação
5 -> condicional
6 -> lógicos


*/
//aritiméticos 
var valor1, valor2, total;

valor1 = 5;
valor2 = 2;

total = valor1 + valor2;
//incremento no valor total
total = ++valor1;

//atribuição e funciona com todos os operadores matematicos
valor1 += valor2;
//é mesma coisa que
valor1 = valor1 + valor2;

//comparação
total = (valor1 === valor2); //compara o valor e tipo.
total = (valor2 != valor1); //compara se é diferente do outro valor.

// se o sinal é >= ou <= quer dizer se maior ou igual,menor ou igual.
total = (valor1 > valor2); //compara se maior que o segundo valor.
total = (valor1 < valor2); //compara se o valor é menor que o segundo.

//condicional ou Ternário
var idade, eleitor, resultado;
idade = 18;
//adicionar uma condição para variavel
eleitor = (idade < 18) ? "Não, eleitor não obrigatorio" : "sim, eleitor obrigatorio"

//logicos
//SE TIVER ESCLAMAÇÃO "!" QUER DIZER QUE A CONDIÇÃO TEM O OPERADOR LOGICO AO CONTRARIO
//significa as duas condições precisam ser true para retorna true
//condição E condição
resultado = (idade > 60 && idade < 70);
//aqui unas das condições deve ser true para retorna true
//condição OU condição
resultado = (idade > 60 || idade < 70);


