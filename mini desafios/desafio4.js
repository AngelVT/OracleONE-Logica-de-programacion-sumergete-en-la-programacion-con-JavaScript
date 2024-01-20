//Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log("------------------------------------------------");
console.log("Bienvenido a el programa de ldesafio 4");

//Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
console.log("------------------------------------------------");
let nombre = "Angel";
console.log(`¡Hola, ${nombre}!`);

//Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
nombre = "Angel";
alert(`¡Hola, ${nombre}!`);

/*Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y 
muestra la respuesta en la consola del navegador.*/
console.log("------------------------------------------------");
let lenguajeFav = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log(lenguajeFav);

/*Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y 
almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.*/
console.log("------------------------------------------------");
let valor1 = 1;
let valor2 = 5;

let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y  ${valor2} es igual a ${resultado}.`);



/*Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y 
almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar 
el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.*/
console.log("------------------------------------------------");
valor1 = 5;
valor2 = 7;

resultado = valor1 - valor2;
console.log(`La diferencia entre ${valor1} y  ${valor2} es igual a ${resultado}.`);

/*Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y 
muestra un mensaje apropiado en la consola.*/
console.log("------------------------------------------------");
let edad = parseInt(prompt("Ingresa tu edad:"));
let mayoriaDeEdad = 18;

if (edad >= mayoriaDeEdad) {
    console.log("Felicidades eres mayor de edad.");
}
else {
    console.log("Aun no eres mayor de edad.");
}
    

//Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
console.log("------------------------------------------------");
let numero = parseInt(prompt("Ingresa un numero positivo o negativo:"));

if (numero >= 0) {
    console.log("Numero es positivo");
}
else {
    console.log("Numero es negativo");
}

//Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
console.log("------------------------------------------------");
let contador = 1;

while(contador <= 10){
    console.log(contador)
    contador++;
}

//Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
console.log("------------------------------------------------");
let nota = parseInt(prompt("Ingresa tu nota:"));
let notaMinima = 7;

if(nota >= notaMinima) {
    console.log("Aprobado");
}
else {
    console.log("Reprobado");
}

//Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
console.log("------------------------------------------------");
console.log(Math.random());

//Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
console.log("------------------------------------------------");
console.log(Math.floor(Math.random() * 10) +1);

//Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
console.log("------------------------------------------------");
console.log(Math.floor(Math.random() * 1000) +1);