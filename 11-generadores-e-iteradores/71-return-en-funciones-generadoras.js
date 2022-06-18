/*

yield es muy parecido a return, esto quiere decir que aunque no vemos la declaracion del return, se retorna internamente sin la necesidad de la declaracion.

Ahora nos preguntaremos que pasara si llamamos a return desde una funcion generadora.


*/


function* counterN() {
    for (var i = 1; i <= 5; i++) {
        yield i;
    }
}

let generatorNuM = counterN();
console.log(generatorNuM.next());
console.log(generatorNuM.next());
console.log(generatorNuM.next());
console.log(generatorNuM.next());
console.log(generatorNuM.next());
console.log(generatorNuM.next());

// Veamos lo del return: Pasa lo mismo que con yield
function* retornador(){
    return 3;
}

let g = retornador();
console.log(g.next());

/*

Dentro de una funcion generadora usando return es como llamar a yield y adicinalmente terminar el generador.

Todo lo que se ponga despues de return no se ejecutara porque el generador ya ha terminado, a diferencia de yield que si.

Para muchos yield es como tener un return dentro del contexto de un generador. Es decir produce resultados. yield se puede llamar multiples veces return termina el generador.

*/



