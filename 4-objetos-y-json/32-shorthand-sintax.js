/*

A partir de ES2015 se introduce una sintaxis alternativa para declarar propiedades y metodos en un objeto JSON.

Estas sintaxis se conocen como en el caso de las propiedades como shorthand properties. Y para las funciones como shorthand syntax.

Para el caso de las propiedades esto util cuando asignamos a una propiedad  el mismo nombre:

let nombre = "Marcos";
let usuario = {
    nombre: nombre
}

A partir de ES2015 usaremos shorthand properties:
let usuario1 = {
    nombre
}
usuario1.nombre; //Marcos.

Ahora para el caso de los metodos:
let usuario2 = {
    nombre,
    saludar: function(){
        console.log("hola " + nombre);
    }
}

Al usar la shorthand syntax:
let usuario3 = {
    nombre,
    saludar(){
        console.log("hola " + nombre);
    }
}

*/

let nombre = "Marcos";

let usuario = {
    nombre: nombre
}

//A partir de ES2015 usaremos shorthand properties:
let usuario1 = {
    nombre
}

console.log(usuario1.nombre); //Marcos.

//Ahora para el caso de los metodos:
let usuario2 = {
    nombre,
    saludar: function () {
        console.log("Hola 😁 " + nombre);
    }
}

usuario2.saludar();

// Al usar la shorthand syntax:
let usuario3 = {
    nombre,
    saludar() {
        console.log("Hola 😒 " + nombre);
    }
}

usuario3.saludar();