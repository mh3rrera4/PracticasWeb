/**Variables Globales */
let numCotizacion = 0;
let descripcion = "";
let porPagoInicial = 0;
let precio = 0;
let plazos = 0;

/**Metodos de Comportamiento */
function calcularPagoInicial(){
    let pagoInicial = precio * (porPagoInicial/100);
    return pagoInicial;
}

function calcularTotalFin(){
    let totalFin = precio - calcularPagoInicial();
    return totalFin;
}

function calcularPagoMensual(){
    let pagoMensual = calcularTotalFin()/plazos;
}