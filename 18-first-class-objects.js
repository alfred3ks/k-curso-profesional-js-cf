/*

En programacion se dice que un tipo de dato puede ser asignado a una variable, retornado o enviado como argumento se habla de un first class citizen.

O lo que es lo mismo un ciudadano de primera clase.

Un concepto mas tecnico es decir firts class objects. Asi lo veremos en la documentacion de JS.

Para que un objeto sea considerado de primera clase tiene que cumplir con las siguientes propiedades:

- Debe ser posible retornarlo.
- Debe ser posible asignarlo a una variable.
- Debe ser posible enviarlo como argumento.

En JS todo es considerado objetos de primera clase, esto que significa, en JS es comun enviar funciones como argumentos de otra.

function executor(funcion) {
    funcion();
}

function decirHola() {
    console.log("hola");
}

executor(decirHola);

Cuando enviamos una funcion como parametro no se colocan los parentesis, estos solo son para llamar o ejecutar la funcion.

Tenemos tambien una funcion que retorna a otra funcion:

function build() {
    function a(){console.log("Hola...");};
    return a;
}

build();

*/

// Funcion que recibe una funcion por parametro:
function executor(funcion) {
    funcion();
}

function decirHola() {
    console.log("hola");
}

executor(decirHola);

// Funcion que retorna otra funcion:
function build() {
    function a() { console.log("Hola..."); }
    return a;
}

let f = build();
f();

