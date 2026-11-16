# Roma Joyería — landing page

One-page landing site for Roma Joyería (wholesale and retail, Centro Histórico, CDMX).
No cart: every call to action opens WhatsApp with a pre-written message.

Stack: Astro 7 (static output) + Svelte 5 (form only) + Tailwind CSS 4.
Read `CLAUDE.md` for design, accessibility and structure rules.

## Commands

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs dist/
npm run check     # astro check (TypeScript)
```

Environment variables (copy `.env.example` to `.env`):

- `PUBLIC_NEWSLETTER_ENDPOINT` — webhook (e.g. n8n → Google Sheets) that receives
  `{ nombre, telefono, interes, consentimiento, fecha }`. Empty = the form shows a notice instead.

## Where to edit

| What | File |
| --- | --- |
| WhatsApp number, address, hours, maps, socials, container width, hero background opacity | `src/config/site.ts` |
| Copy, categories, prices, history, reviews, services | `src/data/content.ts` |
| Colours (day/night), fonts, effects | `src/styles/global.css` |
| Photos | `public/images/` (see `public/images/README.md`) |

## Content still pending from the client

Everything pending appears on the page inside `[brackets]`.

- [ ] WhatsApp number, street and number, postal code, hours, parking
- [ ] Real photos: hero vitrina, facade, one per category
- [ ] Final category list and "from" prices (wholesale and retail)
- [ ] 3 real reviews (with permission) + Google rating link
- [ ] History paragraph (founder, origin)
- [ ] Resolve "since 1999" vs "more than 30 years" (they contradict each other)
- [ ] One business name: "Roma Joyería" vs "Joyería Roma"
- [ ] Privacy notice text reviewed by a lawyer
- [ ] Domain (`astro.config.mjs` → `site`), embedded map URL, Instagram and Facebook
