/*

Ahora vamos a hablar de otro metodo para trabajar con arreglos, el metodo map(). Este metodo lo que hace es generar una nuevo arreglo luego de modificar el arreglo original.

Este metodo recibe tambien una funcion.

array.map(function(){
    // code...
})

Este metodo igual map(), recibe opcional como segundo parametro el index y el propio arreglo como tercer parametro.

Este es un metodo muy usado en JS y sobre todo en ReactJS.

*/

let numeros = [12,45,56,87,90,0,23,4,56];
let cuadrados = numeros.map(function(numero){
                    let cuadrados = numero * numero;
                    return cuadrados;
                });


console.log(cuadrados);
console.log(numeros);

// Tenemos un arrays de numeros pero como string y debemos pasarlos a numeros:
let numString = ["22", "18", "45", "18"];
let numInt = numString.map(function(elemen){
    return parseInt(elemen);
})

console.log(numInt);
console.log(numString);