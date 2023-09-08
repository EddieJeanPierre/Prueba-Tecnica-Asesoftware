import { Injectable } from '@angular/core';
import { MenuItem } from '@shared/interfaces/menu.interfaces';
import { mockMenuItemNoSession, mockMenuItemSession } from '@shared/mock-responses/mock-menu.responses';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockMenuService {

  private menuItem: MenuItem[] = [];

  constructor() {
    if (localStorage.getItem('login') != 'true') {
      this.menuItem = mockMenuItemNoSession;
    } else {
      this.menuItem = mockMenuItemSession;
    }
  }

  getMenu(): Observable<MenuItem[]> {
    return of(this.menuItem).pipe(delay(1500));
  }

}
