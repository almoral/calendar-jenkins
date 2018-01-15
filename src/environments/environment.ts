// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  // Configurations coming from the container ie: Teamsite component wrapper.
  dateFilterType: window['dateFilterType'] || 'day',
  calendars: window['calendars'] || ['CalProof1', 'CalProof2', 'CalProof3'],
  showCalendarsFilter: window['showCalendarsFilter'] || true,

  calendarUrls: {
    eventsOnCalendarUrl: (calendarId) => `https://s0144821.miamidade.gov:7009/calendar/api/calendars/${calendarId}/events`,
    categoriesUrl: 'https://s0144821.miamidade.gov:7000/registration/api/topics'
  }
};
