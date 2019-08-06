/**
 * function parseDate(input)
 * given a date input, it checks if it's a string or a date object and only returns the date as an object
 * @param {string||object} input
 */
function parseDate(input) {
  if (typeof input === "object") input = dateToString(input);
  let parts = input.match(/(\d+)/g);
  return new Date(parts[0], parts[1] - 1, parts[2]);
}

/**
 * function dateToString(date)
 * returns a date given a provided date object. It won't consider time.
 * @param {object} date
 */
function dateToString(date) {
  return (
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  );
}
/**
 * function calculateWorkDays(firstDate, lastDate)
 * Calculates all the work days between two provided dates. The dates can be on string format "2019-02-19" or as a date object.
 * @param {string||object} firstDate
 * @param {string||object} lastDate
 */
function calculateWorkDays(firstDate, lastDate) {
  const startDate = parseDate(firstDate);
  const endDate = parseDate(lastDate);

  if (endDate < startDate) return 0;

  const milliSecondsPerDay = 1 * 24 * 60 * 60 * 1000;
  startDate.setHours(0, 0, 0, 1);
  endDate.setHours(23, 59, 59, 999);
  const diff = endDate - startDate;
  let days = Math.ceil(diff / milliSecondsPerDay);
  const weeks = Math.floor(days / 7);
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
  /*
  console.log(`calculateWorkDays:
  firstDate: ${firstDate}
  lastDate: ${lastDate}
  startDate: ${startDate}
  endDate: ${endDate}
  diff: ${diff}
  days: ${days}
  weeks: ${weeks}
  startDay: ${startDay}
  endDay: ${endDay}
  `);
*/
  return days;
}
// module.exports = calculateWorkDays;
export default calculateWorkDays;
