# Undefined,Null, NaN, infinity:

Vamos a ver el tema de undefined, null, NaN y infinity. Son unos tipos de datos especiales.

## undefined: Es una variable.

El tipo de dato undefined, es cuando tenemos declarada a una variable pero no se le ha asignado ningun valor.

```javascript
let nombre;
console.log(typeof nombre); undefined.
```

## null: Es un objeto:

Cuando hablamos de null estamos hablando de un objeto especial de JS que indica la ausencia de valor.

```javascript
let saldo = null;
console.log(typeof saldo);
object;
```

## NaN: Not a number:

```javascript
let operacion = "hola" \* 3;
console.log(operacion); NaN
```

## infinity:

Ahora veremos un objeto llamado infinity a diferencia de otros lenguajes en JS dividor por cero no da error, da infinito.

```javascript
let division = 100 / 0;
console.log(division); //infinity
```
