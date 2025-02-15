# Navegación con Vue Router

Vue router es un paquete que puede integrarse a Vue.js para crear aplicaciones de una sola página (SPA) con múltiples vistas.

## Instalación

Podemos instalar o integrar Vue Router en nuestro proyecto de Vue.js de dos formas:

### 1. Al crear un nuevo proyecto habilitar la opción de Vue Router

```bash
npm create vue@latest
```

```bash
✔ Add Vue Router for Single Page Application development? No / …Yes
```

### 2. Instalación desde npm

```bash
npm install vue-router@4
```

en la carpeta de src crear un archivo llamado router.js

```js
// Importamos el paquete de Vue Router para crear las rutas
import { createRouter, createWebHistory } from 'vue-router'

// Importamos los componentes que vamos a utilizar en las rutas
import Home from './components/Home.vue'

// Creamos las rutas
const routes = [
    { path: '/', component: Home, name: 'Home' }
    // Hacemos que la ruta /about sea lazy-loaded
    { path: "/about", name: "About", component: () => import("../views/AboutView.vue") },
    // Pagina 404
    { path: '/:pathMatch(.*)*', name: 'error404', component: () => import('../views/Error404View.vue')}
]

// Creamos el router
const router = createRouter({
    history: createWebHistory(),
    routes
})

// Exportamos el router
export default router
```

## Parámetros de ruta

