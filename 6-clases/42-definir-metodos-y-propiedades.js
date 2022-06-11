/*

Vamos a ver como definir los metodos de una clase y sus atributos o propiedades. La sintaxis para declarar metodos y propiedades puede variar.

Podemos definir propiedades asignandolas a this. Que en una clase debe representar el objeto instanciado.
En versiones modernas de JS pero con limitaciones a soporte limitado a navegadores modernos podemos definir los atributos al inicio de la clase mas similar a lo que hace en Java.

class Curso {
    title = "Curso de Python";

}

Cualquier metodo puede asignar propiedades utilizando this: No necesariamente se tienen que definir antes o en el constructor. Pueden definirse en cualquier parte de la clase asignandolas a this.

class Curso {
    title = "Curso de Python";
    inscribirse(nombre){
        this.nombre = nombre;
    }

}

Podemos crear nuestro metodo constructor:

class Curso {
    title = "Curso de Python";
    constructor(){
        this.inscribirse = function(nombre){
            this.nombre = nombre;
        }
    }
}

Podemos usar funciones flechas para los metodos de la clase:

class Curso {
    title = "Curso de Python";
    inscribir =(nombre)=>{
        this.nombre = nombre;
    }

}

*/

class Curso {
    title = "Curso de Python";
    inscribir = (nombre) => {
        this.nombre = nombre;
    }

}