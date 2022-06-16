/*

Vamos a ver otros metodos tradicionales usados en cadenas.

Metodos:

.trim()
metodo que elimina los espacios en blanco del principio y final de la cadena. Es muy comun en la limpieza y validacion de datos antes de ser procesados.

*/

let cadena = " Hola como estas ";
console.log(cadena);
console.log(cadena.trim());

/*

Alternativamente podemos usar .trimStar() Para remover los espacios del inicio de la cadena.
Tambien tenemos .trimEnd() que elimina los espacios del final de la cadena.

*/

console.log(cadena.trimStart());
console.log(cadena.trimEnd());

/*

Si queremos conocer la longitud de la cadena, la cantidad de caracteres o mas bien de codigo que hay en una cadena, podemos usar .length

*/

console.log(cadena.length);

/*

Tenemos tambien repeat() que nos devuelve una nueva cadena con la cantidad de veces que le pasemos por parametro:

.repeat()

*/

console.log(cadena.repeat(3));

/*

Por ultimo tenemos replace() para sustituir una cadena por otra. Retornara una nueva cadena con el reemplazo.

.replace()

*/

console.log(cadena.replace('Hola', "h"));
console.log(cadena.replace('Hola', "Cody"));