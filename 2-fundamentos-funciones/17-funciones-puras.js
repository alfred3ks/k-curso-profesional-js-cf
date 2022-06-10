/*

Las funciones puras es aquella que no produce efectos secundarios. Efectos secundarios como la mutacion, cuando modificamos un objeto o array dentro de una funcion eso es una mutacion. La declaracion de variables que se pueden usar fuera de la funcion tambien es un ejemplo de efecto secundarios.

Las funciones puras son mas sencillas de leer, de razonar y de mantener. Son mas facil de sustituir o de modalizar. En general se considera una buena practica escribir funciones puras.
Aprender a definir funciones puras es algo complicado y se adquiere con mucha practica.

*/

let edades = [20, 16, 45, 67];

function modificarEdades(edades){
    let copia = [...edades]; // Genero una copia del arreglo
    copia[0]=22; // Modifico la copia.
    copia[3]=70; // Modifico la copia.
    console.log(copia);
    return copia;
}

console.log(edades);
modificarEdades(edades);
console.log(edades);
