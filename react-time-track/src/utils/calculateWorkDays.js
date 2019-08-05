function parseDate(input) {
  let parts = input.match(/(\d+)/g);
  return new Date(parts[0], parts[1] - 1, parts[2]);
}

function workingDays(firstDate, lastDate) {
  const startDate = parseDate(firstDate);
  const endDate = parseDate(lastDate);

  if (endDate < startDate) return 0;

  const milliSecondsPerDay = 1 * 24 * 60 * 60 * 1000;
  startDate.setHours(0, 0, 0, 1);
  endDate.setHours(23, 59, 59, 999);
  const diff = endDate - startDate;
  let days = Math.ceil(diff / milliSecondsPerDay);
  let weeks = Math.floor(days / 7);
  days = days - weeks * 2;

  const startDay = startDate.getDay();
  const endDay = endDate.getDay();

  if (startDay - endDay > 1) {
    days = days - 2;
  }

  if (startDay === 0 && endDay !== 6) {
    days--;
  }

  if (endDay === 6 && startDay !== 0) {
    days--;
  }
  return days;
}

function personalStatus(startD, endD) {}

export default workingDays;
