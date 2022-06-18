/*

A traves del uso de corchetes o parentesis podemos especificar conjuntos y rangos en una expresion regular.

Una conjunto es una combinacion de distintas opciones para hacer busquedas de un caracter o de un patron.

*/

let patron1 = /[abcd]/;
let patron2 = /abcd/;

/*

Tendremos un match con cualquiera de las letras dentro de los [].

La diferencia del primer caso con el segundo es que el conjunto solo hara match la primera instancia que encuentre mientras que la combinacion literal tendrias que encontrar todos los caracteres en ese mismo orden.

*/

console.log("abcd".match(/[abcd]/));
console.log("abcd".match(/abcd/));
console.log("b".match(/[abcd]/));
console.log("b".match(/abcd/));

/*

Podemos usar un patron que encaje con dos posibles opciones usando la barra vertical |

*/

let patronMultiple = /[http|https]/;
let patronMultiple2 = /[a|b]/;

let cad = "a";
let cad1 = "b";
let cad2 = "c";
console.log(cad.match(patronMultiple2));
console.log(cad1.match(patronMultiple2));
console.log(cad2.match(patronMultiple2));

let url = "https://cheverestore.com";
console.log(url.match(patronMultiple));

let conten = "Hola";
let exp = /H[ol]a/;

console.log(conten.match(exp));

/*

Tambien es posible hacer dentro de la expresion regulas poner rangos: /[a-d]/

*/

console.log("c".match(/[a-d]/));
console.log("3".match(/[0-9]/));

// Este es diferente si aparece delante o detras buscara es el caracter ahi no hay rango
console.log("-a".match(/[-a]/));
console.log("-a".match(/[-a]/g));

/*

En el rango de los metacaracteres o caracteres especiales existen un grupo que conocemos como caracteres de clase, estos representan rangos comunes.

\d -> es igual a decir al rango [0-9], es decir cualquier digito.
\w -> es igual a decir [a-zA-Z0-9_], y representa cualquier digito, o cualquier letra o guiones bajo.

En la MDN si quieres profundizar tienes la documentacion:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes

*/
