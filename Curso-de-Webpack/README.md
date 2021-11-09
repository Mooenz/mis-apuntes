# **Curso de Webpack**

## **Que es Webpack**

Es una herramienta que nos permite preparar nuestro codigo para produccion. Trabaja con Javascript, imagenes, archivos estaticos, fuentes, css y prepara cada una de las particularidades de nuestro proyecto para ponerlo en produccion.
Nacio en el 2012 desde ese entonces muchas empresas lo usan como core de sus proyectos.

Tambien podremos gestionar las dependencias, ejecutar tareas, conversion de formas, habilitar un entorno de desarrollo local, cargar los modulos de JavasCript, etc. Es importante tener presente que webpack tiene una filosofia y es trabajar de forma modular, osea, que dividiremos nuestro codigo codigo por modulos y luego ser unido al final del proyecto para ser enviado a produccion.

webpack es una herramienta muy importante para el desarrollo frontend.

## **Conceptos Básicos**

Webpack es un paquete de modulos estaticos para aplicaciones de JavaScript modernas. Webpack construye un grafico de dependencias que mapea cada modulo para convertirlo en uno o mas modulos ya sea el caso.

Desde webpack ya no necesitamos un archivo de configuracion, sin embargo debemos entender que debemos tener un punto de entrada `index.js` dentro de una carpeta especifica. Consideremos que debemos tener un punto de salida es la carpeta `dis` donde se añadirán todos los elementos que estaremos trabajando.

Contaremos con varios elementos particulares con los cuales lograremos trabajar como el modo de produccion, modo de desarrollo y una opcion para ver los cambios en tiempo real y poder recopilar nuestro proyecto para analizar cada cambio realizado.

Webpack dispone de Loader y plugins que permite prepara particularidades de proyecto, con los Loader permitimos a webpack entender por ejemplo JSX que es la sintaxis de react. Con los plugins podemos añadir configuraciones o elementos particularidades extendiendo sus funcionalidades, ejemplo habilitar un modo de desarrollo local que permite tener un puerto especifico y ver los cambios en real-time y analizar sus cambios.

## **build con Webpack**

Creamos la carpeta de nuestro proyecto y la inicializamos con git y npm:

- `git init`
- `npm init -y`

Luego vamos a crear la carpeta `src` contendra el archivo `index.js` que sera el punto principal o entrada de nuestro proyecto Instalamos Webpack `npm i webpack webpack-cli -D`, `webpack-cli` para poder trabajar con comando dentro de la terminal.

`npx webpack` ejecutar webpack para que identifique nuestro proyecto y el vea cual es el archivo de entrada, esto nos genera una carpeta llamada 'dist' y dentro de ella un archivo main.js donde contendra todo nuestro codigo Javascript optimizado para cualquier navegador.

el _Modo de Desarrollo_ se activa con el comando `npx webpack --mode development` nos activa una vista en el archivo main.js lista para ser analizada en caso de contener errores o que necesitemos optimizar.

el _Modo de produccion_ la activamos con `npx --mode production` retorna un codigo comprimido mucho mas limpio para usar.