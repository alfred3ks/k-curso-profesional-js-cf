/*

La forma mas comun de declarar un objeto es usar lo que se conoce el JavaScript Object Notation. JSON.

Tenemos un curso de JSON o un tutorial y lo vemos en el siguiente enlace:

https://github.com/alfred3ks/json-practical-course


*/

let curso = {
    titulo: "Curso de JavaScript",
    formato: "Video",
    bloques: ["introduccion", "Basico", "Medio", "Avanzado"],
    inscribir: function(){
        console.log("Inscrito.");
    }
}

console.log(curso.titulo);
console.log(curso["titulo"]); // Esta sintasis tambien es valida.

curso.inscribir();

// Podemos reescribir los atributos y funciones del JSON:
curso.titulo = "Curso Profesional de JavaScript."
console.log(curso.titulo);

curso.inscribir = function(user){
    console.log(user  + ": Inscrito correctamente.");
}

curso.inscribir("Pepe");

