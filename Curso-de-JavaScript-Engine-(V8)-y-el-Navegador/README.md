# **Historia de JavaScript**
JavaScript se creo en poco tiempo.

En el momento que nace la web era muy dificil buscar paginas ya que no existia un buscador en el momento y solo se debia guardar en nuestro pc la url de dicha web. Eran paginas estaticas de solo html y css, y a raiz la comunidad pedia una evolucion a la web y aqui nace JavaScript.

Breandan Eich crea a JavaScript, pero mucho antes este desarrollador ya habia creado un lenguaje para netscape llamado MOCHA, y nace en un aproximado de 2 o 3 semanas. al ser tan prematuro tuvo que evolucionar y se crea LIVESCRIPT que es lo mismo pero con algunas funcionalidades que hacia un poco mas interactivas las webs.

Y a finales del 1995 nace JavaScript y su nombre se debe a que en ese instante estaba de moda java y por temas de marketing se adopto ese nombre, pero son lenguajes totalmente diferentes. luego microsoft decide tomar a JavaScript y mediante ingenieria inversa, creando a jscript para su navegador "Internet explorer". 

Microsoft desata la inquietud una inquietud, ¿Que pasaria si cada navegador crea su propio lenguaje de script?, aqui es cuando nace ECMA y estandarizan el lenguaje de script para la web y elije a JavaScript.

Los siguientes breakpoints de JavaScript marcan profundamente a este legunaje como el desarrollo d eun nuevo motor engien (V8), nacimiento de node.js para trabaja JS en backend, el inicion de los Frameworks para frontend y en 2015 llega las actualizaciones anuales.

ECMAScript 6 llega con multiples actualizaciones a JavaScript, esto genera una serie de actualizaciones que le han otorgado unos grados mas de robustes. 

## **ECMAScript**
Es uan espedificacion estandarizada de Ecma international. Fue crado para estandarizar JavaScript y para ayudar a fomentar multiples imprementaciones independientes.


# **JavaScript Emgine**
Es el motor de JavaScript y corre en el navegador. Debemos tenerlo encuenta cuando se esta trabajando en frontend pues cada navegador tiene su propio Engine.

Nuestro computador no entiende codigo JavaScript puesto que no es un lenguaje de maquina ( *Machine Code* ), es aqui donde nace el motor de JavaScript, es un interprete entre nuestro lenguaje y nuestro computador. Literalmente realiza una comvercion de JavaScript a Machine Code, Este proceso es conocido como *Just in time compiler* o compilacion en tiempo real.

# **V8 y el Navegador**
V8 es el motor de JavaScript que corre en el navegador de chrome, aunque existen multiples motores de JavaScript, V8 es importante para JavaScript debido a la velocidad que le ha otorgado y se esta adoptanto para otros navegadores.

Ahora Chrome, Opera y Edge operan con el motor V8, hasta Firefox esta creando una version con este motor.

V8 nace a raiz de quere darle una estabilidad de rendimiento a un aplicacion web llamada Google Maps, puesto que no corria satisfactoriamente en otros navegadores. A si que crean Google Chrome con su motor V8 solucionando sus problemas de rendimiento en el Google Maps.

Luego expanden la robustes de V8 dando paso a aplicaicones web con una interaccion optima para el usuario.

# **Engine a Profundidad**
Cuando se carga nuestro archivo JavaScript en el engine o motor JavaScript, antes de iniciar la traducion a lenguaje de maquina, los primero que hace en el navegaador es generar un entorno global que es un objeto principal que se le llama window que hace 3 cosas: 
- Genera un objeto global
- Crea una variable llamada this, depende mucho del contesto en donde se esta llamando. En el entorno global this es igual al objeto global y es igual a window.
- El objeto global y this

Luego que genero nuestro entorno global, corre nuestro codigo en un stack de tareas y apilas las tareas una por una. 

Cuando se genera la interacion entre el motor de JavaScript y el navegador hace un parseo del documento JavaScript ayudando a encontrar las claves principales o keys que seran usadas para crear el arbol de sintaxis abstracta o ast, luego de interpretarlo genera el archivo en Bytecode que es entendible para la maquina.

Si en el proceso de interpretacion el profiler o monitor detecta codigo que se puede optimizar, se genera un compailer que lo optimizará, lo compilara y generará el archivo en Bytecode. Este es el paso donde se deteceta el hoisting o errores comunes en nuestro codigo aumentando de tiempo de ejecucion.

![proceso de conversion](./Proceso-de-conversion-entre-el-navegador-y-maquina.jpg)

# **Objeto global y hoisting**

Cuando el hoisting es detectado por el profiler o monitor, el compailer entrara a optimizar nuestro codigo. Ejemplo:

```js
console.log(nombre);
apellido();

var nombre = 'Manuel';
function apellido() {
  console.log('Montaño');
};
```
El output del codigo es

```js
undefined
Montaño
```

Estamos en presencia de un hoisting, puesto que estamos llamando variables y funciones sin ser declaradas inicialmente. 

El compailer al ver el la palabra 'nombre' dentro de nuestro console.log, interpreta que es una variable e inmediatamente crea una nueva variable inicializa como 'undefined' que es una keyword de JavaScript y la guarda en la memory heap. 

Para JavaScript las funciones tiene un grado de importancia, pues antes de crear el ast, JavaScript deja las funciones al inicio de nuestro codigo, dando la oportunidad de ser guardada antes de ser llamada.

# **Memory Heap**
Podemos representarlo como una repiza donde estaremos guardando valores de nuestras variables y nuestras funciones, esto no se guarda de manera lineal ni numerica.

# **Call Stack**
Nos dira como se va comportar nuestro codigo una vez en el navegador, como lo va llamar JavasSript y el navegador para ejecutar las tareas. Tenemos una pila donde las tareas se van apilar de abajo hacia arriba. 

JavasSript solo puede ejecutar una tarea a la vez y a esto se le llama sincronia, esto hace que JavasSript sea un poco lento pero todo depende como programemos. las tareas a ejecuatar se llama una a una de abajo hacia arriba.

# **Garbage Collection**
Es un proceso de limpieza de la memory heap y desecha los datos que ya no necesitamos para operar. Este proceso es por defecto pero tenemos tener cuidado con crashear la memoria realizando algun loop infinito o overstak.

# **Stack Overflow**
Es el proceso de sobre ocupar el call stack ocacionando un crasheo a nuestro navegador. Chrome debido a estos crasheos implemento un sistema de detencion para funciones que excede un auto llamado (Recursion), simplemente no ejecuta el codigo y nos muestra un mensaje de erro.

# **JavaScript Runtime**
Es el proceso sincrono de JavaScript, osea, el proceso de ejecutar tarea por tarea que estan en el call stack.

# **Asincronía**
El proceso de asincronia de JavaScript se da gracias a la interacion entre el motor de JS, Web APIs, Callback queue y Event loop.

### *Web APIs*
Son APIs que el navegador proporciona, no son parte del motor de JS pero si son accesibles en el entorno de ejecucion. Cuando el motor de JS detecta unas ejecuciones especiales como un http request, una manipulacion en el DOM o un setTimeOut, inmediatamente es enviado a la cola de Web APIs.

### *Callback queue*
Luego estas ejecuciones especiales pasan a Callback Queue donde seran ordenadas segun FIFO (Primeras en entrar, primerar en salir) y finalmente son ejecutadas en el callstack cuando este vacio.

### *Event Loop*
Es el encargado de comprobar continuamente que el callstack se encuentre vacio y de ser asi, empezara a pasar las ejecuaciones especiales del calllback queue al callstack. Si el callstack se encuentra ocupado, simplemente el event loop estara comprobando este estado constantemente.

Asi se completa el proceso de asincronia en JavaScript.