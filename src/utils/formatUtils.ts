/**
 * Formats a number as a US Dollar currency string.
 * @param amount The number to format.
 * @returns The formatted dollar string.
 */
export const formatAsUSD = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  }).format(amount);
};
