/**Variables Globales */
const numCotizacion = document.getElementById('numCotizacion');
const porPagoInicial = document.getElementById('porPagoInicial');
const precio = document.getElementById('Precio');
const plazo12 = document.getElementById('plazos12');
const plazo24 = document.getElementById('plazos24');
const plazo36 = document.getElementById('plazos36');
const plazo48 = document.getElementById('plazos48');
const plazo60 = document.getElementById('plazos60');


/**Resultados */
const resPagoInicial = document.getElementById('PagoInicial');
const resTotalFinanciar = document.getElementById('totalFinanciar');
const resPagoMensual = document.getElementById('pagoMensual');

const obtenerPlazo = () =>{
    for(const radioPlazo of plazos){
        if(radioPlazo.checked){
            return Number(radioPlazo.value);
        }
    }
    return 0;
};


/**Funciones de Comportamiento */
const calcularPagoInicial = (pagoInicial = precio.value * (porPagoInicial.value/100)) => pagoInicial;

const calcularTotalFin = (totalFin = precio.value - calcularPagoInicial()) => totalFin;

const calcularPagoMensual = (pagoMensual) =>{
    let plazo;
    switch(true){
        case plazo12.checked:
            plazo = 12;
            break;
        case plazo24.checked:
            plazo = 24;
            break;
        case plazo36.checked:
            plazo = 36;
            break;
        case plazo48.checked:
            plazo = 48;
            break;
        case plazo60.checked:
            plazo = 60;
            break;
        default:
            plazo = 0;
    }
    pagoMensual = calcularTotalFin() / plazo;
    return pagoMensual;
};


/** Funciones finales*/
const realizarCalculos = () => {
    const pagoInicial = calcularPagoInicial();
    const totalFinanciar = calcularTotalFin();
    const pagoMensual = calcularPagoMensual();

    alert(pagoInicial);
    alert(totalFinanciar);
    alert(pagoMensual);

    resPagoInicial.value = pagoInicial.toFixed(2);
    resTotalFinanciar.value = totalFinanciar.toFixed(2);
    resPagoMensual.value = pagoMensual.toFixed(2);
};


const limpiarCampos = () => {
    numCotizacion.value = "";
    descripcion.value = "";
    porPagoInicial.value = "";
    precio.value = "";
    
    plazo12.checked = false;
    plazo24.checked = false;
    plazo36.checked = false;
    plazo48.checked = false;
    plazo60.checked = false;

    resPagoInicial.value = "";
    resTotalFinanciar.value = "";
    resPagoMensual.value = "";
}


/**Eventos */
const btnLimpiar = document.getElementById('btnLimpiar');
const btnCalcular = document.getElementById('btnCalcular');

btnCalcular.addEventListener('click', realizarCalculos);
btnLimpiar.addEventListener('click', limpiarCampos);