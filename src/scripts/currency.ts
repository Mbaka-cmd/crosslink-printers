// Shared by the header and the product page. Prices are always stored in KES.
// Any element with data-kes="8500" is re-written as KES or USD depending on the visitor's choice.
export type Cur = 'KES' | 'USD';
const KEY = 'crosslink-currency';

export function rate(): number {
  const el = document.querySelector<HTMLElement>('[data-usd-rate]');
  return el ? Number(el.dataset.usdRate) || 0 : 0;
}

const group = (s: string) => s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export function getCur(): Cur {
  try {
    return localStorage.getItem(KEY) === 'USD' && rate() > 0 ? 'USD' : 'KES';
  } catch {
    return 'KES';
  }
}

export function money(kes: number, cur: Cur = getCur()): string {
  return cur === 'USD' ? `USD ${group((kes / rate()).toFixed(2))}` : `KES ${group(String(Math.round(kes)))}`;
}

export function applyCurrency(): void {
  const cur = getCur();
  document.querySelectorAll<HTMLElement>('[data-kes]').forEach((el) => {
    const n = Number(el.dataset.kes);
    if (!isFinite(n) || el.dataset.kes === '') return;
    el.textContent = (el.dataset.prefix ?? '') + money(n, cur) + (el.dataset.suffix ?? '');
  });
  document.querySelectorAll<HTMLElement>('[data-cur-btn]').forEach((b) => {
    b.setAttribute('aria-pressed', String(b.dataset.curBtn === cur));
  });
}

export function setCur(c: Cur): void {
  try { localStorage.setItem(KEY, c); } catch { /* storage can be blocked */ }
  applyCurrency();
  document.dispatchEvent(new CustomEvent('currencychange'));
}