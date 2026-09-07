/* Eventos são ações ativadas pela interação dos usuários
tonandos o site mais interativos.

Tipos de eventos:








onfocus -> Disparado quando o elemento recebe o fooco.válido para input
onchange -> Disparado quando existe mudança no conteúdo
onblur -> Disparado  quando o elemento perde foco
onkeydown -> Disparado quando uma tecla é pressionada
onkeypress -> Disparado quando ua tecla é pressionada e solta
onkeyup ->  Disparado quando uma tecla é solta sobre um elemento
onload ->  Disparado  quando a página terminoude ser carregada
onresize -> Disparado quando há um redimencionamento da janela


 */
//onclick -> Disparado com um click
function eventoClick() {
    document.body.style.backgroundColor = "black";
};
//ondblclick -> Disparado com dois  click
function eventodblClick() {
    document.body.style.backgroundColor = "white";
};
//onmouseover -> Disparado quando o mouse  está sobre
function viraVerde() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
};
//onmouseout -> Disparado quando o mouse é movido para fora do elemento
function viraAzul() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "Blue";
};

//onmousemove -> Dispardo quando o mouse é movido no elemento
function AdicionarTexto() {
    let p = document.getElementById("texto");
    p.append("o mouse moveu");
};

//onmousedown -> Disparado quando o click do butão foi presionado
function clicouTela() {
    alert("clicou na tela");
};

//onmouseup -> Disparado quando o clique do botão é liberado
function clicouTela2() {
    alert("clicou na tela 2");
};