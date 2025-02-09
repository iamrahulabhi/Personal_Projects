// dateUtils.js
export const getFormattedDate = (offset = 0) => {
  const date = new Date();
  date.setDate(date.getDate() + offset); // Adjust the date by the offset (e.g., -1 for yesterday)
  const options = { weekday: 'long', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};
