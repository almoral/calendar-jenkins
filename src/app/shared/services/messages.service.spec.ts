import {TestBed, inject, getTestBed, async, fakeAsync} from '@angular/core/testing';

import { MessagesService } from './messages.service';


describe('MessagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessagesService]
    });
  });

  it('should be created', inject([MessagesService], (service: MessagesService) => {
    expect(service).toBeTruthy();
  }));

  it('when errors are submitted, the subscribed observers are notified of an array of error messages', () => {

    let service: MessagesService = getTestBed().get(MessagesService);
    service.error('this is first error', 'this is second error ');

    let errors$ = service.errors$;

    errors$.subscribe((messages) => {
        expect(messages.length).toBe(2);
        expect(messages[0]).toBe('this is first error');
        }, (error) => fail()
    );

  });

  it('when no errors are submitted, the subscribed observers are notified of an empty array', () => {

    let service: MessagesService = getTestBed().get(MessagesService);
    service.error();

    let errors$ = service.errors$;

    errors$.subscribe((messages) => {
        expect(messages).toEqual([]);
      }, (error) => fail()
    );

  });


});
