// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';

// [Dominio pendiente] — cambiar por el dominio real cuando el cliente lo confirme.
export default defineConfig({
  site: 'https://example.com',
  output: 'static',
  integrations: [svelte()],
  vite: {
    plugins: [tailwindcss()],
  },
});
