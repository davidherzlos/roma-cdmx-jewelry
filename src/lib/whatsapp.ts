import { site } from '@/config/site';

/**
 * Builds a WhatsApp link with a pre-written message.
 * The number comes from `site.whatsapp.number` (international format, digits only).
 */
export function waLink(message?: string): string {
  const number = site.whatsapp.number.replace(/\D/g, '');
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
