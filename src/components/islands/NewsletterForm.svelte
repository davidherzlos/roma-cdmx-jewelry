<script lang="ts">
  import type { newsletter } from '@/data/content';

  type Copy = typeof newsletter;
  type Field = 'name' | 'phone' | 'consent';

  interface Props {
    copy: Copy;
    /** PUBLIC_NEWSLETTER_ENDPOINT. Empty = a clear notice is shown. */
    endpoint: string;
  }

  let { copy, endpoint }: Props = $props();

  let name = $state('');
  let phone = $state('');
  let interest = $state(copy.interestOptions[0]?.value ?? '');
  let consent = $state(false);
  let status = $state('');
  let invalid = $state<Field | null>(null);
  let sending = $state(false);

  let nameEl: HTMLInputElement | undefined = $state();
  let phoneEl: HTMLInputElement | undefined = $state();
  let consentEl: HTMLInputElement | undefined = $state();

  function fail(field: Field, message: string) {
    invalid = field;
    status = message;
    const el = field === 'name' ? nameEl : field === 'phone' ? phoneEl : consentEl;
    el?.focus();
  }

  async function onsubmit(event: SubmitEvent) {
    event.preventDefault();
    if (sending) return;

    const trimmedName = name.trim();
    const digits = phone.replace(/\D/g, '');
    if (!trimmedName) return fail('name', copy.errors.name);
    if (digits.length < 10) return fail('phone', copy.errors.phone);
    if (!consent) return fail('consent', copy.errors.consent);
    invalid = null;

    if (!endpoint) {
      status = copy.errors.noEndpoint;
      return;
    }

    sending = true;
    status = copy.sending;
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: trimmedName,
          telefono: digits,
          interes: interest,
          consentimiento: consent,
          fecha: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      status = copy.success.replace('{nombre}', trimmedName);
      name = '';
      phone = '';
      interest = copy.interestOptions[0]?.value ?? '';
      consent = false;
    } catch {
      status = copy.errors.network;
    } finally {
      sending = false;
    }
  }

  const inputClass =
    'mb-[18px] box-border block min-h-12 w-full rounded-md border border-input-border bg-input px-3.5 font-sans text-base text-input-ink aria-invalid:border-gold';
</script>

<form
  {onsubmit}
  novalidate
  aria-describedby="newsletter-status"
  class="fx-rise glass min-w-0 flex-[1_1_380px] rounded-xl bg-form p-6 text-form-ink shadow-form md:p-9"
>
  <h3 class="m-0 mb-2.5 font-display text-[28px] font-normal">{copy.title}</h3>
  <p class="m-0 mb-6 text-base leading-[1.6] text-form-soft">{copy.intro}</p>

  <label for="nl-name" class="mb-1.5 block text-sm font-bold">{copy.nameLabel}</label>
  <input
    bind:this={nameEl}
    bind:value={name}
    id="nl-name"
    name="nombre"
    type="text"
    autocomplete="name"
    required
    aria-invalid={invalid === 'name' ? 'true' : undefined}
    class={inputClass}
  />

  <label for="nl-phone" class="mb-1.5 block text-sm font-bold">{copy.phoneLabel}</label>
  <input
    bind:this={phoneEl}
    bind:value={phone}
    id="nl-phone"
    name="telefono"
    type="tel"
    inputmode="tel"
    autocomplete="tel"
    placeholder={copy.phonePlaceholder}
    required
    aria-invalid={invalid === 'phone' ? 'true' : undefined}
    class={inputClass}
  />

  <fieldset class="m-0 mb-[18px] border-0 p-0">
    <legend class="mb-2 p-0 text-sm font-bold text-form-ink">{copy.interestLegend}</legend>
    <div class="flex flex-wrap gap-[18px] text-[15px]">
      {#each copy.interestOptions as opt (opt.value)}
        <label for={`nl-${opt.value}`} class="flex min-h-11 cursor-pointer items-center gap-2">
          <input
            id={`nl-${opt.value}`}
            type="radio"
            name="interes"
            value={opt.value}
            bind:group={interest}
            class="m-0 size-[18px] accent-gold-mid"
          />
          {opt.label}
        </label>
      {/each}
    </div>
  </fieldset>

  <label for="nl-ok" class="mb-6 flex min-h-11 cursor-pointer items-start gap-2.5 text-sm leading-normal text-form-soft">
    <input
      bind:this={consentEl}
      bind:checked={consent}
      id="nl-ok"
      name="consentimiento"
      type="checkbox"
      required
      aria-invalid={invalid === 'consent' ? 'true' : undefined}
      class="m-0 mt-0.5 size-[18px] shrink-0 accent-gold-mid"
    />
    {copy.consentLabel}
  </label>

  <button
    type="submit"
    disabled={sending}
    class="min-h-[52px] w-full cursor-pointer rounded-md border-0 bg-gold font-sans text-base font-bold text-on-gold disabled:cursor-wait disabled:opacity-80"
  >
    {copy.submit}
  </button>

  <p
    id="newsletter-status"
    role="status"
    aria-live="polite"
    class="m-0 mt-3.5 min-h-[22px] text-sm leading-normal text-form-soft"
  >
    {status}
  </p>
</form>
