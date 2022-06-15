/*

El increible articulos Lin Clark en la página de hacks mozilla.org contiene una excelente explicación acerca de por qué los módulos han sido necesarios por años en el desarrollo de proyectos en JS.

A lo largo de la historia de JS siempre hemos tenido la necesidad de separar código en elementos independientes por ejemplo para poder exportar e importar librerías.

Sin embargo hasta antes de los módulos no existe una manera a través de la cual nosotros pudiéramos obtener una variable, una función de un archivo externo y traerla a nuestros proyecto.

La solución para esta limitante de lenguaje era aprovechar el escope el alcance global del que ya hemos hablado en temas anteriores, las librerías solían agregar una variable al alcance global de manera que a través de esta variable u objeto podíamos aprovechar la funcionalidad en otros archivos que también comparten el mismo alcance, así es como el signo del dólar ($) se hizo tan famoso en JS es que este es el objeto JQuery le agregaba al scope global y era a través del cual aprovechamos todos los beneficios de poder utilizar Jquery.

Esta solución tiene varias deficiencias, la primera de ellas es que al estar las variables en el scope global podía pasar que algún otro archivo cambiar el valor de esta variable borrando la funcionalidad de la librería que habíamos importados.

Por ejemplo que estás trabajando en un proyecto de miles de líneas de código y cientos de archivo en un momento de distracción decías que era una variable en el scope global con el identificador de el signo de dolar ($) y le asigna un número en ese momento pudiste haber roto la funcionalidad completa del proyecto si es que en algún otro lugar dentro de los cientos de archivos alguien más había usado esta variable para otra cosa distinta a la que tú estás usándola en ese momento.

Básicamente estás reemplazando un objeto completo con toda su funcionalidad por otro que tu habias asignado, por otro lado un problema aún mayor de presentaba cuando por alguna razón intentaba  remover alguna librería o algún archivo que estuvieras utilizando, el problema está en que es muy complicado saber cuántos elementos de tu código se verán afectados o se verían afectados por la eliminación de este archivo.

Por ejemplo regresemos a Jquery supongamos que quieres precisamente eliminar a Jquery de tu proyecto, tendrás que ir a archivo por archivo viendo quiénes usan las variables globales que está librería definia, a manera que al eliminar estos no se vean afectados.

Tal como lin Clark mensiona a uno de los problemas de la forma antigua de compartir código entre archivos es que la relación entre los archivos es implícita es decir nosotros no la definimos no hay un punto en el que digamos este archivo depende de este otro archivo o esta variable se usará en estos otros archivos.

Los módulos de ES introducen una manera explícita de establecer estas relaciones como parte de la sintaxis de los módulos, de hecho existen instrucciones para decir estos archivos quieren exponer estos elementos y por supuesto existen otras instrucciones para decir quiero importar estos elementos de este archivo y esto otros de este otro archivo.

El beneficio por supuesto de una relación explícita es que si yo necesito mover algo si necesito eliminar otra cosa puedo claramente ver en la declaración de esta relación qué elementos se verán afectados es decir si quiero eliminar Jquery tengo que primero buscar que otros archivos están diciendo que están importando Jquery.

Los modelos además no usan el escope global, por si estoy sobre escribiendo una variable existente de hecho como aprenderás más adelante los módulos introducen sus propios scope, el llamado Module scope por lo que no debes preocuparte por si las variables que usas en tu módulo fueron utilizadas en otro.

En resumen los módulos son una mejora significativa para establecer la relación entre los archivos que se usan en tu proyecto para definir explícitamente qué cosas vas a exportar de un archivo y qué cosas vas a importar en otro los beneficios son muchos además de los que aquí hemos mencionado tan es así que los módulos son hoy en día un estándar en el desarrollo de aplicaciones con JS, es por eso que será muy importante que aprendas cómo trabajar con ellos.

*/