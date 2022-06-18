/*

Para declarar un simbolo usamos el constructor:

Simbol() este retorna un nuevo valor del tipo simbol, un primitivo del lenguaje.

let simbolo = Symbol('mi-simbolo');

Los simbolos pueden tener un descriptor que se pasa en forma de cadena como argumento. Solo sirve para darle un identificador al simbolo pero no es parte del valor del simbolo. Esto quiere decir que si yo creo otro y luego los comparo me saldra false.

let simbolo2 = Symbol('mi-simbolo');
console.log(simbolo == simbolo2); // false

El principal uso que le damos a un simbolo es el de clave para propiedades de un objeto. de hecho antes de los simbolos las propiedades de un objeto solo podian ser cadenas, ahora pueden ser simbolos o cadenas.



*/

let simbolo = Symbol('mi-simbolo');
let simbolo2 = Symbol('mi-simbolo');

console.log(simbolo == simbolo2); // false

// definimos un objeto:
let obj = {

}

obj[simbolo] = function(){
    console.log("Mi nombre es un simbolo.");
}

obj[simbolo]();

/*

Ahora es muy facil emocionarse con las nuevas caracteristicas del lenguaje pero es mejor seguir usando cadenas para las propiedades del un objeto.

Los simbolos no viene a sustituir a las cadenas, porque no son tan practicos.

Un ejemplo donde usar simbolos es el caso de los iterables, lo vemos a continuacion.

*/


