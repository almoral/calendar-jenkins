import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class MessagesService {


  private errorsSubject = new BehaviorSubject<string[]>([]);

  /**
   * errors$ is the observable to subscribe to in order to
   * be notified when the list of available errors change.
   * @type {"../../Observable".Observable<T>}
   */
  public errors$: Observable<string[]> = this.errorsSubject.asObservable();


  constructor() {
  }

  /**
   * error stores the errors and emits them to the subscribed observers.
   * @param errors - the array list of errors to be saved and emitted
   * to the observers looking for changes on the list of errors.
   */
  error(...errors:string[]) {
    this.errorsSubject.next(errors);
  }


}
