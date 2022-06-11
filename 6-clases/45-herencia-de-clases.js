/*

La herencia en JS funciona de manera que la vida real.

Este concepto permite que un objeto herede las propiedades y metodos de un objeto al que llamamos padre.

A partir de esta copia del padre podremos agregar, quitar o modificar metodos y propiedades en el objeto hijo.

La herencia nos permite organizar nuestro objetos como una jerarquia donde cada descendiente hereda las propiedades y metodos de todos los ancestros que tiene, esto nos permite definir nuestras clases desde las mas generales, las mas abstractas hasta las mas especificas.

Para definir las herencia utilizamos la palabra reservada extends. Se heredan los metodos y atributos del padre.

class Human{
    especie = "Humano";
    respirar(){console.log("Respira.");}
};

class Admin extends Human {

}

let admin = new Admin();
console.log(admin.especie);
admin.respirar();

El concepto de herencia esta extrechamente asociado con el de reutilizar codigo. normalmente cuando tenemos un metodo muy general que aplica para multiples clases preferimos definirlo en una clase base y que los objetos que la requieran de este metodo hereden de esa base.

class Vimeo{
    play(){this.video.play;}
    duration {return this.duration / 100;}
    open {this.redirectVimeo(this.video);}
}

class YouTube{
    play(){this.video.play;}
    duration {return this.duration / 100;}
    open {this.redirectYouTube(this.video);}
}

Podemos ver que tenemos duplicado en ambos clases los metoso play() y duration.

Este es un ejemplo perfecto para aplicar herencia.

Podemos por definir una clase base: Con los metoso y atributos repetidos.

class Player {
    play(){this.video.play;}
    duration {return this.duration / 100;}
}

despues usaremos la palabra extends para extender de esa clase a las otras clases:

class Vimeo extends Player {
    open {this.redirectVimeo(this.video);}
}

class YouTube extends Player {
    open {this.redirectYouTube(this.video);}
}

Asi vemos que ahora no se duplica el codigo.

Ademas de otras clases que ya hemos definido en js tambien podemos heredar de aquellas que son llamadas las build in object. Son objetos que ya vienen con el lenguaje como date() o array.

class CustomDate extends Date {

}

class CustomArray extends Array {

}

Tambien es valido que si tu tienes una funcion constructora definas una clase que herede de esa funcion constructora:

function User(){

}

class Admin extends User {

}

En algunos escenarios puede pasar que necesitemos sobreescribir la funcionalidad que estamos heredando de la clase padre:

class User {
    saludar(){
        console.log("Hola usuario");
    }
}

class Admin extends User {
    saludar(){
        console.log("Hola soy admin");
    }
}

OJO que cuando nosotros estamos en una clase que esta heredando tenemos acceso a un metodo super que refiere a la clase a la que estamos heredando y a traves de ella podemos acceder a los metodos que hemos sobre escrito.

class User {
    saludar(){
        console.log("Hola usuario");
    }
}

class Admin extends User {
    saludar(){
        super.saludar();
        console.log("Hola soy admin");
    }
}

let admin = new Admin();
admin.saludar();

Esta caracteristica nos permite extender metodos del padre o sobre escribirlos sin duplicar la funcionalidad que hay en el padre.

En ese mismo sentido podemos llamar al constructor del padre utlizando la funcion super dentro del constructor de la clase hijo.

class User {
    constructor(nombre){
        this.nombre = nombre;

    }
    saludar() {
        console.log("Hola usuario");
    }
}

class Admin extends User {
    constructor(nombre){
        super(nombre);
    }
    saludar() {
        super.saludar();
        console.log("Hola soy admin");
    }
}

let admin = new Admin("Luis");
admin.saludar();
console.log(admin.nombre);

*/

class User {
    constructor(nombre){
        this.nombre = nombre;

    }
    saludar() {
        console.log("Hola usuario");
    }
}

class Admin extends User {
    constructor(nombre){
        super(nombre);
    }
    saludar() {
        super.saludar();
        console.log("Hola soy admin");
    }
}

let admin = new Admin("Luis");
admin.saludar();
console.log(admin.nombre);



