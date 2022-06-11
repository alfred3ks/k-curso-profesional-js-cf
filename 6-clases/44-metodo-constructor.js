/*

Metodo constructor:

Las clases pueden definir un metodo especial al que llamamos el constructo. Se deferencia del resto en que este metodo se ejecuta de manera automatica cuando creamos o instanciamos un nuevo objeto de la clase.

El constructor existe para ejecutar instrucciones de iniciacion para el objeto. Las cuales pueden ser las propiedades iniciales del objeto, ejecutar operaciones al crearse el objeto, etc.

En una clase de JS el metodo constructor de JS se define usando la palabra constructor(){}.

A diferencia de otros lenguajes de programacion en JS SOLO PUEDES TENER UN CONSTRUCTOR.

Si el interprete encuentra dos metodos con ese nombre nos dara error.

Este metodo constructor puede recibir parametros que se asignan al objeto cuando usamos el operador new.

class Curso {
    constructor(titulo){
        this.titulo = titulo;
    }
}

let java = new Curso("Curso profesional de Java");

Los parametros que recibe el constructor pueden tener valores por defecto:
class Curso {
    constructor(titulo, color="yellow"){
        this.titulo = titulo;
        this.color = color;
    }
}

let java = new Curso("Curso profesional de Java");

console.log(java.color);

El metodo constructor cuenta con el objeto arguments con todos los argumentos que recibe por parametros:
class Curso {
    constructor(titulo, color="yellow"){
        this.titulo = titulo;
        this.color = color;
        console.log(arguments);
    }
}

let java = new Curso("Curso profesional de Java");

console.log(java.color);


*/

class Curso {
    constructor(titulo, color="yellow"){
        this.titulo = titulo;
        this.color = color;
        console.log(arguments);
    }
}

let java = new Curso("Curso profesional de Java");

console.log(java.color);