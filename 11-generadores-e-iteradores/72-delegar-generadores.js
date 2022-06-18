/*

yield dentro de un generador se manda a llamar junto con una expresion que produce un resultado, este resultado eventualmente se asigna a la propiedad value del objeto que retorn a yield. a yield tambien podemos enviarle una funcion generadora y delegar la continuidad de la ejecucion del codigo a otro generador.

A este concepto se le llama delegacion de generadores. Un generador delega a otro la continuidad, esto nos permite encadenadar generadores todos los que queramos en la ejecucion de nuestro codigo.


*/

function* counter() {
    for (var i = 1; i <= 5; i++) {
        yield i;
    }
}

let generator = counter();

// Veamos lo del return: Pasa lo mismo que con yield
function* retornador() {
    yield*counter();
    console.log("Regrese a retornador.");
    yield "Soy el siguiente yield dentro de retornador.";
}

let g = retornador();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());


