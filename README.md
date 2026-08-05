# Curso de capacitación docente — sitio para GitHub Pages

Sitio estático de **Herramientas Estadísticas y Computacionales para el
Análisis de Datos en Investigación**.

Esta versión publica únicamente cuatro documentos HTML:

1. Demostración de Python, Colab y datos.
2. Actividad de limpieza de datos.
3. Solución de la actividad de limpieza de datos.
4. Demostración de estadística descriptiva y visualización.

## Estructura

```text
curso-capacitacion-docente-github-pages/
├── index.html
├── 404.html
├── README.md
├── .nojekyll
├── assets/
│   ├── css/styles.css
│   ├── js/site.js
│   ├── favicon.svg
│   └── vendor/
│       ├── requirejs/
│       └── mathjax/
└── materiales/
    ├── 01_demostracion_python_colab_datos.html
    ├── 02_actividad_limpieza_datos.html
    ├── 03_actividad_limpieza_datos_solucion.html
    └── 04_demostracion_estadistica_descriptiva_visualizacion.html
```

Las bibliotecas JavaScript que requieren los HTML están incluidas localmente.
Por ello, las fórmulas y las salidas interactivas no dependen de rutas internas
de la computadora donde se exportaron los notebooks.

## Publicar en GitHub Pages

1. Crea un repositorio público, por ejemplo `curso-capacitacion-docente`.
2. Sube **el contenido de esta carpeta** a la raíz del repositorio. No subas la
   carpeta contenedora como un nivel adicional.
3. En GitHub abre `Settings → Pages`.
4. En `Source` elige `Deploy from a branch`.
5. Selecciona la rama `main` y la carpeta `/(root)`.
6. Presiona `Save`.

Con el usuario `agarciam` y el nombre sugerido, la dirección sería:

```text
https://agarciam.github.io/curso-capacitacion-docente/
```

## Actualizar materiales

- Conserva los nombres sin espacios ni acentos.
- Guarda nuevos HTML dentro de `materiales/`.
- Agrega una tarjeta y su enlace relativo en `index.html`.
- Comprueba el sitio antes de publicar abriendo `index.html` o usando un
  servidor web local.

## Nota sobre la solución

`03_actividad_limpieza_datos_solucion.html` está enlazado públicamente desde el
índice. Si la solución no debe estar disponible para estudiantes, elimina su
tarjeta de `index.html` y el archivo correspondiente antes de publicar.
