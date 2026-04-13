export const validateDates = (startDate, endDate) => {
  if (!startDate || !endDate) return "Dates are required";

  const [d1, m1, y1] = startDate.split("/");
  const [d2, m2, y2] = endDate.split("/");

  const start = new Date(`${y1}-${m1}-${d1}`);
  const end = new Date(`${y2}-${m2}-${d2}`);

  if (start > end) return "Start date cannot be greater than end date";

  if (start > new Date() || end > new Date())
    return "Future dates not allowed";

  return null;
};