export const environment = {
  production: true,
  titleFilter: '',
  dateFilterType: window['dateFilterType'] || 'month',
  calendars: window['calendars'] || ['CalProof1', 'CalProof2', 'CalProof3'],
  calendarUrl: {
    // eventsOnCalendar: (calendarId) => `/api/calendar/${calendarId}/events`
    eventsOnCalendar: (calendarId) => `https://s0144821.miamidade.gov:7009/calendar/api/calendars/${calendarId}/events`
  }
};
