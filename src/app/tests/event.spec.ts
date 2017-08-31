/* tslint:disable:no-unused-variable */

import {MDCEvent} from "../shared/models/MDCEvent";

describe('MDCEvent', () => {
  it('should create an instance', () => {
    expect(MDCEvent('id', 123, 'eventName','eventDate','endDate','startTime','endTime','geolocation',false,false,false,['animals', 'public-safety'],'eventType','This is a short description.','This is a long description.','contactName','305-555-5555','contact@email.com','ADAName','305-555-1234','ADA@email.com',false,false,true, {'description': 'URL for event', 'url': 'http://www.google.com'})).toBeTruthy();
  });

  it('when no description passed we should get an empty description', () => {
    let language = new Language(123, 'ES', 'spanish');
    expect(language).toBeTruthy();
    expect(language.description).toBe('');
  });


  it('when null description is passed we should get an empty description', () => {
    let language = new Language(123, 'ES', 'spanish', null);
    expect(language).toBeTruthy();
    expect(language.description).toBe('');
  });


  it('when null id or languageCode or label is passed it should be populated with empty', () => {
    let language = new Language(null, null, null, null);
    expect(language).toBeTruthy();
    expect(JSON.stringify(language)).toEqual(JSON.stringify({
      description: '',
      id: null,
      languageCode: '',
      label: ''
    }));
  });


  it('when creating a language from json, if json is null, return a null', () => {
    expect(Language.fromJSON(null)).toBeNull();
  });


  it('when creating a language from json, if json is undefined return a null', () => {
    expect(Language.fromJSON(undefined)).toBeNull();
  });


  it('when creating a language from json, if id is null, empty, or not in the json return a null', () => {
    let json1 = {id: null, languageCode: 'ES', label: 'spanish'};
    expect(Language.fromJSON(json1)).toBeNull();

    let json2 = {id: null, languageCode: 'ES', label: 'spanish'};
    expect(Language.fromJSON(json2)).toBeNull();

    let json3 = {languageCode: 'ES', label: 'spanish'};
    expect(Language.fromJSON(json3)).toBeNull();

  });


  it('when creating a language from json, if languageCode is null, empty, or not in the json return a null', () => {
    let json1 = {id: 1, languageCode: '', label: 'spanish'};
    expect(Language.fromJSON(json1)).toBeNull();

    let json2 = {id: 1, languageCode: null, label: 'spanish'};
    expect(Language.fromJSON(json2)).toBeNull();

    let json3 = {id: 1, label: 'spanish'};
    expect(Language.fromJSON(json3)).toBeNull();

  });


  it('when creating a language from json, if label is null, empty, or not in the json return a null', () => {
    let json1 = {id: 1, languageCode: 'ES', label: ''};
    expect(Language.fromJSON(json1)).toBeNull();

    let json2 = {id: 1, languageCode: 'ES', label: null};
    expect(Language.fromJSON(json2)).toBeNull();

    let json3 = {id: 1, languageCode: 'ES'};
    expect(Language.fromJSON(json3)).toBeNull();

  });

});
