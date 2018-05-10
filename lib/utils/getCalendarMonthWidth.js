Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getCalendarMonthWidth;
var CALENDAR_MONTH_PADDING = 25;

function getCalendarMonthWidth(daySize) {
  return 7 * daySize + 2 * CALENDAR_MONTH_PADDING;
}