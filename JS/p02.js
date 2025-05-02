/*Declaración de objetos y variables */
const operaciones = document.getElementById('operaciones');
const resultado = document.getElementById('resultado');
const txtNum1 = document.getElementById('txtNum1');
const lblOperador = document.getElementById('lblOperador');
const txtNum2 = document.getElementById('txtNum2');
const btnCalcular = document.getElementById('btnCalcular');


/*Eventos*/
function cambiarOperador(){
    let opcion = operaciones.value;
    
    switch(Number(opcion)){
        case 1: lblOperador.textContent="+"; break
        case 2: lblOperador.textContent="-"; break
        case 3: lblOperador.textContent="*"; break
        case 4: lblOperador.textContent="/"; break
    }
}
operaciones.addEventListener('change',cambiarOperador)

function realizarOperacion(){
    let x = Number(txtNum1.ariaValueNow);
    let y = Number(txtNum2.value);
    let res = 0;

    let opcion = operaciones.value;

    switch (Number(opcion)) {
        case 1: res = x + y;
            break;
        case 2: res = x - y;
            break;
        case 3: res = x * y;
            break;
        case 4: res = x / y;
            break;
        default:
            break;
    }
    resultado.textContent = res;
    operaciones.addEventListener('change',cambiarOperador)
    btnCalcular.addEventListener('click',realizarOperacion)
}

    
