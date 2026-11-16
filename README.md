# Roma Joyería — landing page

Página de una sola sección para Roma Joyería (mayoreo y menudeo, Centro Histórico, CDMX).
Sin carrito: cada llamada a la acción abre WhatsApp con un mensaje pre-escrito.

Stack: Astro 7 (salida estática) + Svelte 5 (solo el formulario) + Tailwind CSS 4.
Lee `CLAUDE.md` para las reglas de diseño, accesibilidad y estructura.

## Comandos

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run check     # astro check (TypeScript)
```

Variables de entorno (copia `.env.example` a `.env`):

- `PUBLIC_NEWSLETTER_ENDPOINT` — webhook (p. ej. n8n → Google Sheets) que recibe
  `{ nombre, telefono, interes, consentimiento, fecha }`. Vacío = el formulario muestra un aviso.

## Dónde editar

| Qué | Archivo |
| --- | --- |
| Número de WhatsApp, dirección, horario, mapas, redes, ancho del contenedor, opacidad del fondo del hero | `src/config/site.ts` |
| Textos, categorías, precios, historia, reseñas, servicios | `src/data/content.ts` |
| Colores (día/noche), tipografías, efectos | `src/styles/global.css` |
| Fotos | `public/images/` (ver `public/images/README.md`) |

## Contenido pendiente del cliente

Todo lo pendiente aparece en la página entre `[corchetes]`.

- [ ] Número de WhatsApp, calle y número, C.P., horario, estacionamiento
- [ ] Fotos reales: vitrina del hero, fachada, una por categoría
- [ ] Lista final de categorías y precios "desde" (mayoreo y menudeo)
- [ ] 3 reseñas reales (con permiso) + enlace a calificación de Google
- [ ] Párrafo de historia (fundador, origen)
- [ ] Resolver "desde 1999" vs "más de 30 años" (se contradicen)
- [ ] Un solo nombre: "Roma Joyería" vs "Joyería Roma"
- [ ] Texto del aviso de privacidad revisado por un abogado
- [ ] Dominio (`astro.config.mjs` → `site`), URL del mapa embebido, Instagram y Facebook
