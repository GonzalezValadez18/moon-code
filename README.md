**Moon Code**

Proyecto estático de portafolio/landing creado con Web Components y Vite. Contiene componentes reutilizables (Lit), assets en `public/` y una estructura modular en `src/` pensada para desarrollo local y despliegue estático.

**Características**
- **Stack:** Vite, Lit.
- **Componentes Web:** Uso de componentes en [src/components](src/components/).
- **Assets organizados:** imágenes, iconos y datos en [public/](public/).

**Requisitos**
- Node.js >= 16 recomendado
- npm (incluido con Node)

**Instalación y desarrollo**
1. Clona el repositorio:

```
git clone https://github.com/GonzalezValadez18/moon-code.git
cd moon-code
```

2. Instala dependencias:

```
npm install
```

3. Ejecuta en modo desarrollo (Vite):

```
npm run dev
```

El sitio quedará disponible en `http://localhost:5173` (u otro puerto que Vite asigne).

**Compilación y previsualización de producción**

```
npm run build
npm run preview
```

La salida de producción queda en la carpeta `dist/` tras `npm run build`.

**Estructura del proyecto (resumen)**
- **[index.html](index.html)**: Punto de entrada.
- **[package.json](package.json)**: Scripts y dependencias.
- **[src/](src/)**: Código fuente y componentes.
  - **[src/components](src/components/)**: Componentes Web (app-header, app-footer, app-cards-link, etc.).
  - **[src/pages/home-page/home-page.js](src/pages/home-page/home-page.js#L1-L200)**: Página principal.
  - **[src/global/observe-visibility.js](src/global/observe-visibility.js#L1-L200)**: Utilidad para observación de visibilidad (intersection observer).
  - **[src/index.css](src/index.css)**: Estilos globales.
- **[public/](public/)**: Archivos estáticos servidos tal cual.
  - **[public/data/cards-servicios.json](public/data/cards-servicios.json)**: Datos para las cards de servicios.
  - **[public/icons/icons.js](public/icons/icons.js#L1-L200)**: Iconos inyectados.

**Componentes principales**
- `app-header` — encabezado y navegación ([src/components/app-header/app-header.js](src/components/app-header/app-header.js#L1-L200)).
- `app-footer` — pie de página ([src/components/app-footer/app-footer.js](src/components/app-footer/app-footer.js#L1-L200)).
- `app-cards-link` — lista de tarjetas enlazables ([src/components/app-cards-link/app-card-link.js](src/components/app-cards-link/app-card-link.js#L1-L200)).
- `app-title` — título reutilizable ([src/components/app-title/app-title.js](src/components/app-title/app-title.js#L1-L200)).

**Cómo editar/añadir contenido**
- Componentes: añade/modifica archivos en `src/components/`.
- Páginas: edita `src/pages/`.
- Imágenes y activos: colócalos en `public/img/`, `public/logos/` o `public/videos/`.
- Datos dinámicos de ejemplo: modifica `public/data/cards-servicios.json`.

**Despliegue**
- Construye con `npm run build` y sube la carpeta `dist/` a cualquier hosting estático (Netlify, Vercel, GitHub Pages, etc.).

**Contribuir**
- Abrir issues o pull requests en el repositorio. Sigue buenas prácticas: una rama por feature/bug, commits claros y PR con descripción.

**Licencia**
- No se incluye archivo `LICENSE` en este repositorio. Añade un archivo `LICENSE` si deseas aplicar una licencia (por ejemplo MIT).

**Contacto**
- Repositorio: https://github.com/GonzalezValadez18/moon-code
- Si quieres que adapte el README (más secciones, badges, ejemplos de despliegue), dime qué prefieres y lo actualizo.
