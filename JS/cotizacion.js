/**Variables Globales */
let numCotizacion = 0;
let descripcion = "";
let porPagoInicial = 0;
let precio = 0;
let plazos = 0;

/**Metodos de Comportamiento */
const calcularPagoInicial = (pagoInicial = precio * (porPagoInicial/100)) => pagoInicial;

const calcularTotalFin = (totalFin = precio - calcularPagoInicial()) => totalFin;

const calcularPagoMensual = (pagoMensual = calcularTotalFin()/plazos) => pagoMensual;