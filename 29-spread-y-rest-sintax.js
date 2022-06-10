/*

Ya que hemos hablado de arreglo podemos hablar ahora de la sintaxis de expansion. En ingles en la documentacion este tema lo encontramos como Spread sintax.

Vamos a entender el concepto de iterable.

Cualquier objeto de JS que se pueda separar en elementos es un iterable. Un arreglo es un iterable cuyos elementos son los que componen el arreglo. Una cadena es un iterable donde cada caracter son los elementos que componen la cadena.

La sintaxis de expasion nos permite obtener estos elementos y enviarlos a una expresion de manera individual.

La sintaxis es el operador Spread syntax -> (...). se colocan antes del elemento iterable.

El inverso del Spread Operator son la Rest parameters. (...)

El Spread lo expande y el Rest parameters los unifica en un arrays.

*/

// Spread syntax:
let arreglo = [1,34,56,2,56,9,12];
console.log(arreglo);

console.log(...arreglo);

let nombre = "Peterson";
console.log(nombre);
console.log(...nombre);

// Rest parameters: (...):
function demo(...arr){
    console.log(arr);
}

demo("n","o","m","b","r","e");
demo(10,33,45,67);

function promedio(nombre, b, c, ...calificaciones){
    console.log(arguments); // Objeto arguments
    console.log(nombre,b,c, calificaciones);
}

promedio("Luis", 9,7,8,9,6);