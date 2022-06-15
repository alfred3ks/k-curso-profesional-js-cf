/*

Una parte inportante del tiempo como desarrolladores invertimos trabajando con colecciones un tipo muy común de colección de hechos con los arreglos alternativamente podemos trabajar con colecciones usando iteradores y generadores y lo digi entre comillas porque la principal ventaja de los iteradores y los generadores que traen en el concepto de enterar sobre un rango de datos pero sin la necesidad de una colección.

La clara ventaja está en el rendimiento de nuestra aplicación, cuando usamos un arreglo en JS es necesario que el arreglo completo se aloje en la memoria virtual, esto puede ser un trabajo trivial para una colección de 5 o 10 o 100 elementos pero qué pasa con trabajamos con colecciones de datos más grandes o con colecciones de datos infinitos qué pasaría si quisiéramos enterar una colección de los valores del cero al infinito bueno sería imposible hacerlo con arreglos porque la memoria virtual tiene un límite de cuánta información pueda alojar y claro mucho antes de llegar a este límite el rendimiento de nuestra aplicación se vería afectado por intentar almacenar y procesar demasiados datos.

Aquí entran los iteradores y los generadores, conceptos con los que podemos desarrollar nuestros propios mecanismos de iteracion sin tener que alojar todas las colecciones en la memoria virtual trabajando con un dato a la vez, adicionalmente estas nuevas estructuras permiten que implementemos el concepto de iteracion sobre objetos personalizados, luego de que aprendas la sintaxis y el funcionamiento de ambos conceptos podrás convertir tus propias estructuras de datos en iterables que pueden ser recorridos por el lenguaje.

Podemos concluir entonces que lo que aprenderás en este bloque el curso te beneficiará en dos aspectos importantes, una mejora del rendimiento de tu aplicación al sustituir los arreglos que cargan todos los datos en la memoria virtual trabajando en cambio con una sola vez, dos implementar tu propia lógica de integración para las estructuras que realizas.

Antes de comenzar con la sintaxis quiero que entiendas que aquí habrá dos cosas importantes que aprender.

Por un lado la sintaxis, esto es lo mas sencillo de explicar como definimos y usamos un iterador, luego está el cuando debes usarlos como puedes aprovecharlo este es la parte más compleja y seguro tomará tiempo de práctica, tratare de definir ejemplo realistas que te viene a darte una idea de dónde puedes aprovechar lo que aprenderas.

*/