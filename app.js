/*tipos de variable
const c = 1;
var v;
let l;*/

//Camel case - iniciar los nombres de las variables en minuscula y las siguienes palabras en caso de que haya la primer letra se pone mayuscula
//declarar las variables al principio
let numeroSecreto = 7;
let numeroUsuario = 0;
let intentos = 1;
let intentosMaximos = 3;
let rango = 10;

alert("Bienvenido al Juego 'Numero secreto'")
//el challenge pide que el usuario pueda ingresar un rango de modo que el numero secreto estara entre 1 y el rango dado por el usuario
rango = parseInt(prompt("Indica un rango, el numero secreto se encontrara entre 1 y el numero elegido"));

numeroSecreto = Math.floor(Math.random() * rango) + 1;

//como un extra el usuario tambien podra elegir el numero de intentos
intentosMaximos = parseInt(prompt("Cuantos intentos quieres?"));

//estructura de repeticion para dar al usuario multiples intentos
while (numeroUsuario != numeroSecreto) {
    //solicitar al usuario ingresar informacion
    numeroUsuario = parseInt(prompt(`Introdice un numero entre 1 y ${rango}?`));

    //imprimir el numero introducido en la consola y e ltipo de dato
    //console.log(`Numero del usuario ${numeroUsuario} es de tipo ${typeof(numeroUsuario)}`);

    //comparar el numero secreto con la respuesta del usuario si es correcto imprimir mensaje "correcto" de lo contrari imprimir "incorrecto"
    if (numeroSecreto == numeroUsuario) {
        /*condicion verdadera
        las comillas invertidas `` permiten, en JS, incluir las variables directamente en la cadena en lugar de usar "string" + variable
        incluir ${} permite concatenar variables o directamente ejecutar codigo JS.
        Funciones ternarias
        ? equivale a if y : equivale a else
        */
        //if(intentos == 1)
            alert(`Numero correcto, el numero secreto es: ${numeroSecreto} lo lograste en ${intentos} ${intentos == 1 ? ' intento' : ' intentos'}`);
        //else alert(`Numero correcto, el numero secreto es: ${numeroSecreto} lo lograste en ${intentos} intentos`);
    } else {
        //condicion falsa, compoarar el numero del usuario para dar pistas
        if (numeroUsuario > numeroSecreto) {
            alert('El Numero secreto es menor');
        } else {
            alert('El Numero secreto es mayor');
        }
        //alert('Numero no es correcto');
        intentos++;
        
        if(intentos > intentosMaximos) {
            alert(`No lo has logrado, Llegaste al numero maximo de ${intentosMaximos} intentos. El numero secreto era ${numeroSecreto}.`);
            //detener el ciclo o salir del ciclo
            break;
        }
    }
}
