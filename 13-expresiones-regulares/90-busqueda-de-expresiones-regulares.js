/*

De acuerdo con la MDN una expresion regular puede utilizarse en 8 posibles moetods, de los cuales dos son de la clase RegExp y el resto son de un objeto string.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Using_regular_expresions_in_JavaScript

Veremos la busqueda usando expresiones regulares. Es uno de los casos mas comunes que les podemos dar a las expresiones regulares. Usarlas para encontrar distintas intancias de un patron en un texto.

Cuando deseamos encontrar un patron podemos usar los metodos:

search(); -> muy similar a indexOf, la diferncia es que indexOf recibe una cadena y search recibe una expresion regular y retornara el indice en donde inicia la ocurrencia encontrada.Si no encuantra ninguna coincidencia devuelve -1
match();

*/

let texto = "Hola, me llamo Laika y tengo 17 año";
let expR1 = /Laika/;

console.log(texto.search(expR1));

/*
La saluda en 15, es a partir de alli esta lo que estamos buscando. Ahora supongamos que estmos buscando la primera instancia de un valor numerico. Este tipo de busqueda no se pueden usar caracteres literales ya que no hay ninguno que represnte cualquier numero.

Para eso tenemos la caracteres especiales. |d-> representa cualquier digito.

*/
let expR2 = /\d/;
console.log(texto.search(expR2)); // 29 la posicion

/*

Podemos buscar multiples instancias de un mismo patron podemos usar el metodo match() o el similar matchAll().

Ambos metodos retornan todas las instancias encontradas que cumplan el patron de busqueda.

La diferencia entre ambos es que match() retorna un arreglo y matchAll() retorna un iterador.

Para el ejemplo anterior busquemos multiples digitos. Para esto debemos utilizar la bandera g, para que nos retorne en un array todas las intancias encontradas.

*/

let expR3 = /\d/g;
console.log(texto.match(expR3));

/*

Si quisieramos que nos devolviera en vez del array los numeros juntos podemos agragar un cuantificador al operador d, con un mas +

*/

let expR4 = /\d+/g;
console.log(texto.match(expR4));

/*

Tambien podemos armar un grupo, eso lo hacemos con los parentisis () y quitando la bandera g.

*/

let expR5 = /(\d+)/;
console.log(texto.match(expR5));

/*

El uso de matchAll() es muy similar solo que siempre debemos pasar la bandera g. Es obligatorio. Este retornara un iteredor que puedes utilizar dentro de un ciclo for

*/

let expR6 = /\d/g;
let iterador = texto.matchAll(expR6);
for(instancia of iterador){
    console.log(instancia);
}

