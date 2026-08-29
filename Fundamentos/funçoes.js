/*funções é um bloco de código feito para executar uma tarefa especifica
 como se fosse "mini-progrmas" */


 //função com parâmetros
function soma(x, y) {
    return x + y;
};

function realParaDolar(real, dolar) {
    return real * dolar;
};

document.getElementById("texto4").innerHTML = soma(5, 6);

var money = realParaDolar(10, 5.15);
alert(money);

//exemplo de função com eventos
function ola() {
    alert("olá")
}

