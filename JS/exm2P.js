const txtNombre = document.getElementById("txtNombre");
const txtIngles = document.getElementById("txtIngles");
const txtEsp = document.getElementById("txtEsp");
const txtMatematicas = document.getElementById("txtMatematicas");
const tablaBody = document.getElementById("tablaBody");
const btnAgregar = document.getElementById("btnAgregar");

function calcularPromedio(){
    const nombre = txtNombre.value;
    const ingles = parseFloat(txtIngles.value);
    const esp = parseFloat(txtEsp.value);
    const matematicas = parseFloat(txtMatematicas.value);
    const promedio = (ingles + esp + matematicas)/3;

    if(nombre == "" || isNaN(ingles) || isNaN(esp) || isNaN(matematicas)){
        alert("Por favor, completa todos los campos correctamente.");
        return;
    }

    const nuevaFila = document.createElement("tr");
    const celdaNombre = document.createElement("td");
    celdaNombre.textContent = nombre;
    const celdaIngles = document.createElement("td");
    celdaIngles.textContent = ingles;
    const celdaEsp = document.createElement("td");
    celdaEsp.textContent = esp;
    const celdaMatematicas = document.createElement("td");
    celdaMatematicas.textContent = matematicas;
    const celdaPromedio = document.createElement("td");
    celdaPromedio.textContent = promedio.toFixed(2);

    nuevaFila.appendChild(celdaNombre);
    nuevaFila.appendChild(celdaIngles);
    nuevaFila.appendChild(celdaEsp);
    nuevaFila.appendChild(celdaMatematicas);
    nuevaFila.appendChild(celdaPromedio);
    tablaBody.appendChild(nuevaFila);

    txtNombre.value = "";
    txtIngles.value = "";
    txtEsp.value = "";
    txtMatematicas.value = "";
    txtNombre.focus();
}

btnAgregar.addEventListener("click", calcularPromedio);