/*

Los operadores logicos nos permiten evaluar multiples valores o expresiones por su valor o representacion booleana.
En la mayoria de los lenguajes estos operadores producen una respuesta booleana, pero en JS retornan cualquier tipo de valor, puede ser un booleanos, numeros, cadenas, objetos.

En JS existen 4 operadores logicos:

&& operador AND
|| operador OR
! El operador negacion o NOT.
?? El operador nullish coalescing / fusion de nulos o union nulosa.

*/

// Operador && AND:
console.log("Operador AND:");
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

let edad = 25;
console.log(edad > 18 && edad < 30); // true

console.log(edad > 18 && edad < 25); // false

console.log(20 && 10); // Devuelve el ultimo valor false que encuentra

console.log(20 && 5 && false);

// Operador || OR:  Una vez que encuentra un primer valor verdadero no continua ejecutando la expresion.

console.log("Operador OR:");
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

edad = 15;
console.log(edad > 18 || edad < 30); // true

console.log(edad > 18 || edad < 25); // true

console.log(20 || 10); // devuelve el primer true que ve

console.log(5 || 15 || false); // devuelve el primer true que ve

// Operador ! NOT: Su funcion principal es negar una expresion. Convierte la expresion a su representacion booleana y luego la invierte.
console.log("Operador NOT:");

console.log(!0);  // true
console.log(!1);  // false
console.log(!"");  // true
console.log(!"Hello");  // false
console.log(!(10 > 15)); // true

// Operador ?? nullish coalescing: Evalua el lado izquierdo de la expresion, si este valor es nulo o undefined va a retornar el valor de la derecha y viseversa.
console.log("Operador nullish coalescing:");

let nombre;
let apelllido = "Sánchez";

console.log(nombre ?? apelllido);
console.log(null ?? "Hello");
console.log(25 ?? null);