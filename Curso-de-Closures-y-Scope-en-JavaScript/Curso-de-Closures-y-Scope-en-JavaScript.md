# **Scope**

Es el alcance que puede tener una varable o es el encargado de decidir que bloques de codigo va acceder una variable, este scope puede ser : 
- global.
- locla.

## **Scope global**

Son varibles que se encuentran fuera de funciones o bloques de codigo y son accesibles desde cualquien punto del codigo. 

Estas variables globales puede ser reasignadas y esto depende de cual palabra reservada de Javascript la hayamos declarado, para la palabra VAR si se puede reasignar y para LET o CONST no es posible realizar la reaginacion.

## *Malas practicas*

- Reasignar valores a variables globales.
- Crear variables sin las palabras reservadas VAR, LET o CONST.
- Crear una doble asignacion de variables.

## **Scope local**

Nos permite acceder a una variable que esta en un bloque de codigo o una funcion y solamente se puede ejecutar o llamar en esta estructura.

*- Ambito lexico: Es la capacidad de acceder a una variable desde un bloque de codigo hijo, y estas a su vez estan dentro de un bloque de codigo padre.*

### **Scope local en bloque**
El Scope en bloque se comporta igual a lo que anteriormente hemos hablado, las variables declaradas en bloques de codigo solo existen en ese scope, si queremos tener acceso a ella desde fuera de este bloque codigo, se debe declara con VAR.



## *Malas practicas*

- La reasignacion sigue estando presente en el scope local, para evitar esta mala practica lo mejor es declara variables con las palabras reservadas LET y CONST, Javascript detecta cuando este tipo de variables son reasignadas o doble declaracion.

# **Closure**
Es la combinacion entre una funcion y ambito lexico en la cual a sido declara dicha funcion. En pocas palabras es una funcion que recuerda el ambito donde ha sido creado.

los closures tiene una particularidad, gracias al ambito en el que se creo podemos tener multiples closures ejecutandode sin intervenir una con la otra. 

Con los closures podemos crear variables privadas, ya que Javascript no es posible crearlas nativamente. 

Para lograr esto se debe crear un anidamiento de funciones, donde una funcion padre contiene funciones hijo y a su vez variables declaradas que son accesibles desde la funciones hijo.

Estas variables no pueden ser modificiadas directamente ya que solo se tiene interactividad con ellas atravez de las funciones hijo.

Podemos crear closures de diferentes formas y de maneras involuntaria.

# **Hoisting**

Es el resulta de como funciona los contextos en la creacion y ejecucion de los mismos. es decir en el momento de ejecutar nuestro codigo, javascript da referencias a cada sentencia, y dependiendo de que tipo de senticia es, asi sera el numero de su referencia.

```js
console.log(name); //undefined
var name = 'manu'
```

Segun el codigo anterior, Javascript en el momento de ejecutar el codigo toma la sentencia de crear una variable y la coloca de primero, luego ejecuta el console.log y por ultimo realiza la asignacion de name = 'manu'. El hoisying es ustilizado en declaraciones y no en inicializaciones.

```js
nameOfDog("Elmo"); 

function nameOfDog(name) 

{ console.log(name); };nameOfDog("Elmo"); 

function nameOfDog(name) 

{ console.log(name); };
```

Para este caso, Javascript toma la funcion y la "eleva" dando prioridad a la creacion de la funciones y luego ejecuta el llamado de nameOfDog("elmo");.


