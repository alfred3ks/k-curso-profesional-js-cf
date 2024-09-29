# Operadores de comparación:

Los operadores de comparación nos permiten formular expresiones lógicas que retornan true o false.

Nos permiten comparar valores y como he dicho retornar tru o false. En JS existen 8 operadores de comparacion:

- == igual
- === Estrictamente igual
- != Diferente
- !== Estrictamente diferente

- > Mayor que
- < Menor que
- (>=) Mayor igual que
- <= Menor igual que

```javascript
let edad = 24;

let resultado = edad > 18;
console.log(resultado); // true

resultado = edad == 18;
console.log(resultado); // false

resultado = edad === 18;
console.log(resultado); // false

let nombre = 'Tom';
resultado = nombre == 'Cody';
console.log(resultado); // false
resultado = nombre != 'Cody';
console.log(resultado); // true

resultado = nombre > 'Cody';
console.log(resultado); // true

/* Aquí se compara si "Tom" es mayor que "Cody" en términos lexicográficos (orden alfabético basado en el valor Unicode). En este caso, "Tom" es mayor que "Cody" porque la "T" tiene un valor Unicode mayor que la "C".

Para el caso de comparacion de dos string como vemos cual es mayor y menor, segun la MDN la comparacion es segun el orden lexicografico estandar usando valores unicode. Esto es muy diferente al orden alfabetico. Son los valores numericos de los caracteres. */

let miEdad = '18';
resultado = miEdad > 12;

// El resultado da true porque JS cambia el tipo de las variables para hacer la comparacion. O los convierte a numeros o string y luego los compara. Por eso existen los comparadores estrictos para tener mejor control de esto. Lo vemos a continuación.

miEdad = '12';
resultado = miEdad == 12; // true
resultado = miEdad === 12; // false
```
