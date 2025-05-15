const txtMatricula = document.getElementById("txtMatricula");
const txtNombre = document.getElementById("txtNombre");
const txtDireccion = document.getElementById("txtDomicilio");
const slctEspecialidad = document.getElementById("especialidad");
const slctSexo = document.getElementById("sexo");

const btnBuscar = document.getElementById("btnBuscar");
const btnAgregar = document.getElementById("btnAgregar");
const btnListar = document.getElementById("btnListar");
const tablaBody = document.getElementById("tablaBody");

function agregarDatos(){
    const matricula = txtMatricula.value;
    const nombre = txtNombre.value;
    const direccion = txtDireccion.value;
    const especialidad = slctEspecialidad.value;
    const sexo = slctSexo.value;

    if (matricula === "" || nombre === "" || direccion === "" || especialidad === "" || sexo === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    const nuevaFila = document.createElement("tr");
    const celdaMatricula = document.createElement("td");
    celdaMatricula.textContent = matricula;
    const celdaNombre = document.createElement("td");
    celdaNombre.textContent = nombre;
    const celdaDireccion = document.createElement("td");
    celdaDireccion.textContent = direccion;
    const celdaEspecialidad = document.createElement("td");
    celdaEspecialidad.textContent = especialidad;
    const celdaSexo = document.createElement("td");
    celdaSexo.textContent = sexo;

    nuevaFila.appendChild(celdaMatricula);
    nuevaFila.appendChild(celdaNombre);
    nuevaFila.appendChild(celdaDireccion);
    nuevaFila.appendChild(celdaEspecialidad);
    nuevaFila.appendChild(celdaSexo);
    tablaBody.appendChild(nuevaFila);

    txtMatricula.value = "";
    txtNombre.value = "";
    txtDireccion.value = "";
    slctEspecialidad.value = "";
    slctSexo.value = "";
    txtMatricula.focus();
    
}
btnAgregar.addEventListener("click", agregarDatos);

var alumnos = [
    {
        matricula: "23050632",
        nombre: "Isaac Morales",
        domicilio: "Av. Malecon de los Pobres 30",
        especialidad: "3",
        sexo: "1"
    },
    {
        matricula: "23050633",
        nombre: "Valentina Zidan",
        domicilio: "Col. La Paz 12",
        especialidad: "2",
        sexo: "2"
    },
    {
        matricula: "23050634",
        nombre: "Luis Morales",
        domicilio: "Av. Santa Fe 45",
        especialidad: "4",
        sexo: "1"
    }
]