/*

En JS las propiedades y metodos de una clase son publicos por defecto. Sin embargo existe una sintaxis que se esta introduciendo al lenguaje con la que podemos definir propiedades y metodos privados. Aunque aun no es parte del lenguaje esta sintaxis es una propuesta, en el 2021 aun constinua en ese estatus de propuesta. por lo que puede que pronto este integrada al completo al lenguaje. Por eso vamos a ver como es.

Para usar esta sintaxis debemos agregar el simbolo numeral # antes de la propiedad o metodo.

Si quisieramos acceder a esa propiedad fuera de la clase nos daria error:

class Curso {
    #title = "Curso de JS";
}

let javaScript = new Curso();
console.log(javaScript.#title); // SyntaxError: Private field '#title' must be declared in an enclosing class

Estas propiedades solo se pueden usar dentro de la clase. Podriamos definir un metodo bienvenida que use esa propiedad:

class Curso {
    #title = "Curso de JS";
    bienvenida(){
        console.log("Bienvenido al " + this.#title);
    }
}

let javaScript = new Curso();
javaScript.bienvenida();

El metodo si se puede usar porque es publico.

Si el metodo es privado no se podria usar solo si lo ejecutamos desde el constructor:

class Curso {
    #title = "Curso de Javascript";
    constructor(){
        this.#bienvenida();
    }

    #bienvenida() {
        console.log("Bienvenido al " + this.#title);
    }
}

let javaScript = new Curso();


*/

class Curso {
    #title = "Curso de Javascript";
    constructor(){
        this.#bienvenida();
    }

    #bienvenida() {
        console.log("Bienvenido al " + this.#title);
    }
}

let javaScript = new Curso();


