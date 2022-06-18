/*

Los metacaracteres cuantificadores nos permiten expresar la cantidad de ocurrencia que esperamos de algun patron o de un caracter o grupo de caracteres.

* -> hace match del elemento anterior cero o mas veces.

*/

let cadena = "22222";
let exp = /\d*/
console.log(cadena.match(exp));

cadena = "";
console.log(cadena.match(exp));

/*

+ -> cuantificador que hace match del elemento anterior una o mas veces

*/

cadena = "";
exp = /\d+/
console.log(cadena.match(exp));

cadena = "777";
console.log(cadena.match(exp));

/*

- Si queremos especificar un numero fijo de ocurrencias podemos colocar un par de llaves {},
- Tambien se pueden usar las {} para especificar rangos. Aqui recibe dos valores de donde va hasta donde llega, si omitimos el segundo valor diria al menos el primer valor y las veces que sea.

*/

cadena = "777989";
exp = /\d{3}/
console.log(cadena.match(exp));


exp = /\d{2,4}/ // A partir de 2 hasta 4 valores
console.log(cadena.match(exp));

exp = /\d{1,}/ // esto es lo mismo que com +
console.log(cadena.match(exp));

cadena = "";
exp = /\d{0,}/ // esto es lo mismo que com *
console.log(cadena.match(exp));

/*

Tambien podemos usar el operador de simbolo de ?, quiere decir que el elemento anterior puede o no estar, osea 0 o 1 vez. Este caracter se usa para decir que algo es opcional.

*/

cadena = "https://www.cheverestore.com";
exp = /https?:\/{2}w{3}/ // Aqui le diriamos que busque http y que la s es opcional
console.log(cadena.match(exp));

cadena = "http://www.cheverestore.com";
console.log(cadena.match(exp));

/*

Por otro lado cuando el simbolo de interrogacion aparece despues de otro cuantificador, por ejempo despues del * o + -> esto significa que el cuantificador se comportara de manera lazy, por defecto los cuantificadores se manera greedy. En español significa codicioso. Un adjetivo que significa que tratara de tomar tanto como pueda.
Por defecto los cuantificadores son codiciosos y abarcaran tanto como les sea posible.

*/


let html = "<p>Hola que tal</p>";
let expr = /<.+>/; // aqui lo abarca todo lo que encuentra, codicios, greedy.
console.log(html.match(expr));

expr = /<.+?>/; // aqui lo ponemos en modo perezoso, Lazy.
console.log(html.match(expr));