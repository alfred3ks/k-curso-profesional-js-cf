/*

Vamos a ver las diferentes formas de buscar elementos en un array.

- indexOf. -> busca un valor dentro de un arreglo y nos devuelve la posicion en que esta o fue encontrado, el indice. si el elemento no es encontrado retorna -1

-includes. -> Si lo que queremos es no saber el indice sino el elemento usamos este metodo. Nos devolvera true o false si existe o no el elemento.
Este metodo tambien permite enviar un segundo argumento a partir de cual posicion debe buscar los elementos, el indice.

- find(), metodo que permite pasar una funcion de prueba por parametro para hacer la busqueda. Retorna el elemento encontrado. Itera sobre todo el arreglo y cuando lo encuentra lo retorna. Solo devuelve algo si lo encuentra, sino devuelve undefined.

- findIndex(), metodo que nos devuelve la posicion de elemento dentro del array, su indice. Tambien pasamos una funcion con el parametro de elemento.

- some(), metodo cuando unicamente necesitamos saber si existe el elemento aunque no nos importa la posicion o que elemento es, retorn true o false.

*/

let arreglo = ["Ruby", "Python", "Java", "PHP", "JavaScript"];

// indexOf: -> ===, devuelve la posicion.
let posicion = arreglo.indexOf("Ruby");
console.log(posicion); // Devuelve la posicion del elemento.


// includes: -> === devuelve true o false.
let inc = arreglo.includes("Ruby", 3);
console.log(inc); // true o false

// find():
let resp= arreglo.find(elem => {
    return elem === "JavaScript";
});

console.log(resp);

// findIndex(): retorna el indice.
let resp1 = arreglo.findIndex(function(elem){
    return elem === "JavaScript";
});

console.log(resp1);

// some(): retorna true si existe o false sino.
let resp2 = arreglo.some(function(elem){
    return elem === "JavaScript";
});

console.log(resp2);
