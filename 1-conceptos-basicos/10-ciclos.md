# Los ciclos:

Los ciclos en programación ayudan a ejecutar un bloque de código muchas veces.

En JS tenemos varios ciclos que podemos utilizar:

## Ciclo for. -> Se ejecuta en 3 partes:

1- Instruccion inicial,
2- Condicion,
3- Instruccion despues de cada iteracion.

Aqui vemos como seria:

for(Instruccion Inicial; Condicion; valor de iteracion){
code...
}

Se pueden usar dos palabras reservadas del lenguaje:
break y continue.

- break términa el ciclo.
- continuo lo que hace es saltarse esa iteración.

Ademas del ciclo for() tenemos el ciclo while() y do while.
Es un ciclo un poco mas abierto.

Veamos unos ejemplos:

```javascript
// Ciclo for: Imprimir los números del 1 al 10. Vemos en acción break y continue:
for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i === 5) {
    // break;
  }

  if (i % 2 != 0) {
    continue;
  }
  console.log('Es par');
}
console.log('Me ejecuto despues del ciclo for()');

// Ciclo while:
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// Ciclo do-while: Este ciclo a diferencia del ciclo while es que siempre se ejecuta la primera instrucción antes de la condición.
let j = 1;
do {
  console.log('Me ejecuto antes...');
  j++;
  console.log(j);
} while (j <= 10);
```
