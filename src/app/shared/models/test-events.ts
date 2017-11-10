



import {MdcEvent} from "./mdc-event";
let jsonEvent1 = {
  id: 1,
  title: 'my title',
  type: 'public',
  startDate: '2017-07-19T15:00:00Z',
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
  fee: 3,
  rsvp: 'joe bler',
  categories: ['animals', 'public-safety'],
  url: {'description': 'URL for event', 'url': 'http://www.google.com'},
  address: null
}

let jsonEvent2 = {
  id: 2,
  title: 'my title2',
  type: 'public',
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
  fee: 4,
  rsvp: 'joe bler',
  categories: ['animals', 'public-safety'],
  url: {'description': 'URL for event 2', 'url': 'http://www.google.com'},
  address: null
}

let jsonEvent3 = {
  id: 3,
  title: 'my title3',
  type: 'private',
  startDate: '2017-07-22T15:00:00Z',
  endDate: '2017-07-22T16:00:00Z',
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
  fee: 5,
  rsvp: 'joe bler',
  categories: ['animals', 'public-safety'],
  url: {'description': 'URL for event 3', 'url': 'http://www.google.com'},
  address: null
}


let jsonEvent4 = {
  id: 4,
  title: 'my title4',
  type: 'private',
  startDate: '2017-07-17T15:03:00Z',
  endDate: '2017-07-21T15:04:00Z',
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
  fee: 5,
  rsvp: 'joe bler',
  categories: ['animals', 'public-safety'],
  url: {'description': 'URL for event 4', 'url': 'http://www.google.com'},
  address: null
}

let jsonEvent5 = {
  id: 5,
  title: 'my title5',
  type: 'private',
  startDate: '2017-07-17T15:07:00Z',
  endDate: '2017-07-21T15:08:00Z',
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
  fee: 7,
  rsvp: 'joe bler',
  categories: ['animals', 'public-safety'],
  url: {'description': 'URL for event 5', 'url': 'http://www.google.com'},
  address: null
}

let jsonEvent6 = {
  id: 6,
  title: 'my title6',
  type: 'private',
  startDate: '2017-07-18T15:00:00Z',
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
  fee: 3.5,
  rsvp: 'joe bler',
  categories: ['animals', 'public-safety'],
  url: {'description': 'URL for event 6', 'url': 'http://www.google.com'},
  address: null
}

let jsonEvent7 = {
  id: 7,
  title: 'my title7',
  type: 'private',
  startDate: '2017-07-23T14:00:00Z',
  endDate: '2017-07-23T16:00:00Z',
  contactName: 'my contactName2',
  contactPhone: '7055555557',
  contactEmail: 'contact7@email.com',
  adaName: 'my adaName7',
  adaPhone: '7055551274',
  adaEmail: 'ada7@email.com',
  isRecurringEvent: false,
  isAllDayEvent: true,
  shortDescription: 'This is a short description 7.',
  longDescription: 'This is a long description 7.',
  isClosedToMedia: true,
  isClosedToPublic: false,
  isFree: false,
  fee: 3.5,
  rsvp: 'joe bler',
  categories: ['animals', 'public-safety'],
  url: {'description': 'URL for event 7', 'url': 'http://www.google.com'},
  address: null
}

let jsonEvent8 = {
  id: 8,
  title: 'my title8',
  type: 'private',
  startDate: '2017-07-23T15:00:00Z',
  endDate: '2017-07-23T18:00:00Z',
  contactName: 'my contactName2',
  contactPhone: '8055555558',
  contactEmail: 'contact8@email.com',
  adaName: 'my adaName8',
  adaPhone: '8055551284',
  adaEmail: 'ada8@email.com',
  isRecurringEvent: false,
  isAllDayEvent: true,
  shortDescription: 'This is a short description 8.',
  longDescription: 'This is a long description 8.',
  isClosedToMedia: true,
  isClosedToPublic: false,
  isFree: false,
  fee: 3.5,
  rsvp: 'joe bler',
  categories: ['animals', 'public-safety'],
  url: {'description': 'URL for event 8', 'url': 'http://www.google.com'},
  address: null
}

let jsonEvent9 = {
  id: 9,
  title: 'my title9',
  type: 'private',
  startDate: '2017-07-23T18:00:00Z',
  endDate: '2017-07-23T19:00:00Z',
  contactName: 'my contactName2',
  contactPhone: '9055555559',
  contactEmail: 'contact9@email.com',
  adaName: 'my adaName9',
  adaPhone: '9055551294',
  adaEmail: 'ada9@email.com',
  isRecurringEvent: false,
  isAllDayEvent: true,
  shortDescription: 'This is a short description 9.',
  longDescription: 'This is a long description 9.',
  isClosedToMedia: true,
  isClosedToPublic: false,
  isFree: false,
  fee: 3.5,
  rsvp: 'joe bler',
  categories: ['animals', 'public-safety'],
  url: {'description': 'URL for event 9', 'url': 'http://www.google.com'},
  address: null
}

export class TestEvents {

  public static testEventsOne = [MdcEvent.fromJSON(jsonEvent3)];

  public static testEventsTwo = [MdcEvent.fromJSON(jsonEvent1), MdcEvent.fromJSON(jsonEvent2)];

  public static testEventsThree = [
    MdcEvent.fromJSON(jsonEvent4), MdcEvent.fromJSON(jsonEvent5), MdcEvent.fromJSON(jsonEvent6)];

  public static testEventsSameDay_7_23_2017 = [
    MdcEvent.fromJSON(jsonEvent7), MdcEvent.fromJSON(jsonEvent8), MdcEvent.fromJSON(jsonEvent9)];

  public static testEventsDifferentDates = [
    MdcEvent.fromJSON(jsonEvent2), MdcEvent.fromJSON(jsonEvent1), MdcEvent.fromJSON(jsonEvent3)];

  public static testEvents = [
    ...TestEvents.testEventsOne,
    ...TestEvents.testEventsTwo,
    ...TestEvents.testEventsThree,
    ...TestEvents.testEventsSameDay_7_23_2017
  ];


}
