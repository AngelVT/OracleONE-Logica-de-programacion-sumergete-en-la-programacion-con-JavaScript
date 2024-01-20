//Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.

let contador = 1;
while(contador <= 10) {
    console.log(contador);
    contador++;
}

//Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
console.log("------------------------------------------------");
contador = 10;
while(contador > 0) {
    console.log(contador);
    contador--;
}

//Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
console.log("------------------------------------------------");
let contadorUsuario = prompt("Introduce un numero: ");
contador = 0;
while (contador <= contadorUsuario){
    console.log(contador);
    contador++;
}


//Crea un programa de cuenta regresiva. Pide un número y cuenta desde ese numero hasta 0 utilizando un bucle 'while' en la consola del navegador.
console.log("------------------------------------------------");
contadorUsuario = prompt("Introduce un numero: ");
contador = contadorUsuario;
while (contador >= 0){
    console.log(contador);
    contador--;
}