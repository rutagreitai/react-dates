var CALENDAR_MONTH_PADDING = 25;

export default function getCalendarMonthWidth(daySize) {
  return 7 * daySize + 2 * CALENDAR_MONTH_PADDING;
}