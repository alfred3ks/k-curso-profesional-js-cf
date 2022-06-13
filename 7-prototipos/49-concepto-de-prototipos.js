/*

Conceptos de prototipos
Vamos a hacer un repaso de los conceptos que hemos aprendido en este tema y que son relevantes cuando hablamos de prototipos en JavaScript.

Tenemos la propiedad prototype, todas las funciones tienen esta propiedad y apunta al prototype object.

El prototype object es el objeto al que podemos asignar métodos y propiedades que queremos compartir en el prototype chain o cadena de prototipos.

Cuando creamos un objeto de una función usando new, se asigna una propiedad proto que apunta al prototype de la función con la que se creó el objeto, también conocida como función constructora. Esto quiere decir que podemos decir que proto apunta al prototype de la función constructora.

El prototype chain o la cadena de prototipos hace referencia al enlace que se crea entre prototipos que tienen su propio prototipo, que tienen su propio prototipo. Cuando buscamos un método o una propiedad en un objeto, se buscará inicialmente en el objeto y luego en la cadena de prototipos.

El último eslabón de la cadena de prototipos es Object.prototype, este objeto es usado para definir métodos que compartan todos los objetos del lenguaje, ya que eventualmente la cadena de prototipos termina aquí.

El prototipo de una función constructora apunta por defecto al prototype de Object, aunque esto puede ser modificado.

Un dato interesante es que cualquier objeto creado con la notación JSON enlaza su propiedad proto al prototype de la función constructora Object.


*/