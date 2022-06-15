/*

Una cadena esta formada por una secuencia ordenada de caracteres.

JS ofrece maneras de partir estas cadenas para formar subcadenas o manejar caracteres por caracteres.

Como en los arreglos los caracteres de una cadena pueden accederse segun su posicion en la cadena empezando por el cero.

El primer caracter de la cadena esta en la posicion cero.

*/

console.log("Hola"[0]);

/*

Si deamos iterar por todos los caracteres de la cadena podemos utilizar el ciclo for of, tambien podemos usar el ciclo for tradicional, aunque no es recomendable ya que alusar emojis no funciona bien da error. Esto pasa por que los emojis forman dos puntos de unidad :)

*/

let cadena = "Soy una cadena de texto 😂."

for(const caracter of cadena){
    console.log(caracter);
}

/*

A diferencia con otros lenguajes donde los caracteres son un tipo de dato distinto las cadenas, en JS sin importar si hay uno o mas caracteres eso lo trata como una cadena.
Asi como hemos trabajado con caracteres individuales en ocaciones necesitaremos trabajar con porciones de un string, o un substring como se conocen, las substring tampoco es un dato especial simplemente es una nueva cadena.

Veremos los metodos:

.substring();
Nos permite extraer una porcion de una cadena usando la posicion de inicio y la posicion final. El argumento de la posicion final no es incluyente.

Si el valor del argumento de inicio es mayor del argumento final se intercambian.

Si mandas un valor menor que cero va a ser reemplazado por el cero.

.slice():
Muy similar a .substring()
La diferencia entre ambos es que mientras substring si el valor de inicio es mayor que el final se intercambian, en cambio en slice() esta no se ejecuta.

otra cosa tambien es que slice si le envias valores negativos esos contaran de atras hacia adelante.

OJO Tanto en .substring como en .slice el segundo argumento es opcional.

.substr() // deprecado....


*/

let saludo = "Hola world";
console.log("--substring--");
console.log(saludo.substring(0,7));
console.log(saludo.substring(7,0));
console.log(saludo.substring(7,0));
console.log(saludo.substring(-2,7));
console.log(saludo.substring(2)); // Arranca aqui en la posicion 2 hasta el final

console.log("--slice--");
console.log(saludo.slice(0,7));
console.log(saludo.slice(7,0)); // No se ejecuta
console.log(saludo.slice(5)); // Arranca aqui hasta el final

console.log("--substr--");
console.log(saludo.substr(3,5));


