# Vamos a ver las variables y constantes:

## Variable, Constante:

Es un nombre que apunta a un lugar de la memoria virtual. Las variables pueden cambiar su valor una vez definidas, las constantes no.

No es lo mismo almacenar una variable o una constante, las varibles hacen menos eficiente nuestro código ya que el lenguaje debe ocupar más espacio para estas porque asume que van a cambiar, lo contrario pasa con las constantes al ser un valor que no cambiara pues le asignan una valor fijo de la memoria virtual.

## Las variables para declararlas debemos usar las palabras reservadas:

- let o var para variables, pero ya no usaremos var. Ya veremos en un futuro porque.
- const para constantes.

## Para declarar variables o constantes debemos seguir unas reglas:

- Los nombres de las variables o constantes no deben contener espacios entre ellos.
- let nombre de pila = "Luis"; Esto no esta bien lo correcto es.
- let nombreDePila = "Luis";

## Las variables o constantes iniciar con una letra, guion bajo o el simbolo de dolar:

- let \_nombre = "Pepe";
- let nombre = "Pepe";
- let $nombre = "Adan";

## Existen ciertas palabras reservadas del lenguaje que no se deben utilizar:

- let
- const
- break
- while
- if. etc.

## Veamos unos ejemplo:

```javascript
// Variables y Constantes: Declaracion:
let nombre = 'Alfredo';
let apellido = 'Sánchez';
let edad = 22;
const PI = 3.1416;

// Cambio de tipos de las variables: El lunguaje es debilmente tipado:
let numero = 'dos cientos';
numero = 'cuatro cientos';
numero = 400;
```
