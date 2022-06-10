/*

Existe una sintaxis alternativa para declarar funciones que no requiere de la palabra function.

let demo = ()=> {
    console.log("Hola mundo...");
}

Son las arrow function o funciones flechas. Las cuales tiene las siguiente caracteristicas:

- El nombre de la funcion se adopta el nombre de la variable que fue asignada.
- Las llaves pueden omitirse cuando la instruccion es de una sola linea.
let demo = ()=> console.log("Hola mundo...");
Cuando esto sucede se crea un retorno implicito para la linea de ejecucion. Una arrow function de una sola linea retorna el resultado de dicha linea.
let suma = (a,b)=> a + b;
console.log(suma(3,6));

*/

let demo = () => {
    console.log("Hola mundo...");
}
demo();

let suma = (a, b) => a + b;
console.log(suma(3, 6));