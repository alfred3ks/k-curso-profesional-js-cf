/*

Los operadores de comparacion:

<
>
>=
<=
==
===

Cuando comparamos dos cadenas esta comparacion se hace usando el valor numerico de ambas.

*/

console.log("A" > "B");
console.log("a" < "B");
console.log("a" == "A");

/*

En JS moderno se introduce en la API de internacionalizacion un metodo de local compare que es mas eficiente para la comparacion de cadenas y que entrega resultados mas esperados. local compare en un metodo del objeto String(). El metodo retorna un entero que puede ser -1 / 0 / 1.

Iguales = 0,
Si la cadena base aparece antes que la cadena de comparacion en orden alfabetico retorna -1. a>b -> -1

Retornara 1 cuando es el caso contrario.

*/

console.log("a".localeCompare("z"));
console.log("z".localeCompare("a"));
console.log("z".localeCompare("z"));
console.log("Z".localeCompare("z"));
console.log("Z".toLowerCase().localeCompare("z".toLowerCase()));

console.log("soy un msj".localeCompare("y yo otro msj"));

/*

Una cosa que debemos saber que las cadenas son valores inmutables, esto quiere decir que aun que apliquemos un metodo la original no varia:

*/

let mensaje = "Bienvenido";
let mensajeMay = mensaje.toUpperCase();

console.log(mensajeMay);
console.log(mensaje);

