import { Injectable } from '@angular/core';
import { EventInterface, EventTypesEnum } from '@shared/interfaces/event.interfaces';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private event = new BehaviorSubject<EventInterface>({
    type: EventTypesEnum.INITIAL,
    payload: null,
  });

  event$ = this.event.asObservable();

  constructor() {
    // Empty
  }

  /**
   * 
   * @param event Event to dispatch
   */
  emitEvent(event: EventInterface): void {
    this.event.next(event);
  }

}
