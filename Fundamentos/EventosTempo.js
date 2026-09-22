/* setTimeout(function, tempo em milisegundos)
-> Realizar uma função, depois de esperar um número especifico em milissegundos

setInterval(function,  milisegundos)
->  É o mesmo que setTimeout, mas repete o trabalho continuamente.



*/
//ativa a funçãouma vez quando chegar no tempo escolhido
let tempo;
/*
function AtivaContagem() {
    document.getElementById('tempo').innerHTML = "Começou a contar";
    tempo = setTimeout(function () {
        document.getElementById('tempo').innerHTML = "Começou o setTimeout";
    }, 5000);
};

function ParaContagem() {
    clearTimeout(tempo);
    document.getElementById('tempo').innerHTML = "parou a contagem";
};
*/
function AtivaContagem() {
    tempo = setInterval(function () {
        var cronometro = document.getElementById('tempo');
        var soma = parseInt(cronometro.innerHTML) + 1;
        cronometro.innerHTML = soma
    }, 1000);

};
function ParaContagem() {
    clearInterval(tempo);
    document.getElementById('tempo').innerHTML = "parou a contagem";
};