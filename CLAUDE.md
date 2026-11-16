# CLAUDE.md — Roma Joyería landing page

Brief for Claude Code. Read this before touching the code. The design handoff shows *what it
looks like*; this file explains *the decisions behind it* and the rules to keep.

## 1. Project in one paragraph

One-page landing site for **Roma Joyería**, a family jewelry store (wholesale + retail) in
Centro Histórico, CDMX, near Palacio Nacional. The page has **no shopping cart**: every call to
action opens **WhatsApp** with a pre-written message. Audience: resellers (mayoreo), small
businesses and end customers (menudeo). Most visitors arrive from Instagram **on phones**.
All visible copy is **Spanish (es-MX)**.

## 1b. Language rule

**Everything is in English except what visitors see or hear on the site.**

| English (always) | Spanish, es-MX (site content only) |
| --- | --- |
| Code: identifiers, file and folder names, CSS classes, data keys | Visible copy: headings, paragraphs, buttons, menu, labels, form messages |
| Comments and JSDoc/TSDoc | Pre-written WhatsApp messages |
| README, CLAUDE.md, docs, TODOs, checklists | `alt` text, `aria-label`, `title`, `role="status"` messages |
| Commit messages, branch names, PR titles and descriptions, issues | `<title>`, meta description, Open Graph text, JSON-LD text values |
| Console/log output, error messages meant for developers | Placeholders shown on the page (`[Calle y número]`, `[precio]`) |
| Conversation with the developer | `/aviso-de-privacidad` page text |

Notes:

- URLs, anchors and slugs that appear to visitors stay in Spanish (`#catalogo`, `#visitanos`,
  `/aviso-de-privacidad`) because they are part of the site's content.
- Data files keep English keys with Spanish values, e.g.
  `{ title: 'Precios competitivos', body: '…' }`.
- When touching a file that has Spanish comments or docs, translate them to English in the same
  change.

## 2. Source of truth

- Design: the artboard **"Roma — responsive"** from the Claude Design handoff (desktop), plus
  its tablet (820 px) and phone (390 px) previews. Ignore any other artboard in the bundle.
- Code base: **new project, started from scratch** with the structure in §4. Build it section
  by section, verifying each one against the design before moving on.
- If the design and this file disagree, ask.

## 3. Stack

- **Astro 7** (static output) + **Svelte 5** islands (`@astrojs/svelte` 9.x) + **Tailwind CSS 4**
  (`@tailwindcss/vite`, tokens in `@theme`).
- Node ≥ 22.23.4. TypeScript strict (also in `.svelte` files: `<script lang="ts">`).
  Path alias `@/*` → `src/*`.
- No UI kits, no CSS-in-JS, no jQuery, no second UI framework.

### Scaffolding (first task)

1. `npm create astro@latest roma-joyeria -- --template minimal --typescript strict --git`
2. `npx astro add svelte` and `npx astro add tailwind` (Tailwind 4 via `@tailwindcss/vite`).
3. Add `@astrojs/check` + `typescript` as dev dependencies; add the `@/*` path alias.
4. Create the structure in §4 (empty components first), `global.css` with the tokens in §6,
   `site.ts`, `content.ts`, `whatsapp.ts`, `.env.example`, `.gitignore`, `README.md`.
5. `npm run build` and `npx astro check` must pass with 0 errors before building sections.

### Suggested build order

1. Layout (fonts, meta, JSON-LD `JewelryStore`, theme-before-paint script), tokens, container.
2. Header + top bar + theme switch + mobile menu.
3. Hero (+ background image and veil) → trust bar.
4. Catálogo (with Mayoreo/Menudeo toggle) → Historia → Clientes → Por qué elegirnos →
   Visítanos → Contacto (Svelte form) → Footer → floating button / mobile bottom bar.
5. Scroll-spy, effects, reduced-motion, night-mode details.
6. Accessibility pass (§8), responsive pass (§7), Lighthouse.
7. Privacy-notice page (`/aviso-de-privacidad`), README with content checklist.

### JavaScript policy: islands only where they earn it

Default is **zero framework JS**. Pick the lightest option that works:

| Need | Approach |
| --- | --- |
| Visual effects (parallax, reveal, hover, pulse, theme transitions) | **CSS only** |
| Apply saved/device theme before first paint | Inline `<script is:inline>` in `<head>` of `Layout.astro` (never an island) |
| Small DOM behaviour: theme switch, ☰ mobile menu, Mayoreo/Menudeo toggle, scroll-spy menu highlight | Plain `<script>` inside the `.astro` component (Astro bundles it) |
| Stateful UI with validation/async: **newsletter form** | **Svelte island**: `<NewsletterForm client:visible />` |
| Future heavier features (filterable catalogue, quote calculator, etc.) | Svelte island |

Rules for islands:

- Use the laziest directive that works: `client:visible` > `client:idle` > `client:load`.
  Use `client:media` for UI that only exists at some widths.
- Svelte components live in `src/components/islands/` (e.g. `NewsletterForm.svelte`).
- Style Svelte components with **Tailwind classes** and the same design tokens
  (`bg-cream`, `text-gold`, CSS variables for day/night). No `<style>` blocks except for
  things Tailwind can't express.
- Pass data from Astro via props (from `site.ts` / `content.ts`); islands don't import
  business data on their own.
- Keep islands accessible: same requirements as §8 (labels, live regions, focus handling).

## 4. Where things live

| What | File |
| --- | --- |
| Business data: WhatsApp number, address, hours, map URLs, socials, **container width** | `src/config/site.ts` |
| All copy and lists: trust items, categories, history, client types, reviews, services | `src/data/content.ts` |
| Colour tokens (day + night), fonts, animations, patterns, container utilities | `src/styles/global.css` |
| WhatsApp link builder | `src/lib/whatsapp.ts` → `waLink(message)` |
| Sections | `src/components/*.astro` (one per section) |
| Interactive islands | `src/components/islands/*.svelte` |
| Page order | `src/pages/index.astro` |
| Photos | `public/images/` |

Also: `src/layouts/Layout.astro`, `src/components/ui/` (Icon, Photo with placeholder fallback,
WhatsAppButton, Eyebrow), `src/pages/aviso-de-privacidad.astro`, `public/favicon.svg`,
`public/images/README.md`, `.env.example` (`PUBLIC_NEWSLETTER_ENDPOINT`).

Rule: **content changes never require touching components.** If a client edit needs a component
change, the data model is wrong — fix the model.

## 5. Layout and sections (in this order)

1. **Top bar** — address line + WhatsApp number.
2. **Header** (sticky, frosted glass) — logo (links to `#inicio`), menu, day/night switch,
   WhatsApp button.
3. **Hero** `#inicio` — headline, intro, WhatsApp CTA + "Ver catálogo"; photo with a glass
   "Desde 1999" badge; **background image with adjustable opacity** and a fade (veil) so text
   stays readable.
4. **Trust bar** — floating dark-green glass panel overlapping the bottom of the hero; 4 items.
5. **Catálogo** `#categorias` — Mayoreo/Menudeo toggle (changes prices, note and WhatsApp
   message), 6 category cards.
6. **Nuestra historia** `#historia` — photo + glass badge, text, quote, 3 stats.
7. **Clientes** `#clientes` — 4 client types, "Precios especiales por volumen" band, 3 reviews.
8. **Por qué elegirnos** `#servicios` — 5 cards, each with a WhatsApp link.
9. **Visítanos** `#visitanos` — map, 4 info cards, "Cómo llegar".
10. **Contacto** `#contacto` — WhatsApp CTA + newsletter-by-WhatsApp form.
11. **Footer**.

Menu labels must match section titles: **Catálogo · Historia · Clientes · Por qué elegirnos ·
Visítanos · Contacto**. The active section is highlighted while scrolling (IntersectionObserver).

### Container

- One setting: `site.containerWidth` (currently **1200**; the client may try 1080 or 960).
- Injected as `--container-max` on `<html>`; used by the `container-site` / `container-inset`
  utilities. Backgrounds are always full-bleed; only content is constrained.
- Never hard-code `max-width: 1200px` in components.

## 6. Visual rules

### Fonts

**Playfair Display** (headings, logo, numbers, quotes) + **Lato** (everything else). Fonts were
tested and these were kept; do not change them.

### Logo

- Component: `src/components/ui/Logo.astro` — real text, not an image. The wordmark is "ROMA"
  with an inline SVG diamond standing in for the "O", and the tagline ("Joyería") right-aligned
  underneath. Text comes from `site.logo` (`word`, `tagline`); props are `size` (default
  `34px`), `tagline`, `href`, `stroke` (diamond weight: `7.5` at ≤ 34 px, `6.5` when larger).
- Colours: the letters inherit the theme's text colour; the diamond and the tagline use
  `--logo-accent` — day `#8A6A2F`, night `#D6B97A` (set in `global.css` with the other tokens).
- Favicons and PWA icons live in `public/` (`favicon.ico`, `favicon.svg`, `favicon-32.png`,
  `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`,
  `site.webmanifest`); exported logo files for other uses (og:image, email, print, WhatsApp
  profile) are in `public/brand/`.
- The diamond is traced from a photo of the shop's card. **When the printer's original vector
  file (SVG/PDF/AI) arrives, replace the diamond shape with it** so the mark is exact.

### Day palette (default light)

| Token | Hex |
| --- | --- |
| ink (text / dark bands) | `#2A2622` |
| ink-soft (paragraphs) | `#5C554C` |
| cream (alt sections) | `#F7F3EC` |
| sand / sand-light (photo placeholders) | `#E8DFD0` / `#EFE9DF` |
| line / line-strong | `#E8E2D8` / `#CFC6B8` |
| gold (text accent) / gold-dark | `#8A6A2F` / `#5E4720` |
| gold-light (on dark) | `#D6B97A` |
| forest (trust bar) | `#1F2A24` |
| footer | `#1E1B18` |
| WhatsApp green (buttons) | `#075E54` |

### Night palette

| Token | Value |
| --- | --- |
| bg / bg-alt | `#0E0C0A` / `#14110D` |
| ink / soft / muted | `#F3EBDD` / `#B8AD9B` / `#DCD2C1` |
| gold / gold-hi | `#D6B97A` / `#F0D9A3` |
| lines | `rgba(214,185,122,0.16–0.38)` |
| cards | `rgba(255,244,222,0.035)` + inner top highlight + deep shadow |
| WhatsApp | `#0B7F62` with soft green glow; "Preguntar por…" links turn `#E3C78C` |
| hero / sections | soft radial gold glows (`rgba(214,185,122,0.07–0.16)`) |

Night-mode rules (agreed with the client):

- **Gold gradient lines are only for section separation** (thin line, brightest in the middle,
  fades at both edges, soft glow). **Never** put gradient borders on cards, panels, buttons or
  any UI box — those use a plain subtle gold border.
- Gold gradient text only on the italic accents ("tienda real", "conversación") and the
  history stats.
- No new hues. Night is built from variations of the same ink / cream / gold / forest palette.

Implement both palettes as CSS custom properties switched by a class or `data-theme` on
`<html>`, so components only reference tokens (Tailwind `@theme` + a `[data-theme="night"]`
override block).

### Day/night switch

- `role="switch"` + `aria-checked`, 44 px tall, sun/moon icons, knob animates.
- First visit follows `prefers-color-scheme`; the user's choice is saved in `localStorage`
  (`roma-theme`).
- Set the theme **before first paint** (tiny inline script in `<head>`) to avoid a flash.
- Colours transition smoothly (~0.5 s); respect reduced motion.

### Effects

- Frosted glass (`backdrop-filter`) on header, hero badge, trust bar, cards.
- Scroll-driven parallax / reveal with CSS `animation-timeline: view()` inside
  `@supports`; static fallback elsewhere.
- Fixed patterned backgrounds (diamond / dots) **only ≥ 1024 px**; normal scrolling below.
- Card hover: lift 6 px + deeper shadow (night adds a faint gold glow).
- Floating WhatsApp button pulses **3 times**, then stops.
- Everything animated is disabled under `prefers-reduced-motion: reduce`.

## 7. Responsive rules

| Width | Behaviour |
| --- | --- |
| ≥ 1101 px | Full menu in header |
| ≤ 1100 px | Menu collapses to a ☰ button (44 px) that opens a full-width panel; closes on link click |
| ≤ 1024 px | Section padding ~72 px; photos 420 px; fixed backgrounds off |
| ≤ 767 px (phones) | 20 px side padding; top-bar address hidden; header WhatsApp button hidden; **bottom bar** "Cómo llegar" + "WhatsApp" replaces the floating button; hero photo 300 px with badge inside; trust bar 1 column; Mayoreo/Menudeo toggle = two equal full-width buttons; map 280 px; decorative gem and big quote mark hidden; hero veil switches from horizontal to vertical; footer gets bottom padding for the bar |

Check every change at **390, 820, 1280 and 1440 px**, in day and night.

## 8. Accessibility (target: WCAG 2.2 AA) — requirements, not nice-to-haves

1. Visible `:focus-visible` outline (3 px; `#7A5C26` day, `#F0D9A3` night).
2. Every WhatsApp/Maps link says where it goes for screen readers ("(abre WhatsApp)"); repeated
   links include context ("Preguntar por WhatsApp sobre Reparaciones…"); arrows `→` are
   `aria-hidden`. External links: `target="_blank" rel="noopener"`.
3. Category cards have a short `aria-label` ("Anillos, Mayoreo desde $X. Preguntar por WhatsApp").
4. "Saltar al contenido" skip link as the first focusable element.
5. Touch targets ≥ 44 px (menu, switch, buttons, form controls).
6. Theme remembers the choice and follows the device (see §6).
7. Pulsing animation stops after 3 cycles.
8. Form: labels, `required`, validation (name; WhatsApp ≥ 10 digits; consent checkbox);
   messages in a `role="status"` live region; focus moves to the field with the error.
9. Real photos need meaningful Spanish `alt` text; decorative images/backgrounds are
   `aria-hidden` / `alt=""`.

Also: one `h1`, logical `h2`/`h3`; `lang="es-MX"`; contrast ≥ 4.5:1 for text (measured: the
weakest pair, gold `#8A6A2F` on cream `#F7F3EC`, is 4.54:1 — don't make it lighter).

## 9. WhatsApp behaviour

- Always build links with `waLink(message)`; number from `site.whatsapp.number`
  (international format, digits only, e.g. `5215512345678`).
- Every CTA has its own pre-written message (category × mayoreo/menudeo, each service,
  "cotizar mayoreo", general contact).
- Newsletter form → `POST` JSON to `PUBLIC_NEWSLETTER_ENDPOINT` (webhook, e.g. n8n → Google
  Sheets): `{ nombre, telefono, interes, consentimiento, fecha }`. If the variable is empty,
  show a clear message instead of failing silently.

## 10. Content still pending from the client

Keep placeholders in `[square brackets]` until real data arrives; never invent business facts.

- [ ] WhatsApp number, street address, postal code, hours, parking
- [ ] Real photos: hero/vitrina, hero background, fachada, one per category
- [ ] Final category list + "desde" prices (mayoreo and menudeo)
- [ ] 3 real reviews (with permission) + Google rating link
- [ ] History paragraph (founder, origin)
- [ ] Resolve "desde 1999" vs "más de 30 años" (they contradict)
- [ ] One business name: "Roma Joyería" vs "Joyería Roma"
- [ ] Privacy notice text (aviso de privacidad) reviewed by a lawyer
- [ ] Domain → `astro.config.mjs` `site`; Google Maps embed URL; Instagram/Facebook URLs

## 11. Workflow

- `main` = production. Work on branches; one PR per round of client feedback.
- Hosting: Cloudflare Pages / Netlify / Vercel — build `npm run build`, output `dist`, env
  `PUBLIC_NEWSLETTER_ENDPOINT`. Share **preview URLs** with the client for review.
- **Content edits** (texts, prices, photos, number) → edit `content.ts` / `site.ts` /
  `public/images` directly in code.
- **Visual/design changes** → change the design in Claude Design and hand off again, so design
  and code don't drift apart.
- Before merging: `npm run build` passes, `astro check` has 0 errors, page checked at the four
  widths in both themes, keyboard-only pass, Lighthouse mobile ≥ 90 for performance and
  accessibility.

## 12. Don'ts

- Don't add colours, fonts, sections or copy that aren't in the design or the data files.
- Don't put gradient borders on boxes (see §6).
- Don't hard-code business data or copy inside components.
- Don't add a cart, prices that weren't provided, or tracking scripts without asking.
- Don't remove accessibility features to "simplify".
