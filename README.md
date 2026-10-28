# Mini Portafolio Web - Ingeniería Civil Informática

Portafolio web personal interactivo desarrollado con React, React Router y Vite, diseñado bajo el wireframe estricto y en tonos morados oscuros, estructurado en múltiples páginas y componentes reutilizables.

## Secciones del Portafolio
- **Inicio:** Presentación personal, rol profesional, breve descripción de bienvenida y botón de acceso rápido hacia los proyectos.
- **Sobre mí:** Información académica (estudiante de primer año, segundo semestre de Ingeniería Civil Informática), lista de intereses técnicos y objetivos de desarrollo profesional.
- **Habilidades:** Listado dinámico de habilidades técnicas con sus respectivos niveles renderizados mediante arreglos y `.map()`, además de herramientas de desarrollo habituales.
- **Proyectos:** Muestra de trabajos destacados implementados mediante un componente reutilizable de tarjetas y desestructuración de *props*.
- **Contacto:** Formulario interactivo con control de estado en React, validaciones de campos vacíos, verificación de formato de correo electrónico y mensajes de éxito.

## Requisitos del Sistema
- Node.js (versión 24 o superior recomendada)
- Gestor de paquetes npm

## Instalación y Ejecución
1. Clona este repositorio o descarga los archivos.
2. Instala las dependencias necesarias ejecutando en la terminal:
   ```bash
   npm install

3. Inicia el servidor de desarrollo local ejecutando:

    ```Bash
    npm run dev

4. Abre el enlace local proporcionado por Vite (habitualmente http://localhost:5173) en tu navegador.

## Estructura de Carpetas y Rutas

    ```Bash
mini-portafolio/
├── public/
├── src/
│   ├── assets/
│   │   └── foto-perfil.jpg
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── FormularioContacto.jsx
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   └── TarjetaProyecto.jsx
│   ├── pages/
│   │   ├── Contacto.jsx
│   │   ├── Habilidades.jsx
│   │   ├── Inicio.jsx
│   │   ├── Proyectos.jsx
│   │   └── SobreMi.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── README.md
└── uso_ia.md

## Rutas de la Aplicación
- **/:** Muestra la vista de Inicio con el saludo principal y accesos rápidos a proyectos.

- **/sobre-mi:** Muestra la vista de Sobre mí con información académica e intereses.

- **/habilidades:** Muestra las tarjetas con barras de progreso de tecnologías y etiquetas de herramientas.

- **/proyectos:** Muestra la lista de trabajos realizados con tarjetas reutilizables.

- **/contacto:** Muestra el formulario interactivo de contacto con validación de estados.

## Dificultades y Soluciones
1. **Error de importación por librería faltante (react-router-dom):**

- Dificultad: Vite lanzó un error [plugin:vite:import-analysis] indicando que no se podía resolver la importación de react-router-dom.

- Solución: Se identificó que la librería no estaba instalada dentro del directorio correcto del proyecto, por lo que se ejecutó npm install react-router-dom asegurando la ubicación adecuada dentro de la carpeta.

2. **Estructura de carpetas duplicada (src/src):**

- Dificultad: Se presentó un fallo de resolución de importaciones de las páginas (./pages/Inicio) al estar anidadas las carpetas dentro de un subdirectorio src/src/.

- Solución: Se reorganizó el directorio de archivos moviendo las carpetas components y pages junto con sus scripts principales al nivel raíz de src/, eliminando la carpeta interna redundante.

3. **Conflicto en la ruta de importación de la página de Contacto:**

- Dificultad: Se generó un error de compilación al importar Contactos (en plural) dentro de App.jsx, mientras que el archivo de la página estaba nombrado en singular (Contacto.jsx).

- Solución: Se corrigió la sentencia de importación en App.jsx para coincidir exactamente con el nombre relativo del archivo (./pages/Contacto).

4. **Visualización e importación de imágenes en Vite:**

- Dificultad: La imagen de perfil no cargaba utilizando rutas de string simples en las etiquetas <img>.

- Solución: Se configuró la importación directa del archivo estático desde src/assets/foto-perfil.jpg utilizando variables JS en los componentes y aplicando la propiedad CSS object-fit: cover para evitar deformaciones en las tarjetas y contenedores circulares.