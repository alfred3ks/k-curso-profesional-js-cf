/*

En JS las clases no existen, JS es un lenguaje orientado a objetos pero basado en prototipos. Esto lo hace muy diferente de otros lenguajes como Java donde la base son las clases.

A partir de una version de JS se introdujeron las clases, estas no cambian el funcionamiento del lenguaje, se introducen como una sintaxis alternativa para definir objetos aunque la base del lenguaje son los prototipos.

Para definir una clase: Esto seria una declaracion de clase o class declaration.

class Curso {

}

Atenativamente tenemos las class expresion:

let Curso = class {

}

Pero normalmente se definen como class declaration.


*/


// Asi definimos una clase:
class Curso {
    constructor(titulo){
        this.titulo = titulo;
    }

    inscribir(){
        console.log("Inscrito");
    }
}

// Asi creamos objetos:
let javaScript = new Curso("Curso profesional de JavaScript");

console.log(javaScript.titulo);
javaScript.inscribir();

