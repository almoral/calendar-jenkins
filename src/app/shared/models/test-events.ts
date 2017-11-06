



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


export const testEvents: MdcEvent[] = [
  MdcEvent.fromJSON(jsonEvent1), MdcEvent.fromJSON(jsonEvent2)
]
