export const convertLongNumbers = (num: number) => {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
    notation: 'compact',
    compactDisplay: 'short',
  }).format(num);
};

export const convertDate = (date: string, monthOptions?: Intl.DateTimeFormatOptions) => {
  const month = new Date(date).toLocaleString('en-US', monthOptions);
  const day = new Date(date).toLocaleString('en-US', { day: '2-digit' });
  const year = new Date(date).getFullYear();
  return { month, day, year };
};
