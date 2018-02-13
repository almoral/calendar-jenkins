import { Component, OnInit } from '@angular/core';
import {AbstractLoader} from 'ng-http-loader/components/abstract.loader.component';
import {PendingInterceptorService} from 'ng-http-loader/services/pending-interceptor.service';
import {DataStoreService} from '../shared/services/data-store.service';


@Component({
  selector: 'mdc-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent extends AbstractLoader {

  constructor(private interceptorService: PendingInterceptorService,
              private dataStoreService: DataStoreService) {
    super();
  }

  // ngOnInit() {
  //   this.interceptorService.pendingRequestsStatus.subscribe(status => {
  //     this.dataStoreService.setIsLoaded(status);
  //     console.log('load status: ', status);
  //   });
  // }

}
