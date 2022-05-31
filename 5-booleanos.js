/* Booleanos:

True o False

Indican si un dato es verdadero o false, son utiles cuando usamos expresiones booleanas. cunado usamos los operadores logicos de comparacion.

Algunas estructura de control o ciclos los usan y pueden ser muy utiles.

Con la funcion Boolean() podemos saber si una expresion o dato es true o false.

EEn JS los valores que evaluan a false son: Los objetos
    undefined
    NaN
    null
    -0
    0
    ""
    false

*/

let notificaciones_activas = true;
let activo = false;

// Funcion Boolean:
console.log(Boolean(1)); // true
console.log(Boolean("")); // false
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(0)); // false
console.log(Boolean("false")); // true, evalua la cadena.
console.log(Boolean("hola")); // true, evalua la cadena.
console.log(Boolean(false)); // false

