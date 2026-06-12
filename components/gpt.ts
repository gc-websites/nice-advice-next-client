'use client';

// Minimal GPT (Google Publisher Tag) bootstrap for the funnel ad slots.
// GAM network 23357091102 (AdSense-linked, backfill enabled per ad unit);
// units live under the auto-created ca-pub unit, so every path is
// /23357091102/ca-pub-1088654265590051/<adUnitCode>.
//
// gpt.js is injected lazily on the first slot mount, so content pages
// (which still use plain AdSense) never load it.

import { getTrackingParams } from './track';

export const AD_UNIT_PREFIX = '/23357091102/ca-pub-1088654265590051';

export type FillStatus = 'filled' | 'unfilled';

/* eslint-disable @typescript-eslint/no-explicit-any */
type Googletag = {
  cmd: Array<() => void>;
  pubads: () => any;
  defineSlot: (path: string, size: [number, number], divId: string) => any;
  display: (divId: string) => void;
  destroySlots: (slots?: any[]) => boolean;
  enableServices: () => void;
};

declare global {
  interface Window {
    googletag?: Googletag;
  }
}

function gt(): Googletag {
  window.googletag = window.googletag || ({ cmd: [] } as unknown as Googletag);
  return window.googletag;
}

let scriptInjected = false;
let servicesEnabled = false;

function injectScript() {
  if (scriptInjected) return;
  scriptInjected = true;
  if (document.querySelector('script[src*="securepubads.g.doubleclick.net/tag/js/gpt.js"]')) return;
  const s = document.createElement('script');
  s.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
  s.async = true;
  s.crossOrigin = 'anonymous';
  document.head.appendChild(s);
}

/**
 * GAM `source` key-value from the persisted utm_source — this is what makes
 * revenue reportable per traffic source. GAM value constraints: <=40 chars;
 * keep it to a safe charset so report rows stay clean.
 */
export function sourceValue(): string {
  try {
    const raw = (getTrackingParams().utm_source || '').toLowerCase().trim();
    const clean = raw.replace(/[^a-z0-9_-]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 40);
    return clean || 'none';
  } catch {
    return 'none';
  }
}

/**
 * Define + display one fixed-size funnel slot. Returns a cleanup that
 * destroys the slot — REQUIRED on unmount/route change or the next page's
 * defineSlot with the same div id fails.
 *
 * `onRender` fires with the official fill status (slotRenderEnded.isEmpty) —
 * this replaces the old adsbygoogle data-ad-status MutationObserver hack.
 */
export function showSlot(opts: {
  adUnit: string;
  divId: string;
  width: number;
  height: number;
  onRender: (status: FillStatus) => void;
}): () => void {
  injectScript();
  const g = gt();
  let slot: any = null;
  let listener: ((event: any) => void) | null = null;

  g.cmd.push(() => {
    slot = g.defineSlot(`${AD_UNIT_PREFIX}/${opts.adUnit}`, [opts.width, opts.height], opts.divId);
    if (!slot) return; // div id already has a live slot (double-mount) — skip
    slot.addService(g.pubads());
    slot.setTargeting('source', sourceValue());
    listener = (event: any) => {
      if (event.slot === slot) opts.onRender(event.isEmpty ? 'unfilled' : 'filled');
    };
    g.pubads().addEventListener('slotRenderEnded', listener);
    if (!servicesEnabled) {
      servicesEnabled = true;
      g.pubads().collapseEmptyDivs(); // unfilled slots take no space (before enableServices)
      g.enableServices();
    }
    g.display(opts.divId);
  });

  return () => {
    g.cmd.push(() => {
      if (listener) g.pubads().removeEventListener('slotRenderEnded', listener);
      if (slot) g.destroySlots([slot]);
    });
  };
}
