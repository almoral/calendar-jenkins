/* tslint:disable:no-unused-variable */

import {MDCEvent} from "../shared/models/MDCEvent";

describe('MDCEvent', () => {
  it('should create an instance', () => {
    expect(new MDCEvent(1, 123, 'eventName','eventDate','endDate','startTime','endTime','geolocation',false,false,false,['animals', 'public-safety'],'eventType','This is a short description.','This is a long description.','contactName','305-555-5555','contact@email.com','ADAName','305-555-1234','ADA@email.com',false,false,true, {'description': 'URL for event', 'url': 'http://www.google.com'}))
      .toBeTruthy();
  });

  it('when no short description passed we should get an empty description', () => {
    let mdcEvent = new MDCEvent(1, 123, 'eventName','eventDate','endDate','startTime','endTime','geolocation',false,false,false,['animals', 'public-safety'],'eventType',,'This is a long description.','contactName','305-555-5555','contact@email.com','ADAName','305-555-1234','ADA@email.com',false,false,true, {'description': 'URL for event', 'url': 'http://www.google.com'});
    expect(mdcEvent).toBeTruthy();
    expect(mdcEvent.shortDescription).toBe('');
  });


  it('when null short description is passed we should get an empty short description', () => {
    let mdcEvent = new MDCEvent(1, 123, 'eventName','eventDate','endDate','startTime','endTime','geolocation',false,false,false,['animals', 'public-safety'],'eventType', null,'This is a long description.','contactName','305-555-5555','contact@email.com','ADAName','305-555-1234','ADA@email.com',false,false,true, {'description': 'URL for event', 'url': 'http://www.google.com'});
    expect(mdcEvent).toBeTruthy();
    expect(mdcEvent.description).toBe('');
  });


  it('when null id or mdcEventCode or label is passed it should be populated with empty', () => {
    let mdcEvent = new MDCEvent(null, null, null, null);
    expect(mdcEvent).toBeTruthy();
    expect(JSON.stringify(mdcEvent)).toEqual(JSON.stringify({
      description: '',
      id: null,
      mdcEventCode: '',
      label: ''
    }));
  });


  it('when creating a mdcEvent from json, if json is null, return a null', () => {
    expect(mdcEvent.fromJSON(null)).toBeNull();
  });


  it('when creating a mdcEvent from json, if json is undefined return a null', () => {
    expect(mdcEvent.fromJSON(undefined)).toBeNull();
  });


  it('when creating a mdcEvent from json, if id is null, empty, or not in the json return a null', () => {
    let json1 = {id: null, mdcEventCode: 'ES', label: 'spanish'};
    expect(mdcEvent.fromJSON(json1)).toBeNull();

    let json2 = {id: null, mdcEventCode: 'ES', label: 'spanish'};
    expect(mdcEvent.fromJSON(json2)).toBeNull();

    let json3 = {mdcEventCode: 'ES', label: 'spanish'};
    expect(mdcEvent.fromJSON(json3)).toBeNull();

  });


  it('when creating a mdcEvent from json, if mdcEventCode is null, empty, or not in the json return a null', () => {
    let json1 = {id: 1, mdcEventCode: '', label: 'spanish'};
    expect(mdcEvent.fromJSON(json1)).toBeNull();

    let json2 = {id: 1, mdcEventCode: null, label: 'spanish'};
    expect(mdcEvent.fromJSON(json2)).toBeNull();

    let json3 = {id: 1, label: 'spanish'};
    expect(mdcEvent.fromJSON(json3)).toBeNull();

  });


  it('when creating a mdcEvent from json, if label is null, empty, or not in the json return a null', () => {
    let json1 = {id: 1, mdcEventCode: 'ES', label: ''};
    expect(mdcEvent.fromJSON(json1)).toBeNull();

    let json2 = {id: 1, mdcEventCode: 'ES', label: null};
    expect(mdcEvent.fromJSON(json2)).toBeNull();

    let json3 = {id: 1, mdcEventCode: 'ES'};
    expect(mdcEvent.fromJSON(json3)).toBeNull();

  });

});
