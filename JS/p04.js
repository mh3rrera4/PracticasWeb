const txtpeso = document.getElementById("peso");
const txtaltura = document.getElementById("altura");
const resultado = document.getElementById("resultado");
const btnCalcular = document.getElementById("btnCalcular");

function calcularIMC() {
    let peso = parseFloat(txtpeso.value);
    let altura = parseFloat(txtaltura.value);

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        resultado.textContent = "Por favor, ingrese valores válidos.";
        return;
    }

    if(peso <= 0 || altura <= 0){
        resultado.textContent = "Peso y altura deben de ser mayores a 0.";
        return;
    }

    const imc = peso / (altura * altura);
    let categoria = "";
    if (imc < 18.5) {
        categoria = "Bajo peso";
    } else if (imc < 24.9) {
        categoria = "Peso normal";
    } else if (imc < 29.9) {
        categoria = "Sobrepeso";
    } else {
        categoria = "Obesidad";
    }
    resultado.innerHTML = `Tu IMC es ${imc.toFixed(2)} y estás en la categoría: ${categoria}`;
    resultado.style.color = "black";
}

btnCalcular.addEventListener("click", calcularIMC);