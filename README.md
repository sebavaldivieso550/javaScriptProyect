# Tienda de Electrónica - Proyecto de Aprendizaje

Este proyecto es una simulación de una tienda de electrónica, desarrollado como parte de un curso de aprendizaje para afianzar conocimientos en desarrollo web frontend. El objetivo principal fue integrar diversas tecnologías y conceptos para crear una aplicación web funcional y responsiva, con la adición de un modo oscuro.

## 🚀 Tecnologías Utilizadas

* **HTML5:** Estructura de las páginas web.
* **CSS3:** Estilizado y diseño responsivo, incluyendo la implementación de un modo claro y oscuro.
* **JavaScript (ES6+):** Lógica interactiva del carrito de compras, manejo de la visualización de productos, filtrado, búsqueda, validación de formularios y la funcionalidad de cambio de tema (modo claro/oscuro).
* **JSON:** Almacenamiento de los datos de los productos.
* **Local Storage:** Persistencia de los datos del carrito y la preferencia del modo oscuro entre sesiones.
* **Swiper.js:** Librería para el carrusel de imágenes en la página principal.
* **Font Awesome:** Para los íconos de redes sociales y otros elementos visuales.

## ✨ Características Principales

* **Página Principal (Home):**
    * Carrusel interactivo de productos destacados/imágenes promocionales.
    * Sección de "Ofertas" dinámicamente cargada desde el archivo `productos.json`.
    * Botones para agregar productos al carrito directamente desde las ofertas.
* **Página de Productos:**
    * Listado completo de productos cargados desde `productos.json`.
    * Funcionalidad de filtro por categorías (por ejemplo, "todos", "electrónica", etc.).
    * Barra de búsqueda para encontrar productos específicos por título o descripción.
    * Botones para añadir productos al carrito.
* **Página del Carrito:**
    * Visualización de los productos añadidos al carrito.
    * Posibilidad de ajustar la cantidad de cada producto.
    * Botón para eliminar productos del carrito.
    * Cálculo automático del precio total de la compra.
    * Botón para vaciar completamente el carrito.
    * Los datos del carrito persisten incluso si el usuario cierra o recarga la página.
* **Página de Contacto:**
    * Formulario de contacto con validación de campos (nombre, email, teléfono, mensaje).
    * Mensajes de éxito o error al intentar enviar el formulario.
* **Modo Claro/Oscuro:**
    * Interruptor global en la barra de navegación para alternar entre el modo claro y oscuro.
    * La preferencia del modo (claro u oscuro) se guarda en el `Local Storage` y se aplica automáticamente al cargar la página.
* **Diseño Responsivo:**
    * La interfaz se adapta a diferentes tamaños de pantalla, desde dispositivos móviles hasta escritorios.
* **Navegación:**
    * Barra de navegación consistente en todas las páginas.
    * Pie de página (`footer`) con información de contacto y enlaces a redes sociales.

## 📁 Estructura del Proyecto
.
├── css/
│   ├── carritoDM.css       # Estilos para el carrito en modo oscuro
│   ├── carrito.css         # Estilos para el carrito en modo claro
│   ├── contactoDM.css      # Estilos para contacto en modo oscuro
│   ├── contacto.css        # Estilos para contacto en modo claro
│   ├── productosDM.css     # Estilos para productos en modo oscuro
│   ├── productos.css       # Estilos para productos en modo claro
│   ├── stylesDM.css        # Estilos generales y home en modo oscuro
│   └── styles.css          # Estilos generales y home en modo claro
├── js/
│   ├── carrito.js          # Lógica del carrito de compras
│   ├── contact.js          # Lógica del formulario de contacto
│   ├── dataManager.js      # Gestión de datos (productos, carrito) y Local Storage
│   ├── index.js            # Lógica de la página principal (home)
│   ├── products.js         # Lógica de la página de productos
│   └── themeToggle.js      # Lógica para alternar el modo claro/oscuro
├── img/                    # Directorio para imágenes (ej: logos, banners)
├── productos.json          # Datos de los productos
├── index.html              # Página principal (Home)
├── productos.html          # Página de listado de productos
├── carrito.html            # Página del carrito de compras
├── contacto.html           # Página de contacto
└── package.json            # Metadatos del proyecto y scripts

## ⚙️ Cómo Ejecutar el Proyecto Localmente

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1.  **Clonar el repositorio (si aplica):**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd <NOMBRE_DEL_REPOSITORIO>
    ```
    (Si no es un repositorio, simplemente descarga y descomprime los archivos.)

2.  **Instalar dependencias:**
    Este proyecto utiliza `serve` como un servidor web simple para desarrollo.
    ```bash
    npm install
    ```

3.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm start
    ```
    Esto iniciará un servidor web y abrirá el proyecto en tu navegador predeterminado, generalmente en `http://localhost:5000` o un puerto similar.

4.  **Navegar por las páginas:**
    Puedes acceder a las diferentes secciones de la tienda a través de la barra de navegación o modificando la URL en tu navegador (ej: `http://localhost:5000/productos.html`, `http://localhost:5000/carrito.html`, `http://localhost:5000/contacto.html`).

## 📚 Aprendizajes Clave Adquiridos

Durante el desarrollo de este proyecto, se reforzaron y aprendieron los siguientes conceptos y habilidades:

* **Manipulación del DOM:** Creación, modificación y eliminación dinámica de elementos HTML usando JavaScript.
* **Event Listeners:** Manejo de interacciones del usuario (clics, envíos de formularios, etc.).
* **Fetch API:** Carga asíncrona de datos desde archivos JSON locales.
* **Módulos de JavaScript (ESM):** Organización del código en archivos separados para mejorar la modularidad y mantenibilidad.
* **Local Storage:** Persistencia de datos del lado del cliente.
* **Diseño Responsivo:** Aplicación de Media Queries para adaptar la interfaz a diferentes dispositivos.
* **Validación de Formularios:** Implementación de lógica para asegurar que los datos ingresados por el usuario sean correctos.
* **Librerías de Terceros:** Integración y uso de Swiper.js y Font Awesome.
* **Organización de Archivos CSS:** Manejo de estilos para diferentes temas (claro/oscuro) y secciones de la aplicación.
* **Conceptos de Carrito de Compras:** Lógica para añadir, eliminar, actualizar cantidades y calcular totales de productos.