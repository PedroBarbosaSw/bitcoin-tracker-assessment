/**
 * Converts a date from YYYY-MM-DD format to DD-MM-YYYY format.
 * @param date The date string in YYYY-MM-DD format to be converted.
 * @returns The date string converted to DD-MM-YYYY format.
 */
export const formatDateToDDMMYYYY = (date: string) => {
  const parts = date.split('-');
  return `${parts[2]}-${parts[1]}-${parts[0]}`;
};
