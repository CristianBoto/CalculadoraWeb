
function sumar() { //SUMAR
    let num1 = document.getElementById("Number1");//Entrada
    let num2 = document.getElementById("Number2");//Entrada
    let resultadoSuma = document.getElementById("salidaCalculadora"); //por donde tiene que mostrarse.

    // Convertir los valores a números antes de sumarlos
    let suma = parseFloat(num1.value) + parseFloat(num2.value); //de nuevo a número por más que pusimos type="num".

    // Mostrar el resultado en el párrafo de salida
    resultadoSuma.textContent = suma;

    return suma;
}

function restar() { //RESTAR
    let num1 = document.getElementById("Number1");//Entrada
    let num2 = document.getElementById("Number2");//Entrada
    let resultadoResta = document.getElementById("salidaCalculadora"); //por donde tiene que mostrarse.

    // Convertir los valores a números antes de sumarlos
    let resta = parseFloat(num1.value) - parseFloat(num2.value); //de nuevo a número por más que pusimos type="num".

    // Mostrar el resultado en el párrafo de salida
    resultadoResta.textContent = resta;

    return resta;
}



function multiplicar() { //MULTIPLICAR
    let num1 = document.getElementById("Number1");//Entrada
    let num2 = document.getElementById("Number2");//Entrada
    let resultadoMultiplicacion= document.getElementById("salidaCalculadora"); //por donde tiene que mostrarse.

    // Convertir los valores a números antes de sumarlos
    let multiplica= parseFloat(num1.value) * parseFloat(num2.value); //de nuevo a número por más que pusimos type="num".

    // Mostrar el resultado en el párrafo de salida
    resultadoMultiplicacion.textContent = multiplica;

    return multiplica;
}

function dividir() { //MULTIPLICAR
    let num1 = document.getElementById("Number1");//Entrada
    let num2 = document.getElementById("Number2");//Entrada
    let resultadoDivision= document.getElementById("salidaCalculadora"); //por donde tiene que mostrarse.

    // Convertir los valores a números antes de sumarlos
    let divide= parseFloat(num1.value) / parseFloat(num2.value); //de nuevo a número por más que pusimos type="num".

    // Mostrar el resultado en el párrafo de salida
    resultadoDivision.textContent = divide;

    return divide;
}

function Potencia(){
let base = document.getElementById("Number1");
let exponente = document.getElementById("Number2");
let resultado = Math.pow(base.value, exponente.value);
let resultadoPotencia= document.getElementById("salidaCalculadora");

resultadoPotencia.textContent = resultado;
return resultado;
}


function Raiz(){
    let num1 = document.getElementById("Number1");//Entrada
    let resultado =Math.sqrt(num1.value);
    let resultadoRaiz= document.getElementById("salidaCalculadora");
    
    resultadoRaiz.textContent = resultado;
    return resultado;
   


}

function Absoluto(){
    let num1 = document.getElementById("Number1");//Entrada
    let resultado =Math.abs(num1.value);
    let resultadoAbsoluto= document.getElementById("salidaCalculadora");

    resultadoAbsoluto.textContent= resultado;
    return resultado;

}

function Random() {
    let minInput = document.getElementById("Number1").value;
    let maxInput = document.getElementById("Number2").value;

    // Convertir los valores de texto a números enteros
    let min = parseInt(minInput);
    let max = parseInt(maxInput);

    // Verificar si se ingresaron números válidos
    if (isNaN(min) || isNaN(max)) {
        alert("Por favor, introduce números válidos.");
        return;
    }

    // Calcular el número aleatorio dentro del rango
    let resultado = Math.floor(Math.random() * (max - min + 1)) + min;

    let resultadoRandom = document.getElementById("salidaCalculadora");
    resultadoRandom.textContent = resultado;
    return resultado;
}


function Round() {
    let numeroElement = document.getElementById("salidaCalculadora");
    let numero = parseFloat(numeroElement.textContent); // Obtener el valor y convertirlo a número
  
    let resultado = Math.round(numero); // Redondear el número
  
    numeroElement.textContent = resultado; // Mostrar el resultado redondeado en el mismo lugar
  
    return resultado;
  }


function Floor(){
    let numeroElement=document.getElementById("salidaCalculadora");
    let numero = parseFloat(numeroElement.textContent); // Obtener el valor y convertirlo a número

    let resultado =Math.floor(numero);
    let resultadoAbsoluto= document.getElementById("salidaCalculadora");

    resultadoAbsoluto.textContent= resultado;
    return resultado;
}


function Ceil(){
    let numeroElement=document.getElementById("salidaCalculadora");
    let numero = parseFloat(numeroElement.textContent); // Obtener el valor y convertirlo a número
    let resultado =Math.ceil(numero);
    let resultadoAbsoluto= document.getElementById("salidaCalculadora");

    resultadoAbsoluto.textContent= resultado;
    return resultado;
}
    







