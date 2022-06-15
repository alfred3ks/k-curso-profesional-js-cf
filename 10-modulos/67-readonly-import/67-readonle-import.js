/*

Read only o solo lectura es una caracteristica de los elementos que no pueden modificar su valor. Solo podemos leer la informacion que tienen pero no cambiarla.

Resulta que cuando importamos un valor de un modulo externo recibimos una version ReadOnly de dicho valor.

No podemos modificar los valores de esos datos que estamos importando de otros modulos.

Es por eso que rara ves veras una exportacion de una variable usando let,

OJO una variable puede cambiar dentro del modulo pero no fuera de el.

OJO aunque la pongamos declarada la variable con let nos dara error porque esa una variable solo de lectura.
TypeError: Assignment to constant variable.

Osea si deseamos modificar la variable hay que hacerlo desde el modulo.

*/