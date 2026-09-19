//como usar

switch (expressão) {
    case a:
        //o que acontece
    case b:
        //o que acontece
    case c:
        //o que acontece
        break;
    default:
        //ultima opção, caso todos não acontecer
}

//exemplo pratico
function verificarCor() {
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase()

    switch (cor) {
        case "azul":
            document.body.style.backgroundColor = "blue";
            break;
        case "vermelho":
            document.body.style.backgroundColor = "red";
            break;
        case "verde":
            document.body.style.backgroundColor = "green";
            break;
        default:
            document.getElementById("texto7").innerHTML = " cor indisponivel " + cor;
            document.body.style.backgroundColor = "white";
    };
}
