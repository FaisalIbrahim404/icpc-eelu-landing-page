// Simple i18n util: loads the right dictionary and returns a translator.
//
// Why: Avoid hardcoding strings; keep clean keys; easy to scale later.

import ar from '../data/copy.ar.json';
import en from '../data/copy.en.json';

const dicts = { ar, en };

export function createT(locale = 'ar') {
  const dict = dicts[locale] || dicts.ar;
  return function t(key, fallback = '') {
    // Simple dotted path resolution
    const parts = key.split('.');
    let cur = dict;
    for (const p of parts) cur = (cur && cur[p]) ?? undefined;
    return cur ?? fallback ?? key;
  };
}
