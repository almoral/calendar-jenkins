/* tslint:disable:no-unused-variable */



import {MdcEvent} from "./mdc-event";

describe('MdcEvent', () => {
  it('should create an instance', () => {
    expect(new MdcEvent(1, '123', 'eventName','eventDate','endDate','startTime','endTime','geolocation',false,false,false,'animals, public-safety','eventType','This is a short description.','This is a long description.','contactName','305-555-5555','contact@email.com','ADAName','305-555-1234','ADA@email.com',false,false,true, {'description': 'URL for event', 'url': 'http://www.google.com'}))
      .toBeTruthy();
  });

  it('when no short description passed we should get an empty description', () => {
    let mdcEvent = new MdcEvent(1, '123', 'eventName','eventDate','endDate','startTime','endTime','geolocation',false,false,false,'animals,public-safety','eventType', '','This is a long description.','contactName','305-555-5555','contact@email.com','ADAName','305-555-1234','ADA@email.com',false,false,true, {'description': 'URL for event', 'url': 'http://www.google.com'});
    expect(mdcEvent).toBeTruthy();
    expect(mdcEvent.shortDescription).toBe('');
  });


  it('when null short description is passed we should get an empty short description', () => {
    let mdcEvent = new MdcEvent(1, '123', 'eventName','eventDate','endDate','startTime','endTime','geolocation',false,false,false,'animals, public-safety','eventType', null,'This is a long description.','contactName','305-555-5555','contact@email.com','ADAName','305-555-1234','ADA@email.com',false,false,true, {});
    expect(mdcEvent).toBeTruthy();
    expect(mdcEvent.shortDescription).toBe('');
  });


  it('when null id or odataId or empty value for eventName is passed it should be populated with an empty value', () => {
    let mdcEvent = new MdcEvent(null, null, null,'eventDate','endDate','startTime','endTime','geolocation',false,false,false,'animals, public-safety','eventType', 'This is a short description.','This is a long description.','contactName','305-555-5555','contact@email.com','ADAName','305-555-1234','ADA@email.com',false,false,true, {'description': 'URL for event', 'url': 'http://www.google.com'});
    expect(mdcEvent).toBeTruthy();
    expect(JSON.stringify(mdcEvent)).toEqual(JSON.stringify({ id: null, odataId: '', eventName: '', eventDate: 'eventDate', endDate: 'endDate', startTime: 'startTime', endTime: 'endTime', geolocation: 'geolocation', isRecurringEvent: false, isAllDayEvent: false, hasAttachments: false, categories: 'animals, public-safety', eventType: 'eventType', shortDescription: 'This is a short description.', longDescription: 'This is a long description.', contactName: 'contactName', contactPhone: '305-555-5555', contactEmail: 'contact@email.com', ADAName: 'ADAName', ADAPhone: '305-555-1234', ADAEmail: 'ADA@email.com', isClosedToMedia: false, isClosedToPublic: false, isFree: true, eventUrl:{'description': 'URL for event', 'url': 'http://www.google.com'}}));
  });


  it('when creating a mdcEvent from json, if json is null, return a null', () => {
    expect(MdcEvent.fromJSON(null)).toBeNull();
  });


  it('when creating a mdcEvent from json, if json is undefined return a null', () => {
    expect(MdcEvent.fromJSON(undefined)).toBeNull();
  });

  it('when creating a mdcEvent from json, if id is null, empty, or not in the json return a null', () => {

    let json1 = {id: null, eventName: '', eventDate: 'eventDate', endDate: 'endDate', startTime: 'startTime', endTime: 'endTime', isRecurringEvent: false, isAllDayEvent: false, eventType: '', contactName: '', contactPhone: '', contactEmail: '', ADAName: '', ADAPhone: '', ADAEmail: ''};
    expect(MdcEvent.fromJSON(json1)).toBeNull();
  });

  it('when creating a mdcEvent from json, if a required field is null, empty, or not in the json return a null', () => {

    let json1 = {id: null, eventName: '', eventDate: null};
    expect(MdcEvent.fromJSON(json1)).toBeNull();
  });


});
