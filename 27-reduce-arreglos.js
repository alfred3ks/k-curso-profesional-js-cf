/*

Veremos otro metodo para trabajar un array, el metodo reduce(), en terminos tecnicos nos permite reducir un array a un solo valor.

array.reduce(function(acc, element){
    // code...
}, 0)

la funcion recibe un primer parametro que un acumular y luego el elemento que se esta iterando.

*/

// Ejemplo para obtener la suma de todos los numeros de un array.
let numeros = [2,4,6,7];

let suma = numeros.reduce(function(acum, elemen){
    return acum + elemen;
}, 0) // El valor acumulado inicio en cero como segundo parametro.

console.log(suma);

// Ejemplo para unir cadenas de textos y obtener un html.
let nombres = ["Chris", "Brat", "Marcus", "Lionel"];

let resultado = nombres.reduce((acum, elemen)=>{
    return acum + "<li>" + elemen + "</li>";
},"");

console.log(resultado);