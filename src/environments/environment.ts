// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  // Configurations coming from the container ie: Teamsite component wrapper.

  dateFilterType: window['dateFilterType'] || 'day',
  calendars: window['calendars'] || ["global"], //,"Advocacy","ADA-ISD","Clerk-of-the-Board","Animal-Services","Building-RER","Small-Business-ISD","Community-Action","Management-Budget","Corrections","PHCD","CRB-Advocacy","RER","Cultural-Affairs","Derm-RER","Juvenile-Services","BCC","Solid-Waste","Parks","MDEAT","Elections","Human-Resources","Ethics","ITD","Film-RER","Finance","Fire","Homeless-Trust","ISD","Oedit-RER","Library","Mayor","Police","Transit","Medical-Examiner","MAB-Advocacy","Management-and-Budget","PA","Planning-RER","Port-of-Miami","Procurement-ISD","CRA-Advocacy","Vizcaya","Water-and-Sewer"],
  showCalendarsFilter: window['showCalendarsFilter'] || true,
  excludeDepartmentOnly: window['excludeDepartmentOnly'] || false,
  skipLegacy: window['skipLegacy'] || false,
  // calendarUrls: {
  //   eventsOnCalendarUrl: (calendarId) => `https://s0144821.miamidade.gov:7009/calendar/api/calendars/${calendarId}/events`,
  //   categoriesUrl: 'https://s0144821.miamidade.gov:7000/registration/api/topics',
  //   typesUrl: 'https://s0144821.miamidade.gov:7009/calendar/api/configuration/types'
  // }


  calendarUrls: {
    eventsOnCalendarUrl: (calendarId) => `https://api2.miamidade.gov/calendar/api/calendars/${calendarId}/events`,
    categoriesUrl: 'https://api2.miamidade.gov/registration/api/topics',
    typesUrl: 'https://api2.miamidade.gov/calendar/api/configuration/types'
  }
};
