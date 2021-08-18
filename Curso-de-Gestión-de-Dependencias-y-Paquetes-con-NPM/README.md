# **NPM (Node Package Manager)**
Es un gestor de paquetes y es el mas popular de JavaScript, esta compuesto por múltiples de recursos para ser implementados en nuestros proyectos. También se pueden crear nuestros propios paquetes y ser compartidos.

# **Iniciar un proyecto**
El siguiente listado hace honor a las buenas practicas que se deben tener cada vez que se inicializa un proyecto:

- Primero tenemos inicializar el proyecto con:
```
git init
```
Estamos otorgándole el permiso a git de hacerle seguimiento a todas las modificaciones que hagamos.

- Debemos inicializar nuestro proyecto con NPM
```
npm init
```
Este comando nos permite tener un documento package.json totalmente personalizable y dos da la opción de establecer un nombre para el proyecto, que versión es, una descripción del mismo, cual es el entry point, si ya tenemos un comando test establecido, cual es nuestro repositorio en git, algunas palabras clave o keywords, quien es el autor del proyecto y por ultimo una licencia.

Pero muchas veces vamos a querer tener un archivo package.json lo mas rápido posible y con los siguientes comando lo lograremos:

```
npm init -y
```
Creara el archivo de configuración lo mas básico posible y quedaría con los siguientes datos:

```json
{
  "name": "jsnpm",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```
También podemos establecer cierta información antes de ejecutar el comando 'npm init -y' o 'npm init -yes'
```
npm set init.author.email "ing2108@hotmail.com"
npm set init.author.name "Jose Montaño"
npm set init.author.license "MIT"

npm init -y
```

# **Instalación de dependencias**
Se pueden instalar paquetes convencional o global dependiendo de la necesidad, además NPM contiene un serie de opciones para la instalación de paquetes y aunque es posible no utilizar todas las herramientas, lo mejor es saber que existen o entender como funcionan.

Las dependencias que instalamos son recursos que utilizaremos a lo largo de nuestros proyectos.

```
npm install moment --save
```
A partir de la versión 5 de npm por defecto se instala como una dependencia requerida para el proyecto y se representa por el flag ‘–save’, Esto significa que este paquete es necesario para vivir en producción.

Debemos tener en cuenta que paquete debe vivir en producción o cuando no.

```
npm install moment --save-dev
```

El flag anterior no permite establecer que el paquete solo es necesario en el entorno local o de desarrollo. Es muy importante determinar los paquetes que deben estar en producción o desarrollo puesto que no queremos omitir paquetes en producción o tener paquetes innecesarios.

## ***Proceso de instalacion***
En el momento de ejecutar el comando de instalación se genera una conexión con los comandos de npm, se genera la descarga necesaria de archivos y nos muestra en consola un output del suceso.

En paralelo se genera una carpeta node_modules que contendrá todos los paquetes instalados, de igual forma nuestro package.json se edita agregando la nueva dependencia.

La carpeta node_modules es vital para el desarrollo del proyecto pero debe ser omitida en git y no ser enviada al repositorio, esto se logra con nuestro archivo ‘.gitignore’.

## ***Formas distintas de crear dependencias***

- dependencia de desarrollo
```
npm install date-fns --save-dev
```
una forma mas abreviada seria:
```
npm i date-fns -D
```

- dependencia de producción
```
npm i moment -S
```

También existe paquetes que deben correr de forma global, podemos instalar paquetes para ser usados en otros proyectos. Ejemplo nodemon nos permite generar un demonio que se encarga de escuchar algún cambio o algún valor y va dejar o mantener en nuestro proceso algún comando de node.

Para realizar la instalación de forma global debemos tener permisos de administrador en caso de trabajar en windows o en mac con la palabra reservada sudo.

```
sudo npm i -g nodemon
```

Para saber si tenemos el paquete instalado en la lista de recursos que están instalados de forma global en npm.

```
npm list -g --depth 0
```

Además muestra todos los paquetes que están listos para ser usados de forma global.

# **Instalación de dependencias con force**
Nos permite instalar el paquete forzando que la instalación de haga con el ultimo recurso o versión del servidor de npm.
```
npm install webpack -f
```

Tenemos una opción para distinguir que un paquete no va hacer instalado en un proyecto, pero queremos ver el output que genera. Esto simula la instalación y retornaría el mensaje que normalmente retornaria si se llegara a instalar este paquete. 

```
npm i react --dry-run
```

## ***Buenas practicas***
Existen momentos en que estamos instalando nuestros paquetes de producción o desarrollo y se nos olvida colocar el flag adecuado, lo mejor que podemos hacer es ir a nuestro archivo package.json, corregir donde debería ir el paquete y correr el siguiente comando que realizaría un instalación nuevamente de las dependencias.

```
npm install 
```

## ***Instalar un paquete con una versión especifica***
Esto lo realizamos si necesitamos hacer un mantenimiento a algún proyecto que maneje una versión antigua de cierto paquete.
```
npm install json-server@.15.0
```
Obviamente debemos previamente garantizar que ese paquete funcione.

# **Actualizar y eliminar paquetes**
para actualizar nuestro paquetes debemos correr el siguiente comando. Actualizar nuestro paquetes nos garantiza siempre tengamos nuestro proyectos seguros y garantizar un correcto funcionamiento.
```
npm outdate
```

nos mostraría que paquetes están desactualizados y que versión es la mas reciente. Actualizarlos a la versión mas reciente se realizaría con el siguiente comando:
```
npm update
```

Otra forma de actualizar un paquete es realizando una instalación de la siguiente forma:
```
npm install json-server@latest
```

Para la eliminación de un paquete debe ser:
```
npm uninstall json-serverr
```
Esto generaría una eliminación tanto de la carpeta node_modules como de nuestro archivo package.json.

También podemos eliminar el paquete de la carpeta node_modules y dejarla en el archivo package.json.
```
npm uninstall wepack --no-save
```

## ***Buenas practicas***
Listar los paquetes instalados.
```
npm list
```

Flag para tener un output mas detallado.
```
--dd
```

# **Package lock y el uso los símbolos ^ y ~**
El versionado semántico es un numero que cada paquete tiene y puede ir cambiando aumentando pues cada actualización aumentara un digito, según el digito que aumente así también será el tipo de actualización.

```json
{
  react : ^16.11.0,
  eslint: ~0.4.0
}
```

Primer digito indica un cambio mayor, el siguiente digito indica que el cambios es menores por ejemplo añadir nuevas funcionalidades pero no son un cambio mayor en el proyecto, y por ultimo podemos hacer cambio menores, parches o algún fixbug.

Si en el archivo package.json mantenemos el caret(^) estamos queriendo decir que solo vamos a recibir actualización de cambio menores y fixbug, también podemos establecer una tilde (~) e indica que solo tendremos actualizaciones de tipo fixbug o parches. 

Además a partir de la versión 5 de npm tendremos un archivo package-lock.json que hace una recopilación de los paquetes y versiones que se han instalado en nuestro proyecto.

## ***Buenas practicas***
Muchas veces como desarrolladores queremos garantizar quedarnos en cierta versión y para lograr esto se debe eliminar en el archivo package.json el caret o la tilde (^ o ~). 

# **Ejecutar tareas**
En nuestro archivo package.json encontramos una sección llamada scripts donde podemos nombrar comandos que apuntan a sentencias usadas a lo largo del proyecto. Estos comando pueden recibir cualquier nombre y contener cualquier sentencia.

```json
{
  scripts: {
    bulid: node index.js,
    test: eslink --fix
  }
}
```

Para acceder a estas sentencias, debemos correr el siguiente comando_ 
```
npm run build 
npm run test
```
# **Solución de problemas**
Podemos toparnos con múltiples errores comunes dentro de la configuración de nuestro proyecto.

Uno de los errores comunes es nombrar mal los comandos o scripts creados. Lo mas conveniente es verificar en nuestra consola el tipo de error que devuelve o esta mostrando.

También podemos tener un ejecución mas detallada en el momento de correr un script es agregarle el flag --dd, de esa manera contamos con un detallado de lo que esta sucediendo y en que momento el script no puede continuar con la ejecución.

Otra de las cosas que debemos prestar atención es que npm no da un log detallado de lo que sucedió al romperse el script.
```
> node index.js

internal/modules/cjs/loader.js:888
  throw err;
  ^

Error: Cannot find module '/home/mooenz/apuntes/Curso-de-Gestión-de-Dependencias-y-Paquetes-con-NPM/index.js'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:885:15)
    at Function.Module._load (internal/modules/cjs/loader.js:730:27)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! jsnpm@1.0.0 test: `node index.js`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the jsnpm@1.0.0 test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/mooenz/.npm/_logs/2021-08-17T21_27_23_625Z-debug.log
```

Para este ejemplo en la ultima sentencia una ruta, esta ruta almacena el log que se creo al dañarse el scrirpt 'npm run test', y investigar su contenido solo copiamos la ruta con el comando code (Es la forma de abrir un archivo desde Vs code) abrimos el archivo.
```
code /home/mooenz/.npm/_logs/2021-08-17T21_27_23_625Z-debug.log
```

Otro error que podemos encontrar es la falta de archivos o que este incompleto el node_modules y lo que podemos hacer es eliminar la carpeta y eliminar el cache de nuestro sistema.
```
npm cache clean --force
```

y para verificar el estado de nuestra cache.
```
npm cache verify
```

Para eliminar la carpeta node_module lo realizaríamos con el comando : 
```
rm -rf node_module
```

y posteriormente ejecutaríamos el comando:
```
npm install
```
e instalaría de nuevo todos los paquetes que necesitamos.

Para tener mas seguridad al eliminar la carpeta con el comando 'rm -rf' podemos usar un paquete llamado 'rimraf', lo instalamos en una instancia global y ejecutamos el siguiente comando: 

```
sudo npm install -g rimraf
rimraf node_modules 
```

# **Seguridad**
Cuando estemos trabajando se debe garantizar que todos nuestro proyectos no incluyan código malicioso y cuando se este trabajando todo este acorde a las normas del team.

Npm nos ofrece una herramienta en la que audita los paquetes instalados y determina cuales pueden ser un riesgo:

- Nos muestra los paquetes desactualizados o que pueden tener un error o vulnerabilidad.
```
npm audit
```

- Genera un archivo .json con la información mas detallada.
```
npm audit --json 
```

- Nos ayuda a reparar todos los error que puede tener o todas las vulnerabilidades.
```
npm audit fix
```

## ***Buenas practicas***
Antes de auditar nuestro paquetes, podemos actualizarlos para minimizar los riesgos.

# **Crear un paquete para NPM**
Debemos tener nuestra aplicación dentro de la carpeta src y de ahí exportar nuestro archivo main o en este caso el index.js.

luego de esto, en la raíz creamos otra carpeta llamada bin que contendrá un archivo js llamado global.js en el cual vamos a crear la configuración necesaria para llamar nuestra paquete desde la consola.

También tenemos que configurar nuestro package.json en el que vamos añadirle un nuevo apartado llamado bin dentro de el vamos a registrar el paquete que estamos creando, al cual le damos un nombre que en este caso es llamado "random-msg" y finalizamos activando la opción 'preferGlobal'.

# **Publicar un paquete en NPM**
Antes de publicarlo debemos probar nuestro paquete en local y eso lo realizaremos dentro de la carpeta de nuestro paquete, para nuestro ejemplo debemos estar en /ramdom-messeges y ejecutar el comando con permisos:
```
sudo npm link /ruta-de-nuestro-paquete
```
la ruta completa la obtenemos con el comando en linux "pwd". Luego de tener un output donde nos indica que esta instalado y sin ninguno error, llamamos a nuestro paquete como fue nombrado en el package.json.
```
ramdom-msg
```
Y como respuesta obtenemos un nombre random del arreglo creado en random-messeges/src/index.js.

Npm nos permite instalar de otra forma nuestro paquete local y en este caso agregaremos mas nombres para ver los cambios.
```
sudo npm install -g /ruta-de-nuestro paquete
```

Con estas pruebas ya garantizamos el paquete esta funcionando correctamente. Para realizar la publicación debemos tener_

- Una cuenta activa en Npm.
- Hacemos login desde la terminar con nuestras credenciales en npm: 
```
npm addusser
```
- Seguimos los pasos y al terminar tendremos un output success.
- Ahora si podemos publicar el paquete:
```
npm publish
```
Desde nuestro perfil podemos garantizar que el paquete esta publicado y además npm nos envía un correo de confirmación.

# **Actualiza paquetes**
Al publicar debemos garantizar un minimo estandar para que este publicado el paquete:

- El paquete debe tener un readme, con el fin de explicar de que se trata nuestro paquete, que tipo de lincencia tiene, como instalarlo y usarlo. Este debe estar en ingles.

- Debe contqar con un repositorio donde se pueda reportar algun bug o presentar una propuesta de mejora.

- Se debe garantizar los test que prueban el paquete

Luego de garantizar que nuestro package.json esta completo generamos nuestro repositorio remoto y a continuacion inicializamos nuevamente la carpeta con npm git. Npm detectara el repositorio y lo ligara automaticamente. 

Para establecer que version tiene el paquete o en otras palabras, indicar que tipo de actualizacion hemos realizado, ejecutamos el comando `npm version que-tipo-cambio`, en el espacio 'que-tipo-cambio' npm recibira 3 posibles parametros:

- Cambio mayor = 'major'
- Cambio menor = 'minor'
- Cambio parche = 'patch'

Ahora si podemos actualizar nuestro paquete y se logra publicandolo nuevamente con el comando `npm publish` y listo, nuestro paquete a sido actualizado.