export const environment = {
  production: true,

  // Configurations coming from the container ie: Teamsite component wrapper.
  dateFilterType: window['dateFilterType'] || 'month',
  calendars: window['calendars'] || ['global'],
  showCalendarsFilter: window['showCalendarsFilter'] || false,
  excludeDepartmentOnly: window['excludeDepartmentOnly'] || false,
  skipLegacy: window['skipLegacy'] || false,
  displayFullView: window['compactMode'] || false,
  calendarUrls: {
    eventsOnCalendarUrl: (calendarId) => `https://api2.miamidade.gov/calendar/api/calendars/${calendarId}/events`,
    categoriesUrl: 'https://api2.miamidade.gov/registration/api/topics',
    typesUrl: 'https://api2.miamidade.gov/calendar/api/configuration/types'
  }
};
