/*

El uso de expresiones regulares nos puede ayudar a escenarios en donde queremos reemplazar las instancias de un patron por una nueva cadena o un nuevo patron.

En este tema cubriremos el uso del metodo replace(), este metodo no solo es para expresiones regulares, tambien para string.

Un metodo que recibe como primer argumento un patron de busqueda y como segundo una cadena o funcion para reemplazar las instancias encontradas.

*/

let texto = "Programacion en JavaScript del lado del cliente, se le denomina frontend. frontend";

let nuevoTexto = texto.replace(/frontend/g, "FRONTEND");
// console.log(nuevoTexto);

/*

Con la bandera g se reemplazaran todas las que encuentren en el string.

Para el caso de las cadenas las podemos utilizar sin usar expresiones regulares, recordar como funciona el metodo replace.

let nuevoTexto = texto.replaceAll("Frontend", "FRONTEND");

Y si tenemos mas de una cadena a reemplazar en vez de replace() usaremos replaceAll()
Vamos a ver un ejemplo mas complejo.

*/

texto = "1000 numeros disponibles. Ademas temenos 4000 usuarios conectados.";

/*

Vamos a hacer que al menos todos lo numeros de 4 caracteres los separe con una coma.

*/

let textoComa = texto.replace(/(\d)(\d{3})/g,"$1,$2");
// console.log(textoComa);

/*

Aqui vemos que tenemos dos grupos, el la expresion regular tenemos un primer grupo encerrado por parentesis esa es la busqueda y se le asigna al primer $1, la segunda busqueda del segundo parentesis se le asigna a $2.

Ahora debemos recordar que replace ademas de una cadena puede recibir una funcion.

*/

textoComa = texto.replace(/(\d)(\d{3})/g, (match,g1,g2,offset, cadena)=>{
    console.log(match,g1,g2,offset,cadena);
    return g1 + ',' + g2;
});

console.log(textoComa);

