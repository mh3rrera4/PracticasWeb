const txtPrecioCompra = document.getElementById("txtPrecioCompra");
const txtPrecioVenta = document.getElementById("txtPrecioVenta");
const txtCantidad = document.getElementById("txtCantidad");
const btnCalcular = document.getElementById("btnCalcular");
const txtTotalCompra = document.getElementById("txtTotalCompra");
const txtTotalVenta = document.getElementById("txtTotalVenta");
const txtGananciaTotal = document.getElementById("txtGanancia");

/*Relleno*/
const txtNumeroProd = document.getElementById("txtNumeroProd");
const txtNombreProd = document.getElementById("txtNombreProd");

function calcularGanancia() {
    const numeroProd = txtNumeroProd.value;
    const nombreProd = txtNombreProd.value;
    const precioCompra = parseFloat(txtPrecioCompra.value);
    const precioVenta = parseFloat(txtPrecioVenta.value);
    const cantidad = parseInt(txtCantidad.value);
    if(numeroProd == "" || nombreProd === ""){
        alert("Por favor, ingrese el nombre y número del producto.");
        return;
    }
    if (isNaN(precioCompra) || isNaN(precioVenta) || isNaN(cantidad)) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    const totalCompra = precioCompra * cantidad;
    const totalVenta = precioVenta * cantidad;
    const gananciaTotal = totalVenta - totalCompra;

    txtTotalCompra.value = totalCompra.value = totalCompra.toFixed(2);
    txtTotalVenta.value = totalVenta.value = totalVenta.toFixed(2);
    txtGananciaTotal.value = gananciaTotal.value = gananciaTotal.toFixed(2);
}

btnCalcular.addEventListener("click", calcularGanancia);