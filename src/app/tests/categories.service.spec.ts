import { TestBed, inject, async, getTestBed } from '@angular/core/testing';
import {BaseRequestOptions, Http, ResponseOptions, Response, ResponseType} from "@angular/http";
import {MockBackend, MockConnection} from "@angular/http/testing";
import { CategoriesService } from '../shared/services/categories.service';
import { ConfigurationService} from '../shared/services/configuration.service';

describe('CategoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CategoriesService,
        ConfigurationService
      ]
    });
  });

  // it('should be created', inject([CategoriesService], (service: CategoriesService) => {
  //   expect(service).toBeTruthy();
  // }));
});
