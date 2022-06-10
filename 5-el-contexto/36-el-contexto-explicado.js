/*

Vamos ha hablar del contexto: Es un tema bastante importante que debemos entender.

Cuando hablamos del contexto nos podemos referir al valor que tiene la palabra reservada this.

Cuando el interprete evalua esta palabra dependiendo de donde esta, dependiendo de que objeto es, que funcion es, puede adoptar un valor diferente.


*/

// Contexto global: Probar en el navegador: En node es diferente.
console.log(this); // En el navegador this es objeto Windows. Windows es quien ejecuta la funcion.

// Dentro de una funcion:
function demo(){
    console.log(this);
}

demo();

// Una funcion dentro de un objeto:
let obj = {
    demo:function(){
        console.log(this);
    }
}

obj.demo(); // El valor del contexto es el objeto que ejecuta la funcion osea obj.

// El valor de this depende de donde de ejecuta la funcion y no donde se declara:
function demos(){
    console.log(this);
}

let objeto = {
    func:demos
}

objeto.func(); // Aqui es donde se asigna el valor de this. En su ejecucion no en su declaracion.

// Por eso cuando asignamos un metodo o lo enviamos como argumento pierde su referencia original.
let obj1 = {
    func:function(){
        console.log(this);
    }
}

// Reasignamos la funcion:
let fun = obj1.func;
fun();

// Ahora enviamos la funcion como argumentos:
function ejector(f){
    f()
}
ejector(obj1.func);

// Para tener claro esto de this podemos decir es quien llama la funcion.

let estudiantes = {
    nombre: "Juan",
    saludar:function(){
        console.log("Hola soy " + this.nombre);
    }
}

estudiantes.saludar();

let f = estudiantes.saludar;
f(); // Aqui se rompe, pierde el contexto

setTimeout(estudiantes.saludar, 1000); // Aqui tambien se rompe.

// Pero porque se rompe? es claro porque cambia el objeto que esta llamando a la funcion. Esto no es una follo del lenguaje es una flexibilidad del mismo porque muchos metodos de los objetos se pueden usar en otro objetos.

