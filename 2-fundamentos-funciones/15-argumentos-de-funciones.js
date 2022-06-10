/*

Las funciones se tratan de piesas de codigo que reciben datos los procesan y entregan resultados.

Para recibir informacion en una funcion se usan los argumentos.

Tenemos que tener claro dos conceptos cuando hablamos en las funciones, los argumentos y los parametros.

function cuadrado(numero){
    return numero * numero;
}

cuadrado(4);

Los parametros son las variables que se definen en los parentesis de la funcion. Y el argumento son los valores que le pasamos a la funcion cuando la ejecutamos. Los argumentos llenan los parametros.

En js los parametos tienen las siguientes caracteristicas:

- No tiene un tipo definido, un parametro puede recibir un argumento de cualquier tipo.
- Al llamar la funcion no se revisa la cantidad de paramtros enviados, puedes enviar mas o menos argumentos de los listados. Esto es muy diferente como funcionan otros lenguajes de programacion comparados con JS.
let resultado = cuadrado();
console.log(resultado); => NaN. ¿Whatsss? Asi es devuelve el tipo NaN aun cuando no hemos enviado ningun argumento.
- Cuando no envuiamos ningun argumentos este paramtro pasa a ser undefined.
function cuadrado(numero){
    console.log(numero); => undefined.
    return numero * numero;
}

cuadrado();

En algunos escenarios es recomendable asignarle algun valor al parametro para que este no sea undefined. De esta manera si la funion lleva un argumento esta no toma el valor por defecto del parametro sino el del argumento.

function cuadrado(numero=20){  => ponemos un valor por defecto.
    return numero * numero;
}

cuadrado();

Siempre que vayamos a definir parametros por defecto estos deben ir despues de los parametros que no tengan valores por defecto:

function saludar(apellido, nombre="Luis"){
    console.log(nombre, apellido);
}

saludar("Mario", "Moncada");

- Si una funcion recibe una cantidad variable de argumentos estos los podemos recoger usando la funcion arguments.

function sumaTodos() {
    console.log(arguments);
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i];
    }
    console.log(suma);
}

sumaTodos(1, 2, 3, 4);

*/

// Parametros por defecto despues que los sin defecto.
function saludar(apellido, nombre = "Luis") {
    console.log(nombre, apellido);
}

saludar("Mario", "Moncada");

// Funcion arguments:
function sumaTodos() {
    console.log(arguments);
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i];
    }
    console.log(suma);
}

sumaTodos(1, 2, 3, 4, "hola");