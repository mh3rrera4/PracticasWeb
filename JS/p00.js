const valor = document.getElementById('valor');
const btnIncrementar = document.getElementById('incrementar');
const btnDisminuir = document.getElementById('decrementar');
const btnReiniciar = document.getElementById('reiniciar');

let contador = 0;

function incrementar() {
    contador++;
    valor.textContent = contador;
}
function decrementar() {
    contador--;
    valor.textContent = contador;
}
function iniciar() {
    contador = 0;
    valor.textContent = contador;
}

btnIncrementar.addEventListener('click', incrementar);
btnDisminuir.addEventListener('click', decrementar);
btnReiniciar.addEventListener('click', iniciar);