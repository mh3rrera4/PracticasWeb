//Obtención de obj
const txtId = document.getElementById('id');
const txtNombre = document.getElementById('nombre');
const txtEscuela = document.getElementById('escuela');
const btnAgregar = document.getElementById('btnAgregar');
const tabla = document.getElementById('tabla')
const tablaBody = document.getElementById('tablaBody')

function agregarAlumno(){
    const id = txtId.value;
    const nombre = txtNombre.value;
    const escuela = txtEscuela.value;

    if(!id || !nombre || !escuela){
        alert('Por favor, complete todos los campos');
        return;
    }

    const nuevaFila = document.createElement('tr'); /**Nueva Fila */

    const celdaId = document.createElement('td');/*Celdas para ID, Nombre y Escuela*/
    celdaId.textContent = id;
    const celdaNombre = document.createElement('td');
    celdaNombre.textContent = nombre;
    const celdaEscuela = document.createElement('td');
    celdaEscuela.textContent = escuela;

    /**Añadir celdas a la fila */
    nuevaFila.appendChild(celdaId);
    nuevaFila.appendChild(celdaNombre);
    nuevaFila.appendChild(celdaEscuela);
    
    /**Añadir fila al cuerpo d la tabla */
    tablaBody.appendChild(nuevaFila);

    txtId.value = '';   /**Limpiar despues de agregar campos */
    txtNombre.value = '';
    txtEscuela.value = '';
    txtId.focus();
}

btnAgregar.addEventListener('click', agregarAlumno); /**Evento click */