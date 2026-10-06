Bebidas-Vue

Aplicación web para buscar y consultar recetas de bebidas, desarrollada con Vue 3.

El proyecto permite buscar bebidas por ingredientes y categorías, consultar sus recetas, guardar bebidas favoritas y generar recetas mediante inteligencia artificial.

Funcionalidades

- 🔎 Búsqueda de bebidas por ingrediente.
- 🏷️ Filtrado por categoría.
- 📖 Visualización detallada de recetas.
- ❤️ Sistema de favoritos.
- 🤖 Generación de recetas mediante inteligencia artificial.
- 🔔 Notificaciones para mejorar la experiencia del usuario.
- 📱 Diseño responsive.
- 🧭 Navegación mediante Vue Router.

Tecnologías

- Vue 3
- Pinia
- Vue Router
- Axios
- Tailwind CSS
- JavaScript
- Vite
- OpenRouter
- AI SDK

Inteligencia Artificial

La aplicación integra inteligencia artificial mediante "OpenRouter" y el "AI SDK", permitiendo generar recetas de bebidas a partir de las instrucciones proporcionadas por el usuario.

La respuesta se procesa mediante streaming para mostrar el contenido progresivamente.

Estructura del proyecto

text
src/
├── components/
│ ├── Header.vue
│ ├── Modal.vue
│ ├── Notificacion.vue
│ └── Receta.vue
├── lib/
│ ├── axios.js
│ └── ia.js
├── router/
│ └── index.js
├── services/
│ ├── APIService.js
│ └── IAService.js
├── stores/
│ ├── bebidas.js
│ ├── favoritos.js
│ ├── ia.js
│ ├── modal.js
│ └── notificaciones.js
└── views/
├── FavoritosView.vue
├── IAView.vue
└── InicioView.vue

Instalación

Clona el repositorio:

git clone https://github.com/fernando-drp/Bebidas-Vue.git

Entra al proyecto:
cd Bebidas-Vue

Instala las dependencias:
npm install

🔐 Variables de entorno

Crea un archivo .env en la raíz del proyecto y agrega las variables necesarias para la integración con la API y la inteligencia artificial.
El archivo .env no se encuentra incluido en el repositorio por motivos de seguridad.

💻 Ejecutar el proyecto

Para iniciar el servidor de desarrollo:
npm run dev

Compilar para producción
npm run build

👨‍💻 Autor
Fernando De La Rosa Palma

Ingeniero en TICs | Desarrollo Web
