# **Node: orígenes y filosofía**
Es un entorno de ejecución de JavaScript fuera del navegador, nació en 2009 y esta orientado principalmente a servidores.

Se puede ejecutar en:
- servidores
- construir herramientas
- laptops 
- cualquier consola
- loit

## **Bases de JavaScript**
- Es concurrente, aunque sea mono hilo todas sus entradas y salidas son asíncronas. 

- Tiene un único proceso en cada núcleo del procesador que va programar todas las peticiones y las enviara de forma asíncrona para no quedarse bloqueante.

## **Motor v8**
Es el entorno de ejecución de JS creado por Google y libre desde 2008, esta escrito en c++ haciéndolo mas rápido.

Convierte js en código maquina o bitecode en lugar de interpretarlo en tiempo real. 

## **Módulos**
Todos esta basado en módulos. Muchos módulos vienen por defecto en el paquete de Node.

Además puedes crear tus propios módulos.

## **Orientado a eventos**
Lo clave de node, esta orientado en eventos. Existe un bucle de eventos que se ejecuta constantemente y eventualmente se dispara un evento que podemos escuchar, esto nos permite programar de forma reactiva.