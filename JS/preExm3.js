const cmbNumero = document.getElementById("cmbNumero");
const btnCalcular = document.getElementById("btnCalcular");
const btnLimpiar = document.getElementById("btnLimpiar");
const tablaBody = document.getElementById("tablaBody");
const tablaMultiplicar = document.getElementById("tablaMultiplicar");

function agregarTablasMultiplicar(){ 
    const numero = parseInt(cmbNumero.value);
    tablaBody.innerHTML = ""; // Limpiar tabla

    let sumaFinal = 0;

    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        sumaFinal += resultado;

        const nuevaFila = document.createElement("tr");
        const celdaNumero = document.createElement("td");
        celdaNumero.textContent = numero;
        const celdaMultiplicador = document.createElement("td");
        celdaMultiplicador.textContent = i;
        const celdaResultado = document.createElement("td");
        celdaResultado.textContent = resultado;

        nuevaFila.appendChild(celdaNumero);
        nuevaFila.appendChild(celdaMultiplicador);
        nuevaFila.appendChild(celdaResultado);
        tablaBody.appendChild(nuevaFila);
    }
    const filaSuma = document.createElement("tr");
    const celdaTxtSuma = document.createElement("td");
    celdaTxtSuma.colSpan = 2;
    celdaTxtSuma.innerHTML = "<strong>Suma Total:</strong>";
    const celdaResultado = document.createElement("td");
    celdaResultado.textContent = sumaFinal;

    filaSuma.appendChild(celdaTxtSuma);
    filaSuma.appendChild(celdaResultado);
    tablaBody.appendChild(filaSuma);

}

function limpiarTablaMultiplicar(){
    tablaBody.innerHTML = ""; // Limpiar tabla
    cmbNumero.value = ""; // Limpiar combo
    cmbNumero.focus(); // Enfocar combo
}
btnCalcular.addEventListener("click", agregarTablasMultiplicar);
btnLimpiar.addEventListener("click", limpiarTablaMultiplicar);