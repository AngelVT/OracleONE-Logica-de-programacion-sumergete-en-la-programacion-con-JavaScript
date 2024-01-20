//Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".

let dia = prompt("Ingresa que dia de la semana es: ");

if (dia.toLowerCase == "domingo" || dia.toLowerCase == "sabado") {
    alert("Buen fin de semana");
} else {
    alert("Buena semana");
}

//Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

let numero = prompt("ingresa un numero: ");

if (numero >= 0) {
    alert("el numero ingresado es positivo");
} else {
    alert("el numero es negativo");
}

//Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".

let puntos = prompt("Cual es tu puntuacion: ");

if (puntos >= 100) {
    alert("Ganaste");
} else {
    alert("Perdiste");
}

//Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.

let saldo = 100;

alert(`Tu saldo es de $${saldo}`);

//Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.

let nombre = prompt("Cual es tu nombre?");

alert(`Bienvenido ${nombre}`)