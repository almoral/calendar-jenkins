/* tslint:disable:no-unused-variable */



import {MdcEvent} from "./mdc-event";
import {TestEvents} from "./test-events";


describe('MdcEvent', () => {

  let jsonEvent, jsonEvent2;


  beforeEach(function () {
    jsonEvent = {
      id: 1,
      title: 'my title',
      type: 'public',
      startDate: '2017-07-20T15:00:00Z',
      endDate: '2017-07-21T15:00:00Z',
      contactName: 'my contactName',
      contactPhone: '3055555555',
      contactEmail: 'contact@email.com',
      adaName: 'my adaName',
      adaPhone: '3055551234',
      adaEmail: 'ada@email.com',
      isRecurringEvent: true,
      recurrence: ['2017-07-21T15:00:00Z'],
      isAllDayEvent: false,
      shortDescription: 'This is a short description.',
      longDescription: 'This is a long description.',
      isClosedToMedia: false,
      isClosedToPublic: false,
      isFree: false,
      categories: ['animals', 'public-safety'],
      url: {'description': 'URL for event', 'url': 'http://www.google.com'},
      address: null,
      isDepartmentOnly: false
    }

    jsonEvent2 = {
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
      recurrence: null,
      isAllDayEvent: true,
      shortDescription: 'This is a short description 2.',
      longDescription: 'This is a long description 2.',
      isClosedToMedia: false,
      isClosedToPublic: false,
      isFree: false,
      categories: ['animals', 'public-safety'],
      url: {'description': 'URL for event 2', 'url': 'http://www.google.com'},
      address: null,
      isDepartmentOnly: true
    }


  });

  it('should create an instance', () => {
    expect(new MdcEvent(
        1,
        '123',
        'title',
        new Date(),
        new Date(),
        false,
        null,
        false,
        ['animals', 'public-safety'],
        ['Public'],
        'This is a short description.',
        'This is a long description.',
        'contactName',
        '305-555-5555',
        'contact@email.com',
        'ADAName',
        '305-555-1234',
        false,
        false,false,0,
        '',
        {'description': 'URL for event', 'url': 'http://www.google.com'},
        null,
        'CalProof1', false))
      .toBeTruthy();
  });

  it('when creating a mdcEvent from contructor if no short description passed we should get an empty description in the event', () => {
    let mdcEvent = new MdcEvent(
      1,
      '123',
      'title',
      new Date(), new Date(),
      false,
      null,
      false,
      ['animals', 'public-safety'],
      ['Public'],
      null,
      'This is a long description.',
      'contactName',
      '305-555-5555',
      'contact@email.com',
      'ADAName',
      '305-555-1234',
      false,
      false,false,0,
      '',
      {'description': 'URL for event', 'url': 'http://www.google.com'},
      null,
      'CalProof1',
      true
    );
    expect(mdcEvent).toBeTruthy();
    expect(mdcEvent.description).toBe('');
  });



  it('when creating a mdcEvent from contructor if a null id is passed in I expect it to be left as null in the event', () => {
    let mdcEvent = new MdcEvent(
      null,
      null,
      null,
      new Date(), new Date(),
      false,
      null,
      false,
      ['animals', 'public-safety'],
      ['Private'],
      null,
      'This is a long description.',
      'contactName',
      '305-555-5555',
      'contact@email.com',
      'ADAName',
      '305-555-1234',
       false,
      false,false,0,
      '',
      {'description': 'URL for event', 'url': 'http://www.google.com'},
      null,
      'CalProof1',
      false
    );
    expect(mdcEvent).toBeTruthy();
    expect(mdcEvent.id).toBeNull();
  });


  it('when validating json schema, the id is required, it has to be a number and it cant be null', () => {
    delete jsonEvent.id;
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.id = null;
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.id =  'should not be a string';
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.id =  1;
    expect(MdcEvent.validateJson(jsonEvent)).toBeTruthy();
  });

  it('when validating json schema, the title is required, it has to be a string and it cant be null', () => {
    delete jsonEvent.title;
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.title = null;
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.title =  1;
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.title =  'my event';
    expect(MdcEvent.validateJson(jsonEvent)).toBeTruthy();
  });

  it('when validating json schema, the type is required, it has to be a string and it cant be null', () => {
    delete jsonEvent.type;
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.type = null;
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.type =  1;
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.type =  'my event';
    expect(MdcEvent.validateJson(jsonEvent)).toBeTruthy();
  });

  it('when validating json schema, the startDate is required, it has to be a string formatted date (2017-07-21T15:00:00Z) and it cant be null', () => {
    delete jsonEvent.startDate;
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.startDate = null;
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.startDate =  "cant be any string";
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.startDate =  '2017-07-21T15:00:00Z';
    expect(MdcEvent.validateJson(jsonEvent)).toBeTruthy();
  });

  it('when validating json schema, the endDate is required, it has to be a string formatted date (2017-07-21T15:00:00Z) and it cant be null', () => {
    delete jsonEvent.endDate;
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.endDate = null;
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.endDate =  "cant be any string";
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.endDate =  '2017-07-21T15:00:00Z';
    expect(MdcEvent.validateJson(jsonEvent)).toBeTruthy();
  });

  it('when validating json schema, the contactName is required, it has to be a string and it cant be null', () => {
    delete jsonEvent.contactName;
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.contactName = null;
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.contactName =  1;
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.contactName =  'my contactName';
    expect(MdcEvent.validateJson(jsonEvent)).toBeTruthy();
  });

  it('when validating json schema, the contactPhone is required, it has to be a string and it cant be null', () => {
    delete jsonEvent.contactPhone;
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.contactPhone = null;
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.contactPhone =  1;
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.contactPhone =  'my contactPhone';
    expect(MdcEvent.validateJson(jsonEvent)).toBeTruthy();
  });

  it('when validating json schema, the contactEmail is required, it has to be a string and it cant be null', () => {
    delete jsonEvent.contactEmail;
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.contactEmail = null;
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.contactEmail =  "cant be any string";
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.contactEmail =  'contact@email.com';
    expect(MdcEvent.validateJson(jsonEvent)).toBeTruthy();
  });


  it('when validating json schema, the adaName is required, it has to be a string and it cant be null', () => {
    delete jsonEvent.adaName;
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.adaName = null;
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.adaName =  1;
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.adaName =  'my adaName';
    expect(MdcEvent.validateJson(jsonEvent)).toBeTruthy();
  });

  it('when validating json schema, the adaPhone is required, it has to be a string and it cant be null', () => {
    delete jsonEvent.adaPhone;
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.adaPhone = null;
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.adaPhone =  1;
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.adaPhone =  'my adaPhone';
    expect(MdcEvent.validateJson(jsonEvent)).toBeTruthy();
  });

  it('when validating json schema, the adaEmail is required, it has to be a string and it cant be null', () => {
    delete jsonEvent.adaEmail;
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.adaEmail = null;
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.adaEmail =  "cant be any string";
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.adaEmail =  'ada@email.com';
    expect(MdcEvent.validateJson(jsonEvent)).toBeTruthy();
  });

  it('when creating a mdcEvent from json that matches the required schema, the event is created', () => {
    expect(MdcEvent.fromJSON(jsonEvent)).toBeTruthy();
  });

  it('when creating a mdcEvent from json, if json is null, throw Error', () => {
    expect( function(){ MdcEvent.fromJSON(null); } ).toThrow(new Error("error: invalid json to build event"));
  });

  it('when creating a mdcEvent from json, if json is undefined throw Error', () => {
    expect( function(){ MdcEvent.fromJSON(undefined); } ).toThrow(new Error("error: invalid json to build event"));
  });


  it('when creating a mdcEvent from json, if id is not there or is null or not a number, throw Error', () => {
    delete jsonEvent.id;
    expect( function(){ MdcEvent.fromJSON(jsonEvent); } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.id = null;
    expect( function(){ MdcEvent.fromJSON(jsonEvent); } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.id =  'should not be a string';
    expect( function(){ MdcEvent.fromJSON(jsonEvent); } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.id =  1;
    expect(MdcEvent.fromJSON(jsonEvent)).toBeTruthy();
  });

  it('when creating a mdcEvent from json, if title is not there or is null, or not a string, throw Error', () => {
    delete jsonEvent.title;
    expect( function(){ MdcEvent.fromJSON(jsonEvent); } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.title = null;
    expect( function(){ MdcEvent.fromJSON(jsonEvent); } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.title =  1;
    expect( function(){ MdcEvent.fromJSON(jsonEvent); } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.title =  "my title";
    expect(MdcEvent.fromJSON(jsonEvent)).toBeTruthy();
  });

  it('when creating a mdcEvent from json, if type is not there or is null, or not a string, throw Error', () => {
    delete jsonEvent.type;
    expect( function(){ MdcEvent.fromJSON(jsonEvent); } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.type = null;
    expect( function(){ MdcEvent.fromJSON(jsonEvent); } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.type =  1;
    expect( function(){ MdcEvent.fromJSON(jsonEvent); } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.type =  "public";
    expect(MdcEvent.fromJSON(jsonEvent)).toBeTruthy();
  });

  it('when creating a mdcEvent from json, if startDate is not there or is null, or not a string formatted date (2017-07-21T15:00:00Z), throw Error', () => {
    delete jsonEvent.startDate;
    expect( function(){ MdcEvent.fromJSON(jsonEvent); } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.startDate = null;
    expect( function(){ MdcEvent.fromJSON(jsonEvent); } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.startDate =  1;
    expect( function(){ MdcEvent.fromJSON(jsonEvent); } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.startDate =  "2017-07-21T15:00:00Z";
    expect(MdcEvent.fromJSON(jsonEvent)).toBeTruthy();
  });

  it('when creating a mdcEvent from json, if endDate is not there or is null, or not a string formatted date (2017-07-21T15:00:00Z), throw Error', () => {
    delete jsonEvent.endDate;
    expect( function(){ MdcEvent.fromJSON(jsonEvent); } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.endDate = null;
    expect( function(){ MdcEvent.fromJSON(jsonEvent); } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.endDate =  1;
    expect( function(){ MdcEvent.fromJSON(jsonEvent); } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.endDate =  "2017-07-21T15:00:00Z";
    expect(MdcEvent.fromJSON(jsonEvent)).toBeTruthy();
  });

  it('when creating a mdcEvent from json, if contactName is not there or is null, or not a string, throw Error', () => {
    delete jsonEvent.contactName;
    expect( function(){ MdcEvent.fromJSON(jsonEvent); } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.contactName = null;
    expect( function(){ MdcEvent.fromJSON(jsonEvent); } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.contactName =  1;
    expect( function(){ MdcEvent.fromJSON(jsonEvent); } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.contactName =  "my contactName";
    expect(MdcEvent.fromJSON(jsonEvent)).toBeTruthy();
  });

  it('when creating a mdcEvent from json, if contactPhone is not there or is null, or not a string, throw Error', () => {
    delete jsonEvent.contactPhone;
    expect( function(){ MdcEvent.fromJSON(jsonEvent); } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.contactPhone = null;
    expect( function(){ MdcEvent.fromJSON(jsonEvent); } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.contactPhone =  1;
    expect( function(){ MdcEvent.fromJSON(jsonEvent); } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.contactPhone =  "3055554444";
    expect(MdcEvent.fromJSON(jsonEvent)).toBeTruthy();
  });

  it('when creating a mdcEvent from json, if contactEmail is not there or is null, or not a string formatted email, throw Error', () => {
    delete jsonEvent.contactEmail;
    expect( function(){ MdcEvent.fromJSON(jsonEvent); } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.contactEmail = null;
    expect( function(){ MdcEvent.fromJSON(jsonEvent); } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.contactEmail =  "not an email";
    expect( function(){ MdcEvent.fromJSON(jsonEvent); } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.contactEmail =  "contact@email.com";
    expect(MdcEvent.fromJSON(jsonEvent)).toBeTruthy();
  });


  it('when creating a mdcEvent from json, if adaName is not there or is null, or not a string, throw Error', () => {
    delete jsonEvent.adaName;
    expect( function(){ MdcEvent.fromJSON(jsonEvent); } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.adaName = null;
    expect( function(){ MdcEvent.fromJSON(jsonEvent); } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.adaName =  1;
    expect( function(){ MdcEvent.fromJSON(jsonEvent); } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.adaName =  "my adaName";
    expect(MdcEvent.fromJSON(jsonEvent)).toBeTruthy();
  });

  it('when creating a mdcEvent from json, if adaPhone is not there or is null, or not a string, throw Error', () => {
    delete jsonEvent.adaPhone;
    expect( function(){ MdcEvent.fromJSON(jsonEvent); } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.adaPhone = null;
    expect( function(){ MdcEvent.fromJSON(jsonEvent); } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.adaPhone =  1;
    expect( function(){ MdcEvent.fromJSON(jsonEvent); } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.adaPhone =  "3055554444";
    expect(MdcEvent.fromJSON(jsonEvent)).toBeTruthy();
  });

  it('when creating a mdcEvent from json, if adaEmail is not there or is null, or not a string formatted email, throw Error', () => {
    delete jsonEvent.adaEmail;
    expect( function(){ MdcEvent.fromJSON(jsonEvent); } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.adaEmail = null;
    expect( function(){ MdcEvent.fromJSON(jsonEvent); } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.adaEmail =  "not an email";
    expect( function(){ MdcEvent.fromJSON(jsonEvent); } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.adaEmail =  "ada@email.com";
    expect(MdcEvent.fromJSON(jsonEvent)).toBeTruthy();
  });

  it('when creating a mdcEvent from json, pass also the calendarId which should populate the calendarId property', () => {
    let event: MdcEvent = MdcEvent.fromJSON(jsonEvent,'myCalendar');
    expect(event.calendarId).toEqual('myCalendar')
  });


  it('when creating a mdcEvent from json, if recurrence is not an array of strings, or null, or empty array, throw Error', () => {
    jsonEvent.recurrence = null;
    expect(MdcEvent.fromJSON(jsonEvent).recurrence).toEqual([]);
    jsonEvent.recurrence =  [1];
    expect( function(){ MdcEvent.fromJSON(jsonEvent).recurrence; } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.recurrence =  [];
    expect(MdcEvent.fromJSON(jsonEvent).recurrence).toEqual([]);
    jsonEvent.recurrence =  ['bad request'];
    expect(MdcEvent.fromJSON(jsonEvent).recurrence).toEqual([]);
    jsonEvent.recurrence =  ['2017-07-20T15:00:00Z'];
    expect(MdcEvent.fromJSON(jsonEvent).recurrence.length).toBe(1);
  });

  it('when creating a mdcEvent from json, if address is not an object or null, throw Error', () => {
    jsonEvent.address = null;
    expect(MdcEvent.fromJSON(jsonEvent)).toBeTruthy();
    jsonEvent.address =  1;
    expect( function(){ MdcEvent.fromJSON(jsonEvent); } ).toThrow(new Error("error: invalid json to build event"));
    jsonEvent.address =  {location: 'myLocation'};
    expect(MdcEvent.fromJSON(jsonEvent)).toBeTruthy();
    expect(MdcEvent.fromJSON(jsonEvent).address.location).toBe('myLocation');

  });


  it('when creating an Array of MdcEvents from a json array, that matches the required schema, the Array of MdcEvents is created', () => {
    expect(MdcEvent.fromJSONArray([jsonEvent]).length).toBe(1);
    expect((MdcEvent.fromJSONArray([jsonEvent]))[0] instanceof MdcEvent).toBe(true);
  });


  it('when creating an Array of MdcEvents from a [], an empty array is created. ', () => {
    expect(MdcEvent.fromJSONArray([])).toEqual([]);
  });

  it('when creating an Array of MdcEvents from a null, an empty array is created. ', () => {
    expect(MdcEvent.fromJSONArray(null)).toEqual([]);
  });

  it('when creating an Array of MdcEvents from a json array, bad elements will not be added to the array', () => {
    delete jsonEvent.id;
    expect(MdcEvent.fromJSONArray([jsonEvent, jsonEvent2]).length).toBe(1);
  });

  it('only lists events that have isDepartmentOnly set to false', () => {
    let events: MdcEvent[] = MdcEvent.fromJSONArray([jsonEvent, jsonEvent2]);
    events = events.filter(event => event.isDepartmentOnly === false);
    expect(events).toContain(jasmine.objectContaining({isDepartmentOnly: false}));
    expect(events.length).toBe(1);
  });



  it('when creating an Array of MdcEvents from a json array containing one recurring event, independent recurring events will be created for each recurring date', () => {
    expect(MdcEvent.fromJSONArray(TestEvents.testJsonRecurringEvents).length).toBe(3);
  });


  it('when creating an Array of MdcEvents from a json array containing both recurring events and none recurring events, ' +
    'independent recurring events will be created for each recurring date as well as the non recurring one', () => {
    expect(MdcEvent.fromJSONArray(TestEvents.testJsonRecurringAndNonEvents).length).toBe(4);
  });

  it('when creating an Array of MdcEvents from a json array containing one recurring event and passing the calendarId, each one should have the calendarId setup', () => {
    let events = MdcEvent.fromJSONArray(TestEvents.testJsonRecurringEvents, 'myCalendar');
    expect(events.length).toBe(3);
    expect(events[0].calendarId).toBe('myCalendar');
    expect(events[1].calendarId).toBe('myCalendar');
    expect(events[2].calendarId).toBe('myCalendar');
  });


  it('when creating a recurrence array from array of valid date strings, it is converted to array of dates', () => {

    const dates = MdcEvent.fromJSONDates(['2017-07-20T15:00:00Z','2014-05-20T15:00:00Z']);
    expect(dates.length).toBe(2);
    expect(dates[0] instanceof Date).toBe(true);
    expect(dates[1] instanceof Date).toBe(true);
    expect(dates[0].getFullYear()).toBe(2017);
    expect(dates[1].getFullYear()).toBe(2014);

  });

  it('when creating an Array of dates from a [], an empty array is created. ', () => {
    expect(MdcEvent.fromJSONDates([])).toEqual([]);
  });

  it('when creating an Array of dates from a null, an empty array is created. ', () => {
    expect(MdcEvent.fromJSONDates(null)).toEqual([]);
  });

  it('when creating an Array of dates from a json array, bad elements will not be added to the array', () => {

    const dates = MdcEvent.fromJSONDates(['bad date', '2014-05-20T15:00:00Z', 'worst date']);
    expect(dates.length).toBe(1);
    expect(dates[0] instanceof Date).toBe(true);
    expect(dates[0].getFullYear()).toBe(2014);

  });


  it('when trying to create recrring events from an event whose flag isRecurringEvent is false, return empty array ', () => {
    expect(MdcEvent.fromJSONRecurrence(TestEvents.testJsonNonRecurring)).toEqual([]);

  });


  it('A recurring event should build as many events as dates in the recurrence', () => {
    let events = MdcEvent.fromJSONRecurrence(TestEvents.testJsonRecurring);
    expect(events.length).toBe(TestEvents.testJsonRecurring.recurrence.length);
  });


  it('A recurring event should have the start time same as the parent ', () => {
    let events = MdcEvent.fromJSONRecurrence(TestEvents.testJsonRecurring);
    expect(events[0].startDate.getUTCHours()).toBe(14);
    expect(events[0].startDate.getUTCMinutes()).toBe(48);
    expect(events[0].startDate.getUTCSeconds()).toBe(12);
    expect(events[0].startDate.getUTCMilliseconds()).toBe(0);
  });


  it('A recurring event should have the end time same as the parent ', () => {
    let events = MdcEvent.fromJSONRecurrence(TestEvents.testJsonRecurring);
    expect(events[0].endDate.getUTCHours()).toBe(16);
    expect(events[0].endDate.getUTCMinutes()).toBe(50);
    expect(events[0].endDate.getUTCSeconds()).toBe(17);
    expect(events[0].endDate.getUTCMilliseconds()).toBe(0);
  });


  it('A recurring event should setup the calendadId in all events created do to the recurrence', () => {
    let events = MdcEvent.fromJSONRecurrence(TestEvents.testJsonRecurring, 'myCalendar');
    expect(events.length).toBe(TestEvents.testJsonRecurring.recurrence.length);
    events.forEach(event => {
      expect(event.calendarId).toEqual('myCalendar');
    });
  });


});
