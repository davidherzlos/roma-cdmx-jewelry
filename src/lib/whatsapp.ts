import { site } from '@/config/site';

/**
 * Construye un enlace de WhatsApp con un mensaje pre-escrito.
 * El número sale de `site.whatsapp.number` (formato internacional, solo dígitos).
 */
export function waLink(message?: string): string {
  const number = site.whatsapp.number.replace(/\D/g, '');
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
