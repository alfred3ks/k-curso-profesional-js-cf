/*

JS es un lenguaje orientado a objetos que a diferencia de otros lenguajes no esta basado a objetos sino a prototipos.

En un lenguaje orientado a clases estas se usan para compartir codigo, en JS se usan directamente objetos para compartir codigo entre ellos.

Particularmente se usan los prototype.

En terminos practicos el prototype es un objeto asociado a cualquier funcion donde cada funcion incluye una propiedad prototype con un objeto que podemos usar para compartir codigo.

Cualquier funcion puede usarse como funcion constructora y esta tiene una propiedad de nombre prototype incluida.

function Curse(){

}

console.log(Curse.prototype);

*/

function Course() {
}
console.log(Course.prototype);
/*
Vemos que prototype es un objeto {}. Podemos usar este objeto para compartir codigo con otros prototipos o con las instancias creadas a partir de la funcion constructora.
*/
// Este metodo del objeto Couse esta en el prototype de este.
Course.prototype.inscribir = function(nombre){
    console.log(`El usuario ${nombre} se ha inscrito correctamente.`);
}

// Creamos un objeto e usamos su metodo inscribirse:
let course = new Course();
course.title = "JavaScript";
course.abandonar = function(){
    console.log("Chaooo");
}
course.inscribir("Luis");

console.log(course);
/*

Al hacerlo por la consola del naveador nos muestra:

Course {}

Y nos muestra la propiedad prototype __proto__

Aqui nos debemos quedar que existe la cadena de prototipos detras del objeto, que cuando nosotros mandamos a llamar una funcion o propiedad sobre un objeto la busca en el objeto sino la encuentra hace el recorrido por la cadena de prototipos hasta que llega al object. Si lo encuentra lo llama.



*/

