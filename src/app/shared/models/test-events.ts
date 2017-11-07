



import {MdcEvent} from "./mdc-event";
let jsonEvent1 = {
  id: 1,
  eventName: 'my eventName',
  eventType: 'public',
  startDate: '2017-07-20T15:00:00Z',
  endDate: '2017-07-21T15:00:00Z',
  contactName: 'my contactName',
  contactPhone: '3055555555',
  contactEmail: 'contact@email.com',
  adaName: 'my adaName',
  adaPhone: '3055551234',
  adaEmail: 'ada@email.com',
  isRecurringEvent: false,
  isAllDayEvent: false,
  shortDescription: 'This is a short description.',
  longDescription: 'This is a long description.',
  isClosedToMedia: false,
  isClosedToPublic: false,
  isFree: false,
  categories: ['animals', 'public-safety'],
  eventURL: {'description': 'URL for event', 'url': 'http://www.google.com'}
}

let jsonEvent2 = {
  id: 2,
  eventName: 'my eventName2',
  eventType: 'public',
  startDate: '2017-07-20T15:00:00Z',
  endDate: '2017-07-21T15:00:00Z',
  contactName: 'my contactName2',
  contactPhone: '3055555555',
  contactEmail: 'contact2@email.com',
  adaName: 'my adaName2',
  adaPhone: '3055551234',
  adaEmail: 'ada2@email.com',
  isRecurringEvent: false,
  isAllDayEvent: true,
  shortDescription: 'This is a short description 2.',
  longDescription: 'This is a long description 2.',
  isClosedToMedia: false,
  isClosedToPublic: false,
  isFree: false,
  categories: ['animals', 'public-safety'],
  eventURL: {'description': 'URL for event 2', 'url': 'http://www.google.com'}
}

let jsonEvent3 = {
  id: 3,
  eventName: 'my eventName3',
  eventType: 'private',
  startDate: '2017-07-20T15:00:00Z',
  endDate: '2017-07-21T15:00:00Z',
  contactName: 'my contactName2',
  contactPhone: '3055555556',
  contactEmail: 'contact3@email.com',
  adaName: 'my adaName3',
  adaPhone: '3055551234',
  adaEmail: 'ada3@email.com',
  isRecurringEvent: false,
  isAllDayEvent: true,
  shortDescription: 'This is a short description 3.',
  longDescription: 'This is a long description 3.',
  isClosedToMedia: true,
  isClosedToPublic: false,
  isFree: false,
  categories: ['animals', 'public-safety'],
  eventURL: {'description': 'URL for event 3', 'url': 'http://www.google.com'}
}


let jsonEvent4 = {
  id: 4,
  eventName: 'my eventName4',
  eventType: 'private',
  startDate: '2017-07-20T15:00:00Z',
  endDate: '2017-07-21T15:00:00Z',
  contactName: 'my contactName2',
  contactPhone: '4055555556',
  contactEmail: 'contact4@email.com',
  adaName: 'my adaName4',
  adaPhone: '4055551244',
  adaEmail: 'ada4@email.com',
  isRecurringEvent: false,
  isAllDayEvent: true,
  shortDescription: 'This is a short description 4.',
  longDescription: 'This is a long description 4.',
  isClosedToMedia: true,
  isClosedToPublic: false,
  isFree: false,
  categories: ['animals', 'public-safety'],
  eventURL: {'description': 'URL for event 4', 'url': 'http://www.google.com'}
}

let jsonEvent5 = {
  id: 5,
  eventName: 'my eventName5',
  eventType: 'private',
  startDate: '2017-07-20T15:00:00Z',
  endDate: '2017-07-21T15:00:00Z',
  contactName: 'my contactName2',
  contactPhone: '5055555556',
  contactEmail: 'contact5@email.com',
  adaName: 'my adaName5',
  adaPhone: '5055551254',
  adaEmail: 'ada5@email.com',
  isRecurringEvent: false,
  isAllDayEvent: true,
  shortDescription: 'This is a short description 5.',
  longDescription: 'This is a long description 5.',
  isClosedToMedia: true,
  isClosedToPublic: false,
  isFree: false,
  categories: ['animals', 'public-safety'],
  eventURL: {'description': 'URL for event 5', 'url': 'http://www.google.com'}
}

let jsonEvent6 = {
  id: 6,
  eventName: 'my eventName6',
  eventType: 'private',
  startDate: '2017-07-20T15:00:00Z',
  endDate: '2017-07-21T15:00:00Z',
  contactName: 'my contactName2',
  contactPhone: '6055555556',
  contactEmail: 'contact6@email.com',
  adaName: 'my adaName6',
  adaPhone: '6055551264',
  adaEmail: 'ada6@email.com',
  isRecurringEvent: false,
  isAllDayEvent: true,
  shortDescription: 'This is a short description 6.',
  longDescription: 'This is a long description 6.',
  isClosedToMedia: true,
  isClosedToPublic: false,
  isFree: false,
  categories: ['animals', 'public-safety'],
  eventURL: {'description': 'URL for event 6', 'url': 'http://www.google.com'}
}

export class testEvents {

  public static testEventsOne = [
    MdcEvent.fromJSON(jsonEvent1), MdcEvent.fromJSON(jsonEvent2)];

  public static testEventsTwo = [MdcEvent.fromJSON(jsonEvent3)];

  public static testEventsThree = [
    MdcEvent.fromJSON(jsonEvent4), MdcEvent.fromJSON(jsonEvent5), MdcEvent.fromJSON(jsonEvent6)];


  public static testEventsByDate = [
    {date: new Date(2017, 10, 5), events: testEvents.testEventsOne},
    {date: new Date(2017, 10, 7), events: testEvents.testEventsTwo},
    {date: new Date(2017, 10, 10), events: testEvents.testEventsThree}]


}
