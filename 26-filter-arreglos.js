/*
Procedemos a ver otro metodo para trabajar con arrays.
El metodo filter().

Nos sirve para filtrar elementos de un array a traves de una condicion.

El metodo filter recibe tambien como parametro una funcion. Esta funcion recibe como primer parametro el elemento del array.

Tambien se genera un nuevo arreglo.

*/

// Un ejemplo filtrar nuemeros pares, true conserva los elementos, false lo elimina.
let numeros = [2, 5, 67, 88, 80, 200, 3];

let numerosFiltrados = numeros.filter(function(numero){
    if(numero % 2 === 0){ // retorna numeros pares en un nuevo array
        return true;
    }
});

console.log(numerosFiltrados);

// Otro ejemplo para un elemento en especifico de un array:
let lenguajes = ["Java", "JavaScript", "Ruby", "C", "PHP"];

let newLenguajes = lenguajes.filter( element=>{
    if(element != "Java"){
        return true;
    }
});

console.log(newLenguajes);

