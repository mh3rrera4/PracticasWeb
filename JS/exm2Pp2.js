const txtNombre = document.getElementById("txtNombre");
const txtAncho = document.getElementById("txtAncho");
const txtLargo = document.getElementById("txtLargo");
const btnCalcular = document.getElementById("btnCalcular");
const tablaBody = document.getElementById("tablaBody");

function calcular(){
    const nombre = txtNombre.value;
    const ancho = parseFloat(txtAncho.value);
    const largo = parseFloat(txtLargo.value);

    const perimetro = 2 * (ancho + largo);
    const area = ancho * largo;

    if(nombre == "" || isNaN(ancho) || isNaN(largo)){
        alert("Por favor, completa todos los campos correctamente.");
        return;
    }
    
    const nuevaFila = document.createElement("tr");
    const celdaNombre = document.createElement("td");
    celdaNombre.textContent = nombre;
    const celdaAncho = document.createElement("td");
    celdaAncho.textContent = ancho;
    const celdaLargo = document.createElement("td");
    celdaLargo.textContent = largo;
    const celdaPerimetro = document.createElement("td");
    celdaPerimetro.textContent = perimetro;
    const celdaArea = document.createElement("td");
    celdaArea.textContent = area;

    nuevaFila.appendChild(celdaNombre);
    nuevaFila.appendChild(celdaAncho);
    nuevaFila.appendChild(celdaLargo);
    nuevaFila.appendChild(celdaPerimetro);
    nuevaFila.appendChild(celdaArea);
   tablaBody.appendChild(nuevaFila);
    
    txtNombre.value = "";
    txtAncho.value = "";
    txtLargo.value = "";
    txtNombre.focus();
}
btnCalcular.addEventListener("click", calcular);