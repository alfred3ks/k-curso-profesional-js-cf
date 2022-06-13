/*

Podemos comenzar por pensar en el objeto prototype de una funcion constructora como un espacio para definir elementos que se compartiran entre todos los objetos que se generan a partir de esa funcion constructora.

*/

function Course(){}
Course.prototype.inscribir = function(){
    console.log("Ya llegue.");
}

// Creamos un par de objetos de esa funcion constructora:

let javaScript = new Course();
let ruby = new Course();

javaScript.inscribir();
ruby.inscribir();

// Si modifico el metodo inscribir despues de instanciar los objetos esto como es una cadena se modificara en los objetos instanciados, esto demuestra que comparte los metodos del prototipo, no los copia:

Course.prototype.inscribir = function () {
    console.log("Ya llegue. V2");
}

javaScript.inscribir();
ruby.inscribir();

// Tambien podemos agregar nuevos metodos al prototipo despues de crear las instancias, no pasa nada se agregan:
Course.prototype.otro = function(){ console.log("Soy otro metodo...🤡");}

javaScript.otro();
ruby.otro();

// Ahora, el objeto prototype es compartido entre todas las instancias podemos usarlo para compartir informacion entre ellos.
Course.prototype.conteo = 0;
console.log(javaScript.conteo);
console.log(ruby.conteo);
// Esta propiedad la podemos actualizar desde cualquiera de las instancias del objeto:
javaScript.__proto__.conteo += 1;
ruby.__proto__.conteo += 1;
console.log(Course.prototype.conteo);
