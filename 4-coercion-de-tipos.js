/*
Coercion de tipos:
Cuando en nuestro codigo interactuan dos tipos de datos distintos en una operacion JS hara una conversion implicita de datos a la que se le llama type coercion.

Hemos visto que existen metodo para convertir un datoa otro, esto se llama conversion explicita.

Osea en resumen si el lenguaje decide el cambio de dato sin que nosotros lo veamos es un conversion implicita y la que si vemos y hacemos nosotros es explicita.

OJO esto no son fallos del lenguaje. Lo recomendado es nosotros hacer el tipo de conversion para evitar que lo haga el propio lenguaje.

*/

// Conversion implicita:
console.log(10 + "5"); // "105"
console.log("10" == 10); // true, primero hace la conversion implicita y luego compara

console.log([] == 0); // true

// Conversion explicita:
console.log(Number("10") + 10); // 20
console.log("10" === 10); // false.