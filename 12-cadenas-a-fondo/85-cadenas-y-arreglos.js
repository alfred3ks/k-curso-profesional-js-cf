/*

Las cadenas son en muchos aspectos muy similares a los arreglos, un conjunto de elementos ordenados con una secuencia definida.

La gran diferencia esta en que las cadenas solo guardan elementos de texto y los arreglos muchos mas elementos.

Esta similitud nos espone a escenarios donde es posible tratar a las cadenas como arreglos.

Vamos a ver varios metodos usados en los arreglos, comencemos por:

.split()

Metodo para convertir una cadena en un arreglo, necesitara pasar por parametro un delimitador que usara para separar los items.

*/

let cadena = "Hola developers, bienvenidos";
let palabras = cadena.split(' ');
console.log(palabras);
console.log(palabras.length);

/*
El inverso de split() es join() otro metodo de los arreglos, que unira todos los elementos del arreglo en una sola cadena. Debemos igual pasarle por parametro el delimitador que separar la cadena.

*/

console.log(palabras.join(' '));
console.log(palabras.join(','));

/*

Si ya hemos transformado una cadena a un arreglo recuerda que podemos usar todos los metodos àra los arreglos, suponiendo que queremos crear un filtro de palabras para un chat.

*/

let msj = 'Estoy aprendiendo JavaScript con el curso profesional de Codigo Facilito.';
function filtroPalabras(str){
    let marcas = ["curso", "feo", "viagra", "casino"];
    console.log(str);
    console.log(str.split(' '));
    let palabrasFiltradas = str.split(' ').map((palabra)=>{
        return marcas.includes(palabra) ? 'XXX' : palabra
    })
    console.log(palabrasFiltradas);
    return palabrasFiltradas.join(' ');
}

filtroPalabras(msj);
console.log(filtroPalabras(msj));

// MUY MUY INTERESANTE!!!!