/*

Es posible añadir propiedades o metodos estaticos auna clase si colocamos la palabra static antes de la definicion del metodo o la propiedad.

class Api {
    static get(){
        console.log("Soy un metodo estatico");
    }
}

Este metodo get forma parte d ela clasee Api y no del objeto. osea podemos llamar a ese metodo sin tener que instanciar un objeto:

Api.get();

En el caso de las propiedades esatticas la sintaxis es similar:

class Api {
    static ENDPOINT = "localhost:3000";
    static get() {
        console.log("Soy un metodo estatico");
    }
}

Api.get();
console.log(Api.ENDPOINT);

La pregunta del millon, cuando un metodo tiene que ser estatico o no:

La MDN tiene un apartado que resumen bien el tema:

Las funciones estaticas usualmente son funciones de utilidad, tales como crear o clonar objetos, miestras las propiedades estaticas son utiles para cachear, almacenar configuraciones, o cualquier dato que no necesita ser replicado en cada instancia. son valores que no cambiaran entre los objetos.

*/

class Api {

    static ENDPOINT = "localhost:3000";

    static get() {
        console.log("Soy un metodo estatico");
    }
}

Api.get();
console.log(Api.ENDPOINT);