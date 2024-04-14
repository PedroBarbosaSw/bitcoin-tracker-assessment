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

/**
 * Formats a number to display up to two decimal places and removes any negative sign.
 * @param {number} number The number to be formatted.
 * @returns {string} The formatted number as a string with no negative sign and up to two decimal places.
 */
export const formatPositiveDecimal = (value: number) => {
  const formattedNumber = Math.abs(value).toFixed(2);
  return formattedNumber;
}
