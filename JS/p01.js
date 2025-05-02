//Tipos de Variables
const parrafo = document.getElementById('parrafo');
const btnMay = document.getElementById('btnMay');
const btnAgregar = document.getElementById('btnAgregar');
const btnMin = document.getElementById('btnMin');


// Variables globales
var col = parrafo.style.color;
var tam = parrafo.style.fontSize;
var txt = texto.value;
var min = btnMin.style.fontSize;


// Funciones
function arriba(){
    parrafo.style.color = "red";
    parrafo.style.fontSize = "30px";
}
function salir(){
    parrafo.style.color = col;
    parrafo.style.fontSize = tam;
}
function mayusculas(){
    parrafo.textContent = parrafo.textContent.toUpperCase();
}
function minusculas(){
    btnMin.textContent = btnMin.textContent.toLowerCase();
}
function agregar(){
    let txt = document.getElementById('texto').value;
    parrafo.innerText = parrafo.innerText + txt;
}

parrafo.addEventListener('mouseover',arriba);
parrafo.addEventListener('mouseout',salir);
btnMay.addEventListener('click',mayusculas);
btnMay.addEventListener('outrnnm',mayusculas);
btnAgregar.addEventListener('click',agregar);
btnMin.addEventListener('click',minusculas);
btnMin.addEventListener('outrnm',minusculas);