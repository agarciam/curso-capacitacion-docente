# Herramientas Estadísticas y Computacionales para el Análisis de Datos en Investigación Bioquímica

**Departamento de Desarrollo Académico**
**Coordinación de Actualización y Formación Docente**
**Instituto Tecnológico de Tijuana**


| Información          | Detalle                                                                                           |
| -------------------- | ------------------------------------------------------------------------------------------------- |
| **Nombre del curso** | Herramientas Estadísticas y Computacionales para el Análisis de Datos en Investigación Bioquímica |
| **Expositor**        | Andrés García Medina                                                                              |
| **Fecha de inicio**  | 3 de agosto de 2026                                                                               |
| **Dirigido a**       | Docentes del Departamento de Ingeniería Química y Bioquímica                                      |
| **Modalidad**        | Presencial                                                                                        |

## Objetivo general

Desarrollar habilidades estadísticas y computacionales mediante el uso de Python para organizar, analizar, visualizar e interpretar datos experimentales de investigación en bioquímica, aplicando estadística descriptiva, inferencial y modelos de regresión lineal para la validación de resultados científicos de laboratorio.


## Contacto

**Andrés García Medina**
Correo: [andgarm.n@gmail.com](mailto:andgarm.n@gmail.com)

Sitio personal: https://sites.google.com/view/andresgm/home

Esta versión publica cinco documentos HTML:

1. Demostración de Python, Colab y datos.
2. Actividad de limpieza de datos.
3. Solución de la actividad de limpieza de datos.
4. Demostración de estadística descriptiva y visualización.
5. Caso de estudio: modelo mixto con semillas.

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
│       ├── mathjax/
│       └── mathjax3/          # MathJax 3.2.2 local para las ecuaciones
└── materiales/
    ├── 01_demostracion_python_colab_datos.html
    ├── 02_actividad_limpieza_datos.html
    ├── 03_actividad_limpieza_datos_solucion.html
    ├── 04_demostracion_estadistica_descriptiva_visualizacion.html
    └── 05_caso_estudio_modelo_mixto_semillas_documentado.html
```

## Ecuaciones en los cuadernillos HTML

Los cinco cuadernillos están configurados para cargar MathJax 3.2.2 desde
`assets/vendor/mathjax3/tex-svg-full.js`. De esta forma, las ecuaciones LaTeX
se renderizan en GitHub Pages sin depender de rutas `file:///...` del equipo
utilizado para exportar los notebooks ni de una CDN externa para MathJax.
