/*
Podemos asignar las propiedades de un objeto a variables independientes usando lo que se conoce como asignacion por desestructuracion o destructuring assignment como lo encontramos en la documentacion.

para asignar de esta manera debemos colocar del lado izquierdo del operador de asignacion las variable que vamos a utilizar o las propiedades en la que se va a separar el objeto, del lado derecho va el objeto del cual vamos a optener esas propiedades:

let user = {
    name: "Laika",
    edad: 20
}

let {name} = user;

Es como si estuvieramos creando una nueva variable que viene del objeto.

*/

let user = {
    nombre: "Laika",
    edad: 20
}

let { nombre: userName } = user;
console.log(userName);

// Cuando pasamos valores por defecto si no existe.
let { nombre: nam, apell = "Bielza"} = user;
console.log(nam, apell);

// Nuevo objeto con todos los valores usando spread operator
let { nombre: nom, ...sobrantes } = user;
console.log(nom, sobrantes);

// Tambien lo podemos hacer cuando trabajamos con funciones:
function saludar( {nombre}){
    console.log( "Hola " + nombre );
}

saludar(user);

function saludar1( {userName: nombre}){
    console.log( "Hola " + userName );
}

saludar1(user);

// Tambien lo vemos con arreglos:
let calificaciones = [10,9,8];
let [matematicas, programacion, ciencias] = calificaciones;

console.log(matematicas);
console.log(ciencias);

// Usando spread operator.
let [mate, ...resto] = calificaciones;
console.log(mate);
console.log(resto);

// Combinando con funciones:
function obtenerCal(){
    return [10, 9, 8];
}

let [matem, ...rest] = obtenerCal();

console.log(rest);
console.log(matem);
