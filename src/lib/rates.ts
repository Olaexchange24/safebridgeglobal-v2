// Profit margins (in NGN) added on top of the raw market RMB/NGN rate.
export const BASE_MARGIN_NGN = 1.5;
export const EXTRA_MARGIN_NGN = 1.0;
export const PROFIT_MARGIN_NGN = BASE_MARGIN_NGN + EXTRA_MARGIN_NGN;

/**
 * Custom rounding:
 *  - decimal in [.00, .50)  -> round to .50
 *  - decimal in [.50, 1.00) -> round up to next whole number
 */
export function customRound(rate: number): number {
  if (!isFinite(rate)) return 0;
  const whole = Math.floor(rate);
  const decimal = rate - whole;
  if (decimal < 0.5) return whole + 0.5;
  return whole + 1;
}

/**
 * Given raw USD/NGN and USD/CNY rates, returns the final adjusted RMB/NGN
 * rate (NGN per 1 RMB) including profit margin and custom rounding.
 */
export function getAdjustedRmbNgn(usdNgn: number, usdCny: number): number {
  if (!usdNgn || !usdCny) return 0;
  const raw = usdNgn / usdCny;
  return customRound(raw + PROFIT_MARGIN_NGN);
}
