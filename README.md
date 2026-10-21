# Portafolio — George Moreno

Portafolio profesional de **George Moreno** — Ingeniería de Sistemas · Soporte TI · Análisis de Datos · Desarrollo Web.

Sitio estático (HTML + CSS + JavaScript, sin dependencias de build) pensado para publicarse en **GitHub Pages**.

## Estructura

```
.
├── index.html                 # Marcado y contenido de todas las secciones
├── css/
│   └── styles.css             # Sistema de diseño oscuro premium
├── js/
│   └── main.js                # Navbar, scrollspy, menú móvil, reveal, disponibilidad
├── img/
│   └── (imágenes opcionales)
├── docs/
│   └── CURRICULUM VITAE - GEORGE MORENO.pdf   # CV descargable
├── .nojekyll                  # Evita el procesamiento de Jekyll en GitHub Pages
└── README.md
```

## Recursos que debes aportar

El código referencia estos archivos reales. Colócalos para que todo funcione:

- **CV:** `docs/CURRICULUM VITAE - GEORGE MORENO.pdf`
  Es la misma ruta que ya usaba tu sitio anterior. Si el nombre del archivo cambia, actualiza el enlace "Descargar CV" en `index.html`.
- **Imágenes (opcional):** el nuevo diseño del hero usa una composición visual en CSS, así que **no requiere foto**. La carpeta `img/` queda disponible por si quieres añadir recursos propios más adelante.

## Personalización rápida

- **Color de acento:** variable `--acc` en `css/styles.css` (actualmente verde-cian `#2fe6b0`).
- **Disponibilidad profesional:** en `js/main.js`, cambia `const AVAILABLE = true;` a `false`.
  También puedes poner `data-available="false"` en `#statusDot` dentro de `index.html`.
- **Datos de contacto:** teléfono, WhatsApp, correo y GitHub están en la sección `#contacto` de `index.html`.
- **LinkedIn:** no se incluyó porque no había un perfil verificado. Para añadirlo, duplica una tarjeta de `.contact` o un enlace de `.hero__social` con la URL real.

## Publicación en GitHub Pages

1. Sube estos archivos a la raíz del repositorio.
2. En el repositorio: **Settings → Pages**.
3. En *Build and deployment*, elige **Deploy from a branch**.
4. Selecciona la rama (`main`) y la carpeta **/ (root)**. Guarda.
5. El sitio queda disponible en `https://<usuario>.github.io/<repositorio>/`.

> El archivo `.nojekyll` evita que GitHub Pages procese el sitio con Jekyll, lo que previene problemas con rutas y nombres de archivo que contienen espacios (como el PDF del CV).

## Probar en local

Al ser estático, basta abrir `index.html` en el navegador. Para una vista más fiel (con rutas relativas), sirve la carpeta con un servidor estático, por ejemplo:

```bash
# Python 3
python -m http.server 8080
```

Luego visita `http://localhost:8080`.
# PORTAFOLIO
