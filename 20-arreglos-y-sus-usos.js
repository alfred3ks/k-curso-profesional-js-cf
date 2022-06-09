/*

En programacion un arreglo es una coleccion de datos agrupados en una sola estructura.

Podemos pensar en ellos como una caja llena de datos donde cada dato ocupa un puesto dentro de la caja.

Por ejemplo tenemos una coleccion de calificaciones.

*/

//Ejemplo:
let poo = 10;
let introduccion = 9;
let estructuras = 8;
let base_datos = 7;
let matematicas = 9;

let promedio = (poo + introduccion + estructuras + base_datos + matematicas) / 5;
console.log(promedio);

// Esto anterior no es muy practico imagina que son 50 calificaciones.

/*
Caracteristicas de los arrays:
- Pueden almacenar cualquier tipo de dato de primera clase, funciones, objetos, numeros, cadenas, booleanos e incluso otros arreglos.
- Una de las propiedades de los arreglos es su longitud, la longitud es igual a la cantidad de elementos dentro del arreglo.
- Cada elemento en el arreglo ocupa una posicion y se accede a dicho elemento usando el nombre del arreglo mas la posicion del elemento que queremos a dicha posicion tambien se le conoce como index.
- Las posiciones de los elementos inician a contar desde 0 de manera que el primer elemento del arreglo tiene como index 0.
- La ultima posicion del arreglo es igual a la longitud del arreglo menos uno, ese menos corresponde al hecho de que la cuenta inicia en 0.
- Los arreglos no tienen una longitud estatica, puedes agregar los elementos que quieras y no necesitas redimencionar la longitud del arreglo. A diferencia de otros lenguajes de tipado mas estricto como c se debe especificar la dimension del arreglo al crearlo. En JS no es asi.

*/

let calificaciones = [10, 9, 8, 7, 9];
console.log(calificaciones.length);
console.log(calificaciones[3]);
console.log(calificaciones.length-1);

