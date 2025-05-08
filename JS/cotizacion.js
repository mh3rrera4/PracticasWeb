/**Variables Globales */
const numCotizacion = document.getElementById('numCotizacion');
const porPagoInicial = document.getElementById('porPagoInicial');
const precio = document.getElementById('Precio');
const plazos = document.getElementById('idPlazos');


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


/**Metodos de Comportamiento */
const calcularPagoInicial = (pagoInicial = precio * (porPagoInicial/100)) => pagoInicial;

const calcularTotalFin = (totalFin = precio - calcularPagoInicial()) => totalFin;

const calcularPagoMensual = (pagoMensual = calcularTotalFin()/plazos) => pagoMensual;


/** Funciones finales*/
const realizarCalculos = () => {
    const pagoInicial = calcularPagoInicial();
    const totalFinanciar = calcularTotalFin();
    const pagoMensual = calcularPagoMensual();

    resPagoInicial.value = pagoInicial.toFixed(2);
    resTotalFinanciar.value = totalFinanciar.toFixed(2);
    resPagoMensual.value = pagoMensual.toFixed(2);
};


const limpiarCampos = () => {
    numCotizacion.value = "";
    descripcion.value = "";
    porPagoInicial.value = "";
    precio.value = "";
    
    for(const radioPlazo of plazos){
        plazos.checked = false;
    }

    resPagoInicial.value = "";
    resTotalFinanciar.value = "";
    resPagoMensual.value = "";
}


/**Eventos */
const btnLimpiar = document.getElementById('btnLimpiar');
const btnCalcular = document.getElementById('btnCalcular');

btnCalcular.addEventListener('click', realizarCalculos);
btnLimpiar.addEventListener('click', limpiarCampos);