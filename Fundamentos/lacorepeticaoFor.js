//jeito facil e rapido para realizar tarefas repetidamente.

//contador de 1 ate 20
for (let i = 0; i <= 20; i++) {
    console.log(i)
}

//tabuada do cinco
let N = 5;
for (let M = 0; M <= 10; M++) {
    console.log(N + " X " + M + " = " + (N * M));

};

var ano = new Date().getFullYear();

//selecionando o ano
for (let i = ano; i >= 1900; i--) {
    document.getElementById("ano").innerHTML += "<option value ='" + ano + "'>" + ano + "<option>";
};