/* tslint:disable:no-unused-variable */



import {MdcEvent} from "./mdc-event";






describe('MdcEvent', () => {

  let jsonEvent;

  beforeEach(function () {
    jsonEvent = {
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

      //odataId: '123',
      //geolocation: 'my geolocation',
      // hasAttachments: false,
    }

  });

  it('should create an instance', () => {
    expect(new MdcEvent(1, '123', 'eventName', new Date(), new Date(),'geolocation',false,false,false,['animals', 'public-safety'],'eventType','This is a short description.','This is a long description.','contactName','305-555-5555','contact@email.com','ADAName','305-555-1234','ADA@email.com',false,false,true, {'description': 'URL for event', 'url': 'http://www.google.com'}))
      .toBeTruthy();
  });

  it('when creating a mdcEvent from contructor if no short description passed we should get an empty description in the event', () => {
    let mdcEvent = new MdcEvent(1, '123', 'eventName', new Date(), new Date(),'geolocation',false,false,false,['animals', 'public-safety'],'eventType', '','This is a long description.','contactName','305-555-5555','contact@email.com','ADAName','305-555-1234','ADA@email.com',false,false,true, {'description': 'URL for event', 'url': 'http://www.google.com'});
    expect(mdcEvent).toBeTruthy();
    expect(mdcEvent.shortDescription).toBe('');
  });


  it('when creating a mdcEvent from contructor if null short description is passed we should get an empty short description in the event', () => {
    let mdcEvent = new MdcEvent(1, '123', 'eventName', new Date(), new Date(), 'geolocation',false,false,false,['animals', 'public-safety'],'eventType', null,'This is a long description.','contactName','305-555-5555','contact@email.com','ADAName','305-555-1234','ADA@email.com',false,false,true, {});
    expect(mdcEvent).toBeTruthy();
    expect(mdcEvent.shortDescription).toBe('');
  });


  it('when creating a mdcEvent from contructor if a null id is passed in I expect it to be left as null in the event', () => {
    let mdcEvent = new MdcEvent(null, null, null, new Date(), new Date(),'geolocation',false,false,false,['animals', 'public-safety'],'eventType', 'This is a short description.','This is a long description.','contactName','305-555-5555','contact@email.com','ADAName','305-555-1234','ADA@email.com',false,false,true, {'description': 'URL for event', 'url': 'http://www.google.com'});
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

  it('when validating json schema, the eventName is required, it has to be a string and it cant be null', () => {
    delete jsonEvent.eventName;
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.eventName = null;
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.eventName =  1;
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.eventName =  'my event';
    expect(MdcEvent.validateJson(jsonEvent)).toBeTruthy();
  });

  it('when validating json schema, the eventType is required, it has to be a string and it cant be null', () => {
    delete jsonEvent.eventType;
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.eventType = null;
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.eventType =  1;
    expect(MdcEvent.validateJson(jsonEvent)).toBeFalsy();
    jsonEvent.eventType =  'my event';
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
    //expect(MdcEvent.fromJSON(jsonEvent)).toBeTruthy();
  });

  it('when creating a mdcEvent from json, if json is null, throw Error', () => {
    expect( function(){ MdcEvent.fromJSON(null); } ).toThrow(new Error("error: invalid json to build event"));
  });


  it('when creating a mdcEvent from json, if json is undefined throw Error', () => {
    expect( function(){ MdcEvent.fromJSON(undefined); } ).toThrow(new Error("error: invalid json to build event"));
  });

});
