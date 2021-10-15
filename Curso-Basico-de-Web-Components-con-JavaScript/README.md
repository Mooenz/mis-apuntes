# **Apuntes**

## **¿Qué problemas resuelven los Web Components?**

El desarrollo web actual esta plagado de todo un ecosistema basado en JS, existes múltiples frameworks y librerías que nos facilita el desarrollo de aplicaciones web pero no están hechas para coexistir entre ellas.

Aquí nace el concepto de web components basado en un encapsulado de JS vanila dando como resultado una compatibilidad natural.

## **¿Qué son los Web Components?**

Podemos comprar los web components con piezas de lego, codigo encapsulado que reutilizamos constantemente. Los web components son primitivos de bajo nivel que te permiten definir tus propios elementos HTML.

los web components estan contruidos con web apis :

- HTML Templates

- Shadow DOM

- Custom Elements

- ES Modules

## **APIs de Web Components**

### **HTML Standard**

Permite definir la etiqueta y hacer que el web component se pueda convertir en una etiqueta que el navegador pueda entender.

Estas etiquetas personalizadas o custom element, se deben crear con cautela puesto que quienes estandarizan HTML están constantemente creando nuevas etiquetas y para que no exista una conflicto las etiquetas personalizadas deben tener mínimo 2 palabras separadas por un `-`, ejemplo, `mapa-geopolitico`, `la-etiqueta-mas-personalizada-del-mundo`.

### **Shadow DOM**

Normalmente se confunde con el virtual DOM que algunas framework y librerías tienen.

El Shadow DOM es generar un encapsulado perfecto permitiendo etiqueta contener código que no coexista con el código de a fuera, imposibilitando la sobre escritura de los estilos.

### **Custom Elements**

Son APIS de JS que permite definir elementos personalizados y su comportamiento, que entonces puede ser utilizado como deseé en la interfaz del usuario.

### **HTML Templates**

Es una sola etiqueta `<template></template>` usada junto con JavaScript. Si utilizamos esta etiqueta en nuestra arquitectura HTML no se va a renderizar y devolverá un document Fragment, ósea es un fragmento del documento y contenido será clonado y renderizado en el HTML.

Por esto debe ser combinado cono JS para generar esta clonación y renderización del componente.

Este proceso agrega mucho performance en el momento del renderizar los nodos en el DOM.

### **ES Modules**

Anteriormente existía una API web llamada HTML Imports que permitía introducir código HTML en otro código HTML, pero no logro ser un estándar en todos los navegadores por lo cual desistieron de el.

Con la llegada de los módulos de ECMAScript 6 lograron exporta e importar código con JavaScript.

Las 4 web APIS son un conjuntos de estándares que facilitan el desarrollo de componentes sin la utilización de frameworks o librerías, otorgando un mayor performance al DOM.

## **Beneficios de Web Components**

### **Reutilizacion**

'Dont Repeat Yourself', El componente es encapsulado y reutilizado multiples veces en cualquier tipo de aplicacion.

### **Legibilidad**

La utilizacion de componentes permite una lectura de codigo mas limpio, puesto que tenemos un codigo mas simple y un enriquecimiento semantico.

### **Mantenibilidad**

Cada componente es escrito y probado individualmente. Al realizar cambios no ponemos en riesgo la aplicacion ya que estos cambios no afectan directamente al aplicativo.

### **interoperabilidad**

Los componentes estan hechos para coexistir con todo el ecosistema web sin ningun limitante, los frameworks y librerias no.

### **Consistencia**

Naturalmente un componente es reutilizable e interoperable logrando una versatilidad en su uso, Quiere decir que nuestro componente puede ser utilizado y personalizado dependiendo de la necesidad del aplicativo.
