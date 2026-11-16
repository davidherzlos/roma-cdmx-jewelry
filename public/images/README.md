# Photos

Put the real photos here and set their path in `src/config/site.ts` (`photos`, `hero`)
or in `src/data/content.ts` (`catalog.categories[].photo`). While a path is empty,
the page shows a placeholder.

| Suggested file | Where it's used | Suggested size |
| --- | --- | --- |
| `hero-fondo-dia.jpg` ✅ | Hero background, day mode | 2400 × 1400 |
| `hero-fondo-noche.jpg` ✅ | Hero background, night mode | 2400 × 1400 |
| `hero-vitrina.jpg` | Main hero photo (`site.photos.hero`) | 1200 × 1000 |
| `fachada.jpg` | Our history section (`site.photos.facade`) | 1200 × 1040 |
| `cat-anillos.jpg`, `cat-cadenas.jpg`, … | Catalog cards (one per category) | 800 × 480 |

Compress each photo (JPEG/WebP, < 300 KB) before uploading it. Photo alt text
comes from `content.ts`.
