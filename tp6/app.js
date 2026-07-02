let parrafo = document.getElementById("parrafo");

let btnFondo = document.getElementById("btnFondo");
let btnTexto = document.getElementById("btnTexto");
let btnColor = document.getElementById("btnColor");
let btnLetra = document.getElementById("btnLetra");
let btnTamano = document.getElementById("btnTamano");
let btnReiniciar = document.getElementById("btnReiniciar");

btnFondo.onclick = function () {
    parrafo.style.backgroundColor = "yellow";
};

btnTexto.onclick = function () {
    parrafo.textContent = "El texto fue cambiado con JavaScript";
};

btnColor.onclick = function () {
    parrafo.style.color = "red";
};

btnLetra.onclick = function () {
    parrafo.style.fontFamily = "Impact";
};

btnTamano.onclick = function () {
    parrafo.style.fontSize = "30px";
};

btnReiniciar.onclick = function () {
    parrafo.textContent = "Hola, este es mi párrafo de prueba.";
    parrafo.style.color = "black";
    parrafo.style.backgroundColor = "white";
    parrafo.style.fontFamily = "Arial";
    parrafo.style.fontSize = "20px";
};
