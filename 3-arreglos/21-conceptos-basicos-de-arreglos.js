/*

Conceptos basicos sobre arreglos:

- La forma simple de declarar un arreglo es con los parentisis cuadrados, los corchetes [].
let arreglo = [];

- Desde la definicion se le pueden añadir elementos:
let frameworks = ["rails", "laravel", "django"];

- Un arreglo puede almacenar cualquier tipo de dato:
let array = [19, "Maria", true, null, undefined, {}, function(){},[]];

- Podemos modificar los elementos de un arreglo asignando el valor a la posicion:
array[4] = 22;
console.log(array);
[19, "Maria", true, null, 22, {}, function () { }, []]

- Podemos agregar elementos al array usando metodos para estos:
.push()-> lo agrega al final.
array.push("Nuevo");
[19, "Maria", true, null, 22, {}, function () { }, [], "Nuevo"]

.unshift(123) -> lo agrega la inicio del arreglo.
array.unshift(123);
[123, 19, "Maria", true, null, 22, {}, function () { }, [], "Nuevo"]

Para el caso de push() y unshift() retornan la longitud del array.

let longitud = push(123);
console.log(longitud);

.pop() -> Para eliminar elementos del arreglo, el ultimo:
array.pop();
[ 123, 19, 'Maria', true, null, 22, {}, [Function (anonymous)], [] ]

.shift()-> Para eliminar el primer elemento del arreglo.
array.shift()
console.log(array);

En los casos de pop() y shift() estos metodos retornan los elementos eliminados.

let eliminado = array.shift()
console.log(one);

*/

let array = [19, "Maria", true, null, undefined, {}, function () { }, []];
console.log("Agregamos un valor---");
array[4] = 22;
console.log(array);

console.log("push----");
array.push("Nuevo");
console.log(array);

console.log("unshift----");
array.unshift(123);
console.log(array);

let longitud = array.push(123);
console.log(array);
console.log(longitud);

console.log("pop----");
array.pop();
console.log(array);

console.log("shift-----");
array.shift()
console.log(array);

let eliminado = array.shift()
console.log(array);
console.log(eliminado);