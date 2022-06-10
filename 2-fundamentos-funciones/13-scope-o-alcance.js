/*

El scope o alcance en JS: Recomendacion no usar variables globales, o evitarlo en lo posible.

Las reglas que definen en que parte del codigo una variable esta disponible.

En JS existen 2 tipos de scope, el scope global y el scope local.

El scope global hace referencia a las variables, funciones y objetos que pueden ser usados y accedidas desde cualquier parte del codigo.

El scope local hace referencia a las variables que se definen con un alcance solo limitado donde son declaradas.

*/

// Scope global:
let nombre = "Laika";
console.log(nombre);

function decirHola(){
    nombre = "Cody";
    console.log("Hola " + nombre);
}

decirHola();

// Scope local:
function saludar(){
    //Variable solo existe aqui dentro del scope local.
    let nombre = "Pedro";
    return "Hola " + nombre;
}

console.log(saludar());

/*
Nota:

En JS se puede declarar una varaible sin usar var, let o const, esto no es recomendable pero si lo hacemos que sepamos q siempre, siempre se asignara esa variable al scope global, indeendiente de donde la declaremos.

*/


