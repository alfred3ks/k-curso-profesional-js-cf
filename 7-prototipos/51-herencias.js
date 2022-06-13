/*

En JS el proceso de herencia sucede a traves de prototipos, aunque tenemos la sintaxis de clases internamente estan usan los prototipos, es azucar sintaxis, podemos hacer que un objeto herede de otro usando object.create.

*/

// Creamos nuestra funcion constructora:
function Course(title){
    this.title = title;
}

// Metodo de la funcion constructora:
Course.prototype.inscribir = function(){
    console.log("Inscrito...");
}

// Ahora creamos un objeto:
let javaScript = new Course("Curso profesional de JavaScript.");

// Ahora utilizando object.create() vamos a crear otro objeto que herede del objeto javaScript:
let ruby = Object.create(javaScript);
console.log(ruby.title); // Hereda de javaScript.

// Lo comprobamos:
console.log(ruby.__proto__ === javaScript); // True.

// En Js es diferente la herencia con respecto a otros lenguajes, estos copian los atributos y metodos de donde heredan, en js no es asi comparten los atributos y metodos a traves de la cadena de prototipos.

// Ahora si modificamos una propiedad en ese objeto que hereda no se modifica en el objeto original: Esto es asi porque no se modifica esa propiedad en la cadena de prototipos, estamos asignando una propiedad al objeto nuevo.

ruby.title = "Curso de Ruby profesional";
console.log(ruby.title);
console.log(javaScript.title);

// Vamos a ver otro ejemplo creamos otra funcion constructora: Herencia entre funciones constructoras:

function LiveCourse(date){
    this.published_at = date;
    console.log(date);
}

LiveCourse.prototype = Object.create(Course.prototype);

// Ahora vamos a crear un objeto de LiveCourse:
let javaScriptVivo = new LiveCourse(new Date());
javaScriptVivo.inscribir();
console.log(javaScriptVivo);

/*

En resumen:
Ej JavaScript la herencia de prototipos funciona al incluir el prototipo de una clase en la cadena de prototipos de un objeto.

Un objeto puede heredar de otro si lo usamos como primer argumentos de Object.create().

Una funcion constructora puede heredar de otra si usamos el prototipo de la clase base como primer argumento de Object.create().y asignamos ese resultado al prototipo de la clase hija.



*/