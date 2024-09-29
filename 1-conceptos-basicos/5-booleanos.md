# Booleanos:

True o False, verdadero o falso.

Indican si un dato es verdadero o false, son útiles cuando usamos expresiones booleanas. cuando usamos los operadores lógicos de comparación.

Algunas estructura de control o ciclos los usan y pueden ser muy utiles.

Con la funcion Boolean() podemos saber si una expresión o dato es true o false.

## En JS los valores que evaluan a false son: Los objetos:

- undefined
- NaN
- null
- -0
- 0
- ""
- false

```javascript
let notificaciones_activas = true;
let activo = false;
console.log(notificaciones_activas); // true
console.log(activo); // false

// Funcion Boolean:
console.log(Boolean(1)); // true
console.log(Boolean('')); // false
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(0)); // false
console.log(Boolean('false')); // true, evalua la cadena.
console.log(Boolean('hola')); // true, evalua la cadena.
console.log(Boolean(false)); // false
```
