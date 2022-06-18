/*

Para continuar hablando de los veneficios y uso de los generadores y iteradores primero vamos a hablar de símbolos.

Los símbolos son un tema por si mismo, comencemos por decir que son un nuevo primitivo de lenguaje, además de los símbolos otros primitivos de lenguaje son Boolean NULL undefined number y String, la principal característica de los símbolos es que son únicos y qué queremos decir con eso, bueno vamos a tomar como ejemplo las cadenas.

Si tomamos dos cadenas iguales como 'CODY' == 'CODY podemos asumir que ambas cadenas son la misma y son iguales cierto, en condiciones tradicionales tiene todo el sentido del mundo que consideremos a ambas cadenas iguales, es lo que normalmente necesitamos, pero en otras ocasiones necesitamos algo que sea único e irremplazable.

Por ejemplo, supongamos que tengo un objeto muy importante al que necesito asignar un método que no puede ni debe ser reemplazable, nadie más puede modificar este metodo, ahora este mismo objeto se comparte entre decenas de archivos, incluso entre distintos proyectos, como me aseguro que nadie va a sustituir o a reemplazar este método tan importante que tengo, solo una cadena puede significar  que si alguien más se le ocurre o quiere ocupar el mismo nombre para un método distinto terminará por reemplazar y sustituir mi método y romper la funcionalidad del objeto tan importante.

Por otro lado usar un simbolo me asegura que el identificador que yo utilice para asignarle nombre a mí método es completamente único y no volverá a repetirse, por lo que reemplazarlo no será tan fácil como usar o que se te ocurra el mismo nombre o cadena descritiva.

El proposito de los simboos es agredar unicidad, es decir que un identificador sea verdaderamente unico.
Ahora listo para conocer los símbolos de manera práctica pasemos al siguiente apartado.

*/