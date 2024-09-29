# Los números, operaciones aritmeticas:

Los números que se utilizan para operaciones matematicas en JS se dicen que son de tipo Number. Sin importan si son enteros o decimales.

Con estos números podemos hacer las operacionaes matematicas comunes como lo son:

- suma
- resta
- multiplicación
- division
- modulo

Para operaciones mas complejos tenemos la libreria Math. A traves de sus metodos podemos hacer varias operaciones.

En la web de w3schools podemos ver estos ejemplos:

https://www.w3schools.com/js/js_math.asp

```javascript
const edad = 24;
const cambio = 2.5;

const a = 5;
const b = 12.5;

const suma = a + b;
const resta = a - b;
const producto = a * b;
const division = a / b;
const modulo = a % b;

const PI = Math.PI; // Obtenemos el valor de PI
const potencia = Math.pow(10, 2); // Obtenemos la potencia de un número
const potenciaUno = Math.pow(10, 3);
const round = Math.round(6.5); // redondea al número mas cercano, en este caso 7
const roundOne = Math.round(5.3); // redondea al número mas cercano, en este caso 5
const raiz = Math.sqrt(4); // Asi obtenemos la raiz de un número
```
