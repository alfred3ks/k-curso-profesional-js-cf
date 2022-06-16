/*

JavaScript tiene multiples formas de saber si una cadena existe dentro de otra cadena.

Estas operaciones te informan en que posicion se encuentra dicha cadena en la busqueda.

El primer metodo que veremos es indexOf().

Recibe por parametro la cadena que estamos buscando y si existe devuelve el indice donde comienza la cadena que estamos buscando.

Si la cadena no existe retornara -1.

Si introducimos como parametro solo un letra retornara 1 si existe. Y solo retornara la primera instancia que encuentre de esa letra en cuestion.

Este metodo utiliza un algoritmo de igualdad estricto

*/

let cadena = "Hola Mundoooooo";
console.log(cadena.indexOf('und')); // Nos muestra el indice donde comienza la cadena de busqueda.
console.log(cadena.indexOf('x'));
console.log(cadena.indexOf('o'));

if(cadena.indexOf("H") >= 0){
    console.log('Encontrado con indexOf!!!!');
}

/*

Otro metodo parecido en el de includes():

Si la cadena o letra existe en el string retornara true sino false.
Este metodo utiliza un algoritmo de nombre sin values cero que soluciona el caso que busques un valor falsy como NaN.

Este metodo es el mas recomendado.

*/
console.log(cadena.includes('P'));
console.log(cadena.includes('M'));
if (cadena.includes("a")) {
    console.log('Encontrado con includes!!!!');
}

/*

Para el caso de que necesitemos saber la ultima instancia de la busqueda podemos usar:

.lastIndexOf()

Retorna el indice de la ultima instancia en la busqueda.

Debemos tener cuidado a ejecutar este metodo ya que es mas lento que el de indexOf(), esto es debido a que sin importar donde se encuentre la palabra lastIndexOf() debe recorrer toda la cadena y retornar la posicion de la ultima instancia y debe asegurarse de que realmente es la ultima.

*/

console.log(cadena.lastIndexOf("o"));

/*

Tambien podemos asegurarnos si una cadena existe al inicio o al final de la cadena, si usamos los metodos:

.startWith()

.endWith()

*/

let link = "https://cheverestore.com";
let imagen = "logo.png";
if(link.startsWith('https')){
    console.log("Es un link seguro.");
}

if(imagen.endsWith('png')){
    console.log("Es una imagen PNG");
}