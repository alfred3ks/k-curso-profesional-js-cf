## Condicionales:

Cuando necesitamos que un grupo de bloque de código se ejecute cuando un condición o criterio se ha cumplido.
Las condiciones en JS se hacen con el condicional if:

```javascript
// declaracion simple:
if(expresion){
}

// declaracion completa:
if(expresion){
code...
} else {
code...
}

// Tambien podemos encadenar varios if:
if(condicion){
code...
}
if(condicion){
code
}
if(condicion){
code
}

// Tambien tenemos el else if: Multiples condicionales:
if(condicion){
code...
} else if(condicion){
code...
} else if(condicion){
code...
} else {
code...
}
```

Veamos unos ejemplos:

```javascript
if (10) {
  console.log('10 es un valor truthy....😂');
}

if (0) {
  console.log('10 es un valor truthy....');
} else {
  console.log('0 es un valor falsy....😉');
}

let edad = 18;
if (edad >= 18) {
  console.log('Eres mayor de edad...👌');
} else {
  console.log('Aun te queda chavalin...😁');
}

let nombre = 'Pepito';
if (nombre === 'Andres') {
  console.log('Soy Andres... 👌');
} else if (nombre === 'Pepito') {
  console.log('Soy Pepito... 👍');
} else {
  console.log('Usuario desconocido...😒');
}
```
