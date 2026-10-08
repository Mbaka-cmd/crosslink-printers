// KES per 1 USD. Leave null until Crosslink decides which rate to use.
// While it is null the KES / USD switch is hidden on the live site.
// In dev (npm run dev) a DEMO rate is used so you can test the switch.
export const USD_RATE: number | null = null;

const DEMO_USD_RATE = 130;

export function usdRate(): number | null {
  return USD_RATE ?? (import.meta.env.DEV ? DEMO_USD_RATE : null);
}
export const rateIsDemo = USD_RATE === null;