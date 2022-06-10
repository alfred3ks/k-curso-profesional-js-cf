/*

Los operadores de comparacion nos permiten formular expresiones logicas que retornan true o false.

Nos permiten comparar valores y como he dicho retornar tru o false. En JS existen 8 operadores de comparacion:

== igual
=== Estrictamente igual
!= Diferente
!== Estrictamente diferente

> Mayor que
< Menor que
>= Mayor igual que
<= Menor igual que

*/

let edad= 24;

let resultado = edad > 18;
console.log(resultado);

resultado = edad == 18;
console.log(resultado);

resultado = edad === 18;
console.log(resultado);

let nombre = "Tom";
resultado = nombre == "Cody";
console.log(resultado);
resultado = nombre != "Cody";
console.log(resultado);

resultado = nombre > "Cody";
console.log(resultado);

/*

Para el caso de comparacion de dos string como vemos cual es mayor y menor, segun la MDN la comparacion es segun el orden lexicografico estandar usando valores unicode. Esto es muy diferente al orden alfabetico. Son los valores numericos de los caracteres.

*/


let miEdad = "18";
resultado = miEdad > 12;

/*

El resultado da true porque JS cambia el tipo de las variables para hacer la comparacion. O los convierte a numeros o string y luego los compara. Por eso existen los comparadores estrictos para tener mejor control de esto.

*/

miEdad = "12";
resultado = miEdad == 12; // true
resultado = miEdad === 12; // false


