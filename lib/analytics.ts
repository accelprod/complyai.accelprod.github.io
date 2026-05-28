/**
 * Analytics — thin wrapper around Plausible's `plausible()` global.
 *
 * Safe to call from any component, server or client:
 *   - Returns silently if `window` is undefined (SSR).
 *   - Returns silently if Plausible script hasn't loaded (dev or before
 *     network finishes).
 *   - Never throws.
 *
 * Set NEXT_PUBLIC_PLAUSIBLE_DOMAIN in env to enable. The script tag is
 * conditionally rendered from app/layout.tsx based on that variable.
 */

type PlausibleEventProps = Record<string, string | number | boolean>;

type PlausibleGlobal = (
  event: string,
  options?: { props?: PlausibleEventProps; callback?: () => void },
) => void;

declare global {
  interface Window {
    plausible?: PlausibleGlobal & { q?: unknown[] };
  }
}

export function track(event: string, props?: PlausibleEventProps): void {
  if (typeof window === 'undefined') return;
  // Plausible defines `window.plausible` itself; this helper just guards
  // against the script not being loaded yet (e.g. local dev with no domain).
  if (typeof window.plausible !== 'function') return;
  try {
    window.plausible(event, props ? { props } : undefined);
  } catch {
    /* never let an analytics call break the UI */
  }
}

/** Common event names — keep this list short and meaningful. */
export const EVENTS = {
  CTA_CLICK: 'cta_click',
  FORM_SUBMIT_SUCCESS: 'form_submit_success',
} as const;
