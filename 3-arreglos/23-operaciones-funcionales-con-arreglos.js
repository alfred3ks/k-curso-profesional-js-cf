/*

En versiones modernas de javaScript, los arreglos poseen una serie de métodos que nos permiten realizar operaciones para, recorrerlos, inspeccionarlos, o modificarlos.

Estas operaciones se introducen en la revisión de 2009 del lenguaje, conocida como ES5. ES5 es una de las revisiones más importantes que se han hecho al lenguaje, en parte por la introducción de estas operaciones.

Lo que tienen en común las operaciones forEach, map, reduce, filter y find, es que son métodos que puedes usar en cualquiera arreglo, y que operan a través de funciones que enviamos como argumento para estos métodos, la sintaxis la iremos destacando en vídeos individuales para cada operación.

Este tipo de trabajo adopta prácticas del paradigma de programación funcional, en el que la mayoría del código se estructura a través del uso de funciones.

El uso de las operaciones que verás en los próximos temas normalmente reduce la complejidad y lo verboso del código, es decir, lo hace más sencillo de comprender y reduce la cantidad de líneas que debes escribir para realizar una operación.

Es importante aclarar que un bloque de código no es mejor cuando es más pequeño que otro, cuando programamos debemos buscar que el código sea comprensible, no corto. Para evaluar este aspecto veamos las siguientes operaciones, ambas realizan lo mismo utilizando diferentes enfoques:

*/

let arreglo = [1,2,3,4,5,6,7];

for (let i = 0; i < arreglo.length; i++) {
    let element = arreglo[i];
    // console.log(element);
}

arreglo.forEach(function (element) {
    console.log(element);
});

/*

En este escenario, además de que usar un método del arreglo hace el código más corto, e incluso lo puede resumir en una sola línea, también es más expresivo, forEach nos da un indicio de que hace el código, para cada uno de los elementos.

Veamos en los siguientes temas más detalles de cómo funcionan estas operaciones funcionals sobre arreglos.

*/