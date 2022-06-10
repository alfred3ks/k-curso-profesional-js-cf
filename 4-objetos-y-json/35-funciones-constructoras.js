/*

Funciones constructoras:

En JS tambien podemos construir objetos a partir de funciones. Cualquier funcion puede usarse para instanciar un objeto.

Cuando usamos funciones para instanciar objetos se les llama funciones constructoras.

Usaremos el operador new para crear instancias.

*/

function Persona(nombre, apellido){
    // console.log(this);
    this.nombre = nombre;
    this.apellido = apellido;
    this.saludar = function(){
        console.log("Hola soy " + this.nombre + " " + this.apellido);
    }
};

// Creamos objetos de tipo Persona.
let user = new Persona("Luis", "Martinez");

console.log(user);
console.log(user.saludar());

let user1 = new Persona("Maria", "Gonzalez");
console.log(user1);
console.log(user1.saludar());