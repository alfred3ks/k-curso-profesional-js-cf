/*

Uno de los conceptos claves de la POO es la encapsulacion. La importancia de encapsular reside en hacer nuestros objetos eficientes y seguros ocultando los detalles que no son relevantes y ofreciendo solo aquellos datos que otros objetos necesitaran para interactuar con nosotros.

La encapsulacion es esconder las propiedades del objeto y ofrecer metodos para leerlos y modificarlos sin que se acceda a la propiedad original.

Para definir metodos accesores en una clase en JS podemos utilizar la palabra reservada get y set antes del nombre del metodo.

class User {
    get nombre(){ return "Alfred";}
    set nombre(nombre){}

    saludo(){
        console.log("Hola ¿como estas?");
    }
}

Los metodos getter que definimos con la palabra reservada get antes del metodo se usan para obtener o leer el valor de una propiedad. Se diferencian de otros metodos en la clase porque al llamarlos no necesitamos utilizar los parentesis para ejecutarlo.

let user = new User();
console.log(user.nombre);
user.saludo();

Por otra parte el metodo setter se usa para asignar un valor nuevo a algunas de las propiedades, se diferencia de otros metodos ya que son llamados cuando utilizamos el operador de igualdad. (=)

class User {
    get nombre() { return "Alfred"; }
    set nombre(nombre) {console.log(nombre); }

    saludo(){
        console.log("Hola ¿como estas?");
    }
}

let user = new User();
// Getter:
console.log(user.nombre);
user.saludo();

// Setter:
user.nombre = "Pepito";

Para culminar vamos a combinarlo con una propiedad del objeto:

class User {
    get nombre() { return this._nombre; }
    set nombre(nombre) { this._nombre = nombre; }

    saludo(){
        console.log("Hola ¿como estas?");
    }
}

let user = new User();

// Setters: Asi se llaman
user.nombre = "Pepito";

// Getters: Asi se llaman
console.log(user.nombre);
user.saludo();

Se suele usar el guion bajo _nombre para diferenciarlo del nombre de los metodos get y set. Si no lo haces la app falla.

Ahora ¿porque estos metodos son importantes?

- primero podriamos dentro de los metodos get y setter hacer validaciones si en ves de enviarnos una cadena nos envian un numero lo podriamos validar ahi.

_ Los metodos getters y setters nos permiten tener control de las propiedades del objeto.

*/

class User {
    get nombre() { return this._nombre; }
    set nombre(nombre) {
        if(typeof nombre != "string"){
            throw new Error("No es una cadena")
        } else {
            this._nombre = nombre;
        }
    }

    saludo(nombre){
        console.log("Hola " + nombre + " ¿como estas? ");
    }
}

let user = new User();

// Setters: Asi se llaman
user.nombre = "Alfredo";

// Getters: Asi se llaman
console.log(user.nombre);
user.saludo("Alfredo");

