// Crea un objeto libro con propiedades titulo, autor, y año. 
// Luego, escribe un método que determine si el libro tiene más de 10 años desde su publicación.
//  Muestra un mensaje en la consola indicando si el libro es antiguo o reciente.



document.addEventListener("DOMContentLoaded", () => {
const button = document.getElementById("sumaBoton");
const ejercicio3 = document.getElementById("ejercicio2");
const ejercicio4 = document.getElementById("grande");
const ejercicio5 = document.getElementById("parImpar");
const ejercicio6 = document.getElementById("resta");
const ejercicio7 = document.getElementById("bucle");
const ejercicio8 = document.getElementById("esPar");
const ejercicio9 = document.getElementById("grados");
const ejercicio10 = document.getElementById("ciudad");
const ejercicio11 = document.getElementById("libro");
const ejercicio12 = document.getElementById("arreglo");
const ejercicio13 = document.getElementById("arregloPares");
const ejercicio14 = document.getElementById("parrafos");
const ejercicio15 = document.getElementById("formulario");

button.addEventListener("click", suma);
ejercicio3.addEventListener("click", saludo);
ejercicio4.addEventListener("click", grande);
ejercicio5.addEventListener("click", parimpar);
ejercicio6.addEventListener("click", resta);
ejercicio7.addEventListener("click", bucle);
ejercicio8.addEventListener("click", esPar);
ejercicio9.addEventListener("click", grados);
ejercicio10.addEventListener("click", ciudad);
ejercicio11.addEventListener("click", libro);
ejercicio12.addEventListener("click", arreglo);
ejercicio13.addEventListener("click", arregloPares);
ejercicio14.addEventListener("click", parrafos);
ejercicio15.addEventListener("submit", mensaje);

function saludo() {
  let nombre = prompt("Ingresa tu nombre");
  console.log("Hola " + nombre);
}
function suma() {
  let a = 10;
  let b = 20;
  let c = a + b;
  console.log("El valor de c es: " + c);
}
function grande() {
  let a = 10;
  let b = 20;
  let c = 30;
  if (a > b && a > c) {
    console.log("a es el mas grande");
  } else if (b > a && b > c) {
    console.log("b es el mas grande");
  } else {
    console.log("c es el mas grande");
  }
}
function parimpar(){
  let numero = prompt("Ingresa un número");
  if (numero % 2 == 0) {
    console.log("El número " + numero + " es par");
  } else {
    console.log("El número " + numero + " es impar");
  }
}
function resta(){
  let a = 10;
  while (a > 0) {
    console.log(a);
    a--;
  }
}
function bucle() {
  let numero = 0;
  do {
    numero = prompt("Ingresa un número mayor a 100");
  } while (numero <= 100);
  console.log("El número ingresado es: " + numero);
}
function esPar(){
  let numero = prompt("Ingresa un número");
  if (numero % 2 == 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}
function grados(){
  let celsius = prompt("Ingresa los grados Celsius");
  let fahrenheit = (celsius * 1.8) + 32;
  console.log(celsius + "°C son " + fahrenheit + "°F");
}
function ciudad(){
  let persona = {
    nombre: "Oscar",
    edad: 25,
    ciudad: "Santiago",
  };
  persona.ciudad = prompt("Ciudad a cambiar:");
  console.log(persona);
}
function libro() {
  let libro = {
    titulo: "El señor de los anillos",
    autor: "J.R.R. Tolkien",
    año: 1954,
    antiguedad: function () {
      let fecha = new Date();
      let añoActual = fecha.getFullYear();
      let años = añoActual - this.año;
      if (años > 10) {
        console.log("El libro " +libro.titulo+" es antiguo");
      } else {
        console.log("El libro " +libro.titulo+" es reciente");
      }
    },
  };
  libro.antiguedad();
}
function arreglo(){
  let ar1 = [1,2, 3, 4, 5,6,7,8,9,10];
  let ar2 = ar1.map((num) => {return num * 2});
  console.log("Arreglo primero "+ar1);
  console.log("Arreglo segundo "+ar2);
}
function arregloPares(){
  let pares = [];
  for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
      pares.push(i);
    }
  }
  console.log(pares);
}
function parrafos() {
  let parrafos = document.getElementsByTagName("p");
  for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].style.color = "blue";
  }
}
function mensaje(){
 const mensajeIn = document.getElementById("mensajeIn").value;
 alert("Has ingresado: "+mensajeIn);
}
const items = document.querySelectorAll('#lista li');
  items.forEach(function(item) {
    item.addEventListener('click', function() {
        console.log(item.textContent); 
    });
});
const habilitar = document.getElementById("habilitar");
const deshabilitar = document.getElementById("deshabilitar");
const campo = document.getElementById("campo");
habilitar.addEventListener("click", function() {
  campo.disabled = false;
});
deshabilitar.addEventListener("click", function() {
  campo.disabled = true;
});
const formulario = document.getElementById('formularioCorreo');
const mostrarCorreoDiv = document.getElementById('mostrarCorreo');
function mostrarCorreo() {
  const correoGuardado = localStorage.getItem('correo');
  if (correoGuardado) {
      mostrarCorreoDiv.innerHTML = `
          <p>Correo guardado: ${correoGuardado}</p>
          <button id="eliminarCorreo">Eliminar correo</button>
      `;
      document.getElementById('eliminarCorreo').addEventListener('click', function() {
          localStorage.removeItem('correo');
          mostrarCorreoDiv.innerHTML = ''; 
      });
  }
}
document.addEventListener('DOMContentLoaded', mostrarCorreo);
        formulario.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const emailInput = document.getElementById('email').value;
            localStorage.setItem('correo', emailInput); 
            mostrarCorreo();
        });

});