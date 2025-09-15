// Event helpers: status mapping, date formatting for Arabic “day month”
// Why: Centralize display logic and keep components clean.

const MONTHS_AR = [
  'يناير',
  'فبراير',
  'مارس',
  'أبريل',
  'مايو',
  'يونيو',
  'يوليو',
  'أغسطس',
  'سبتمبر',
  'أكتوبر',
  'نوفمبر',
  'ديسمبر',
];

export function formatDayMonth(locale, iso) {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  const day = d.getDate();
  const month =
    locale === 'ar' ? MONTHS_AR[d.getMonth()] : d.toLocaleString(locale, { month: 'long' });
  // Only “day month” (no year)
  return locale === 'ar' ? `${day} ${month}` : `${month} ${day}`;
}

export function statusLabel(status, dict) {
  const map = dict?.statuses ?? { open: 'Open', soon: 'Soon', closed: 'Closed' };
  return map[status] ?? status;
}

export function statusColor(status) {
  // Tokens from Tailwind v4 @theme (7B)
  switch (status) {
    case 'open':
      return 'bg-status-open/30 text-[color-mix(in_oklab,var(--color-status-open)_20%,white_80%)]';
    case 'soon':
      return 'bg-status-soon/30 text-[color-mix(in_oklab,var(--color-status-soon)_20%,white_80%)]';
    case 'closed':
      return 'bg-status-closed/30 text-[color-mix(in_oklab,var(--color-status-closed)_20%,white_80%)]';
    default:
      return 'bg-border-default/30 text-[color-mix(in_oklab,var(--color-primary-foreground)_20%,white_80%)]';
  }
}

/**
 * Compute primary meta text based on 6D rule:
 * If date exists and status !== 'closed' => show "day month"
 * else show status label only.
 */
export function computeEventMeta(locale, event, dict) {
  const dateText = formatDayMonth(locale, event.date_iso);
  if (dateText && event.status !== 'closed') return dateText;
  if (!dateText) return null;
  return statusLabel(event.status, dict);
}
