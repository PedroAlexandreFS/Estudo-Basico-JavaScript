
//comando base para pegar a data
let data = new Date();
console.log(data);

//pegando o ano atual com 4 Digitos
let year = data.getFullYear();
console.log(year);

//Pegar o mes atual de 0(janeiro) ate 11(Dezembro)
let mes = data.getMonth();
console.log(mes);

//mostrando meses em escrito
const mesesDoAno = ["Janeiro", "Ferveiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let mesEscrito = mesesDoAno[data.getMonth()];
console.log(mesEscrito);

//Pegar dia do mes - 1 até 31
let diaMes = data.getDate();
console.log(diaMes);

//Pegar dia da semana
let diaSemana = data.getDay();
console.log(diaSemana);

// dia da semana em escrito
const diaDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];
let diaEscrito = diaDaSemana[data.getDay()];
console.log(diaEscrito);

// Pegar a hora - de 0 até 23
let hora = data.getHours();
console.log(hora);

// pegar minutos de 0 até 59
let minutos = data.getMinutes();
console.log(minutos);

//pegar segundos
let segundos = data.getSeconds();
console.log(segundos);

//pegar milisegundos
let milisegundos = data.getUTCMilliseconds();
console.log(milisegundos);

//pegar a data do padrão brassileiro - DIA / MES / ANO
//voce tambem pode pega separado e concatenar o dia,mes e ano
let dataBR = data.toLocaleString('pt-br');
console.log(dataBR);


// comparar Datas - MAIOR ou MENOR. EX:VENCIMENTOS
var hoje = new Date();
var vencimento = new Date(2026, 9, 1)

if (hoje > vencimento) {
    console.log("Sua conta está vencida!");
} else {
    console.log("ainda não venceu,tudo certo");
};


//diferença de tempo em dias
var dataInicial = new Date();
var dataFinal = new Date(2026, 11, 31);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));
console.log(diferencaDias);