//<!--_________PROMEDIO____________-->
function promedio() {
    let num1, num2, resultado, promedio;
    num1 = Number(prompt("Ingresar la 1° calificación:"));
    num2 = Number(prompt("Ingresar la 2° calificación:"));

    resultado = num1 + num2;
    promedio = resultado / 2;

    alert("Tu promedio es: " + promedio);
}
//<!--_________CALCULADORA____________-->
function suma() {
    let num1 = Number(prompt("Ingresar el primer número:"));
    let num2 = Number(prompt("Ingresar el segundo número:"));
    let resultado = num1 + num2;
    alert("El resultado de la suma es: " + resultado);
}

function resta() {
    let num1 = Number(prompt("Ingresar el primer número:"));
    let num2 = Number(prompt("Ingresar el segundo número:"));
    let resultado = num1 - num2;
    alert("El resultado de la resta es: " + resultado);
}

function multiplicacion() {
    let num1 = Number(prompt("Ingresar el primer número:"));
    let num2 = Number(prompt("Ingresar el segundo número:"));
    let resultado = num1 * num2;
    alert("El resultado de la multiplicación es: " + resultado);
}

function division() {
    let num1 = Number(prompt("Ingresar el primer número:"));
    let num2 = Number(prompt("Ingresar el segundo número:"));

    if (num2 !== 0) {
        let resultado = num1 / num2;
        alert("El resultado de la división es: " + resultado);
    } else {
        alert("No se puede dividir entre cero");
    }
}

// Función que ordena 5 números en forma ascendente
function ordenarNumeros(){
    // Crear un arreglo para almacenar los números
    const lista = []

    // Obtener los valores de los campos de entrada
    for (let i=1; i<=5; i++){
        const numero = parseFloat(document.getElementById("numero0" + i).value);
        lista.push(numero);
    }

    // Ordenar los números de manera ascendente
    lista.sort(function(a,b) {return a-b;});

    // Mostrar el resultado en pantalla
    document.getElementById("resultado").textContent = "Los números ordenados son: " + lista.join(", ");

}
// Función tres palabras en forma ascendente
function ordenarPalabras(){
    // Crear un arreglo para almacenar los números
    const lista2 = []

    // Obtener los valores de los campos de entrada
    for (let i=1; i<=3; i++){
        const texto = (document.getElementById("palabra0" + i).value);
        lista2.push(texto);
    }

    // Ordenar los números de manera ascendente
    lista2.sort();

    // Mostrar el resultado en pantalla
    document.getElementById("re").textContent = "las palabras ordenados son: " + lista2.join(", ");

}

function jubilacion() {
    var edad, genero, aportaciones;
  
    // Solicitar datos personales
    edad = parseInt(prompt("Ingrese su edad actual:"));
    genero = prompt("Ingrese su género (M/H o F):").toUpperCase();
    aportaciones = parseInt(prompt("Ingrese cantidad de años aportando:"));
  
    // Verificar derecho a jubilación
    if (aportaciones >= 20) {
      if (genero === "M" && edad >= 60 || genero === "F" && edad >= 65) {
        document.write("Tiene derecho a la jubilación.");
      } else {
        document.write("No tiene derecho a la jubilación.");
      }
    } else {
      document.write("No tiene derecho a la jubilación.");
    }
  }

  function mescalendario() {
    var meses = [
      "ENERO",
      "FEBRERO",
      "MARZO",
      "ABRIL",
      "MAYO",
      "JUNIO",
      "JULIO",
      "AGOSTO",
      "SEPTIEMBRE",
      "OCTUBRE",
      "NOVIEMBRE",
      "DICIEMBRE"
    ];
  
    var numeromes = Number(prompt("Ingrese un número entre 1 y 12: "));
  
    if (numeromes >= 1 && numeromes <= 12) {
      document.write("Número de mes válido<br>");
      document.write("El mes es " + meses[numeromes - 1] + "<br>");
    } else {
      document.write("Número de mes inválido<br>");
      document.write("Deberá iniciar el programa<br>");
    }
  }

  function calcularSalarioSemanal() {
    var salarioDiario, salarioSemanal;
  
    salarioDiario = Number(prompt("Ingrese su salario diario:"));
    salarioSemanal = salarioDiario * 7;
  
    document.write("Su salario semanal es: $" + salarioSemanal);
  }
  
  