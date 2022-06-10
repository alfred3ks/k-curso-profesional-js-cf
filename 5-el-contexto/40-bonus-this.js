/*

Explicacion de this de Keepcoding porque lo anterior no me quedo muy claro:

*/

// Constructor de objetos:
function Coche(ruedas){
    this.ruedas = ruedas;
    this.cuantasRuedas = function(){
        console.log("El coche tiene " + this.ruedas + " ruendas.");
    }
}

// Creamos un objeto de tipo Coche:
let todoTerreno = new Coche(4);
todoTerreno.cuantasRuedas();

/*

Veremos como se pierde el this: Llamaremos el metodo de cuantas ruedas: OJO a la regla de oro donde veas los () de ejecucion a la izquierda es el this:

todoTerreno.cuantasRuedas(); Lo que esta a la izquierda es el objeto que ejecuta la funcion.

En el suguiente ejemplo vemos como usamos un metodo como callback:

*/

setTimeout(todoTerreno.cuantasRuedas, 4000);

/*

Vale en este ejemplo donde estan los () de ejecucion? no los tiene, quien ejecutara el metodo? pues setTimeout y esta funcion no tiene en su interior ningun metodo cuantasRuedas. Por eso this es undefined.

Vemos otra forma de que se pierde el this: Ver la regla de oro:

*/

const otraVariable = todoTerreno.cuantasRuedas;
otraVariable(); // Aqui no hay this

/*

ahora para evitar que se pierda el this usamos los metodos, call(), apply, bind():

bind() -> devuelve una funcion nueva pero con el this asignado.

*/

let otraVariable2 = todoTerreno.cuantasRuedas.bind(todoTerreno);
otraVariable2();

todoTerreno.cuantasRuedas.call(todoTerreno);
todoTerreno.cuantasRuedas.apply(todoTerreno);

setTimeout(todoTerreno.cuantasRuedas.bind(todoTerreno), 5000);














