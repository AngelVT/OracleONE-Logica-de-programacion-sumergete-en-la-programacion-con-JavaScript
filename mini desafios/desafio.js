alert("¡Bienvenida y bienvenido a nuestro sitio web!");

let nombre = "Luna";
let eadad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;


alert("¡Error! Completa todos los campos");

let mensajeDeError = "¡Error! Completa todos los campos";
alert(mensajeDeError);

nombre = prompt("Cual es el nombre del Usuario?");
edad = prompt("Cual es la edad del usuario?");

if(edad >= 18){
    alert("¡Puedes obtener una licencia de conducir!");
}
else {
    alert("No puedes obtener un permiso de conducir aun.");
}