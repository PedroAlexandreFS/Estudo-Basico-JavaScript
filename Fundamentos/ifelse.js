// if else
//usados na maioria das vezes como validação do input


var luz = "ligado"

if (luz = "ligado") {
    alert("luz")
} else {
    alert("Escuro")
};

//pegando a hora atual
var hora = new Date().getHours();

if (hora > 5 && hora < 12) {
    alert("bom dia")
} else if (hora < 18 && hora > 12) {
    alert("boa tarde")
} else {
    alert("boa noite")
};

//usando com campo input
function verificar() {
    let nome = document.getElementById("nome").value;

    if (nome == "" || nome == null) {
        let p = document.getElementById("texto6");
        p.innerHTML = "O campo não pode ser vazio";
        p.style.color = "red";
    } else {
        let p = document.getElementById("texto6");
        p.innerHTML = "Tudo certo";
        p.style.color = "green";
    };
};