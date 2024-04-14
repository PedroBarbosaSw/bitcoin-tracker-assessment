export const formatDateToDDMMYYYY = (date: string) => {
  const parts = date.split('-');
  return `${parts[2]}-${parts[1]}-${parts[0]}`;
};
