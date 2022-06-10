/*

Empezaremos a ver los metodos que podemos usar para los arrays, el primero ser el metodos forEach().

Es un metodo qu sirve para recorrer un arreglo, es una alternativa a usar el ciclo for(). Con la diferencia que bajo ciertos argumentos este metodo es mas expresivo al ejecutarse y leer el codigo.

El metodo su sintaxis es la siguiente:

array.forEach(function(element) {
    // code...
});
array.forEach(element => {
    // code...
});

Recibe un parametro que es una funcion anonima y esta recibe como parametro los elementos del arrays que esta iterando en ese momento. Ademas de recibir los elementos tambien podemos recibir el indice de ese elemento como segundo parametro.

array.forEach(function(element, index) {
    // code...
});

Un tercer parametro tambien podemos usar que contiene el arreglo.

array.forEach(function(element, index, arreglo) {
    // code...
});

Esta funcion puede ser una funcion flecha tambien.

*/

let lenguajes = ["Ruby", "PHP", "JavaScript", "Python"];

lenguajes.forEach(element=>{
    console.log(element);
})

lenguajes.forEach(function(element){
    console.log(element);
})

lenguajes.forEach(function(element, index){
    console.log(index, element);
})

lenguajes.forEach(function(element, index, arreglo){
    console.log(index, element, arreglo);
})

