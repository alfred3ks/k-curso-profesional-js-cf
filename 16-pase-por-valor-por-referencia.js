/*

En jS un argumento puede ser enviado como valor o como referencia.

Esta diferencia influye en que ocurre con el argumento original despues de la ejecucion de la funcion.

Decimos que un valor ha sido enviado como referencia cuando le parametro apunta a la misma direccion del argumento original. De manera que cuando modificamos este valor se modifica el argumento original.

Por otro lado se deci que se pasa un argumento como valor cuando se envia una copia del argumento original y este no se modifica. Esta copia tiene una direccion distinta en memoria que la original. Cualquier valor que no sea un objeto o un arreglo es pasado por valor.


*/

// Paso de parametros por valor:
let edad = 20;
function modificador(edad){
    edad = 23;
    console.log("Edad dentro de la funcion: " + edad);
}

console.log(edad);
modificador(edad);
console.log(edad);

// Paso de parametros por referencia:
let edades = [12, 16, 22, 45];
function modificarEdades(edades){
    edades[0] = 17;
    edades[2] = 28;
    console.log(edades);
}

console.log(edades);
modificarEdades(edades);
console.log(edades);

