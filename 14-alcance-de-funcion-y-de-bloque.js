/*

El alcance local se divide en dos, en el alcance de funcion y en el alcance de bloque.

A partir de ES6. Con al introduccion de let y const tambien se introduce el alcance de bloque.

Los recursos generados o contenidos en un bloque solo estan dsiponibles dentro de ese bloque y no en toda la funcion.

*/

function saludar1(nombre){
    if(nombre){
        var msj = "Hola " + nombre;
    }
    console.log(msj);
}

saludar1("Pepe");

/*

Con var la variable tiene alcance de funcion y por eso se puede mostrar el mensaje, pero si declaramos la variable con let o const veremos que nos dara un fallo, nos dira que la variable msj no esta definida. Lo vemos a continuacion:

*/

function saludar2(nombre){
    let msj;
    if(nombre){
        // let msj = "Hola " + nombre;
        msj = "Hola " + nombre;
    }
    console.log(msj);
}

saludar2("Andres");

/*

Para solucionar el fallo del alcance local de bloque debemos definir la varaible en el bloque donde se va ser llamada.

*/