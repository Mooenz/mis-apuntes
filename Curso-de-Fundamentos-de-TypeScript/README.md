# **Curso de Fundamentos de TypeScript**

Es un super conjunto tipado de javascript, que copila a javascript. Es usado en cualquier navegador o host y es de codigo abierto.

- lenguaje de programacion tipado: Provee un conjunto de tipos para utilizar junto con las variables los cuales se puede personalizar o extender.
- Lenguaje de alto nivel: el codigo que se escribe es legible para humanos y tiene un alto nivel de abstraccion del codigo maquina.
- El compilador genera codigo JavaScript.
- Es de codigo abierto, osea, se puede encontrar el codigo fuente en el repositorio de github y estar al tanto de las actualizaciones.
- Desarrollo en cualquier O.S: no importa el sistema operativo, se lograra ejecutar.
- El codigo se puede ejecutar en cualquier navegador o plataforma.

Codigo JavaScript es valido para TypeScript. Tambien podemos entenderlos como un super conjunto de JavaScript ya que soporta todo lo especificado en ES5 y ES6.

Typescript es usado multiples compañías.

## **Por que usar TypeScript**

Con typescript logramos:

- Podemos usar el paradigma de programacion orientada a objetos
- Podemos potenciar nuestro JavaScript
- Tenemos mas productividad ya que se integran con una variedad tecnologias que permite mayor productividad.
- Tiene poderosos sistemas de tipos,
- TypeScript se beneficias de las nuevas especificaciones y caracteristicas de JavaScript.
- Es un proyecto suprema mente activo ya que es open source.
- Tiene actualizaciones periodicas.

Según un estudio usando TypeScript en nuestro proyectos podemos tener hasta un 15% menos de bugs

## **Compilador TypeScript**

Instalamos el compilador `npm install -g typescript` y al terminar ejecutamos `tsc -v` para saber su version y si esta bien instalado

### **Como usamos el compilador**

Los archivos .ts son los archivos escritos es TypeScript y se ejecutan con el compilador tsc y lo ejecutamos de la siguiente manera `tsc nombreArchivo.ts` el cual dara como resultado un archivo compilado de JavaScript.

En este punto podemos ejecutar este archivo resultante con node de la siguiente manera `node nombreArchivo.js`.

Para simplificar este proceso podemos agregar un observador de cambios en cierto archivo TypeScript, el comando `tsc --watch nombreArchivo.ts` activa este observador y compilando cada vez que se haga un cambio en el archivo .ts.
