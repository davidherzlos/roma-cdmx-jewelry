# Fotos

Coloca aquí las fotos reales y escribe su ruta en `src/config/site.ts` (`photos`, `hero`)
o en `src/data/content.ts` (`catalog.categories[].photo`). Mientras una ruta esté vacía,
la página muestra un marcador de posición.

| Archivo sugerido | Dónde se usa | Medida sugerida |
| --- | --- | --- |
| `hero-fondo-dia.jpg` ✅ | Fondo del hero en modo día | 2400 × 1400 |
| `hero-fondo-noche.jpg` ✅ | Fondo del hero en modo noche | 2400 × 1400 |
| `hero-vitrina.jpg` | Foto principal del hero (`site.photos.hero`) | 1200 × 1000 |
| `fachada.jpg` | Nuestra historia (`site.photos.facade`) | 1200 × 1040 |
| `cat-anillos.jpg`, `cat-cadenas.jpg`, … | Tarjetas del catálogo (una por categoría) | 800 × 480 |

Comprime cada foto (JPEG/WebP, < 300 KB) antes de subirla. El texto alternativo de las fotos
sale de `content.ts`.
