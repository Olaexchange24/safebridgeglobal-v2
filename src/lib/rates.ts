// Profit margin (in NGN) added on top of the raw market RMB/NGN rate.
// Edit this single constant to change the margin applied everywhere.
export const PROFIT_MARGIN_NGN = 1.5;

/**
 * Given the raw USD/NGN and USD/CNY rates from the market API,
 * returns the adjusted RMB/NGN rate (NGN per 1 RMB) including profit margin,
 * rounded to 2 decimal places.
 */
export function getAdjustedRmbNgn(usdNgn: number, usdCny: number): number {
  if (!usdNgn || !usdCny) return 0;
  const raw = usdNgn / usdCny;
  const adjusted = raw + PROFIT_MARGIN_NGN;
  return Math.round(adjusted * 100) / 100;
}