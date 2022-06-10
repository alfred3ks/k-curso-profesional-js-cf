/*

Las funciones y las variables en JS pueden ser usadas incluso antes de ser declaradas.

Esto se debe al proceso por medio del cual JS mueve la declaracion de elementos a la parte superior del scope, a este proceso se le llama hoisting.

console.log(x); undefined
var x;

Este proceso de hoisting solo aplica para variables con var y funciones. Las variables declaradas con let o const no hacen hoisting. Nos dara un error.

funcion demo(){
    console.log(x);
    var x;
}

demo();

El proceso de hoistin aplica en la declaracion de las variables y no en la asignacion:

console.log(x);
var x = 10;

hace lo siguiente:
var x;
console.log(x);
x = 10;

No es recomendable utilizar variables antes de su declaracion, idealmente deberias declarar tus variables antes de usarlas.

El hoisting no es un fallo del lenguaje, es una caracteristica.

Las funciones si pueden ser llamadas antes de declararlas:

suma(10,10);
function suma(a,b) {
    return a + b;
}

El hoisting hace lo siguiente:
function suma(a,b) {
    return a + b;
}
suma(10,10);

*/

// Hoisting con variables con var: No arroja error:
console.log(x); undefined
var x;

// Hoisting en funciones: No arroja error:
function demo(){
    console.log(x);
    var x;
}

demo();

// Llamada de la funcion antes de declararlas:
console.log(suma(10, 10));
function suma(a, b) {
    return a + b;
}
