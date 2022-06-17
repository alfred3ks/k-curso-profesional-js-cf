/*

Las expresiones regulares nos permiten trabakjar con patrones de busquedas sobre texto. Esto nos permite validar que una cadena cumpla un formato especifico al hacer busquedas mas avanzadas basadas en patrones.

Una expresion regular puede crearse con alguna de estas dos alternativas:

Encerrandola entre dos barras invertidas:

-> / expresion regular /

O usando el constructor  new RegExp() para instanciar una nueva expresion regular.

En una expresion regular existen dos tipos de caracteres:

- Los literales, dice que buscara de manera literal esos caracteres en la cadena a evaluar.
- Los especiales, con el usao de caracteres especiales, tambien conocidos como metacaracteres. Los caracteres especiales tienen un significado especial como el de represntar cualquier digito, representar un espacio en blanco, el de agrupar, etc.

En JS los caracteres especiales se agrupan en 5 distintos grupos:
- Los de tipo caracter,
- Las aserciones,
- Los agrupamientos/rangos,
- Los cuantificadores,
- los unicode property scapes.

Para utilizar estas expresiones regulares haremos un ejemplo muy comun pero muy complejo a la vez. La identificacion de correos electronicos.

Buscar correos en una cadena es un tema bastante complejo.

Para el tema de correos el patron seria el siguiente:
- dos piezas de texot separadas por un @

*/

/.*@.*/;
/.{1,}@.{1,}\.com/;

/*

. -> el punto significa cualquier caracter
* -> cualquier cantidad de caracteres antes y despues del @
{1,} -> un caracter o muchos antes y despues del @
\ -> debemos escapar con barra invertida para que el punto del .com no se confunda con el punto de cualquier caracter.



Para probar la expresion regular usaremos la web:

https://regex101.com

Tambien podemos modificar una expresion regular con el usa de banderas. Existen 6 posibles banderas que modificaran el comportamiento de la expresion regular, estas banderas se represntan por un caracter que se coloca al final de la expresion regular.

*/
