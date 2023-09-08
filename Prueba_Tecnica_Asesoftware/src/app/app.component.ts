import { Component, OnInit, HostListener } from '@angular/core';

import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { Store, select } from '@ngrx/store';
import { breakPointsMenuConstant } from '@shared/constants/app.constants';
import { BreakPointInterface } from '@shared/interfaces/app.interfaces';
import { EventInterface, EventTypesEnum } from '@shared/interfaces/event.interfaces';
import { Subscription } from 'rxjs';
import { AppState } from './store/state/app.state';
import { ToastNotificationClear } from './store/actions/toast-notification.actions';
import { setThemeActive } from './store/selectors/theme.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  // Dark theme flag
  breakPoints: BreakPointInterface[];
  compactMenu: boolean;

  constructor(
    private themeService: NbThemeService,
    private sideBarService: NbSidebarService,
    private menuService: NbMenuService,
    private mediaBreakpointsService: NbMediaBreakpointsService,
    private store: Store<AppState>
  ) {
    this.compactMenu = false;
    this.breakPoints = breakPointsMenuConstant;
    this.subscribeEvents();
    this.onResize();
  }

  ngOnInit(): void {
    this.store.dispatch(new ToastNotificationClear());
    this.onResize(window.innerWidth);
    this.sideBarService.collapse();
  }

  /**
   * 
   * Sets the active theme in the nebular theme service
   * 
   * @param themeActive The theme active
   */
  setThemeActive(themeActive): void {
    this.themeService.changeTheme(themeActive ? 'dark' : 'default');
  }

  /**
   * Subscribes the Events
   */
  subscribeEvents(): void {
    this.onMenuItemClick();
    this.toggleThemeEvent();
  }

  /**
   * Toggle theme dark and light
   */
  toggleThemeEvent(): void {
    this.store.pipe(select(setThemeActive))
      .subscribe(payload => {
        this.setThemeActive(payload);
      });
  }

  /**
   * Listener to menu item click
   */
  onMenuItemClick(): void {
    this.menuService.onItemClick().subscribe(() => {
      if (this.compactMenu) {
        this.sideBarService.compact();
      } else {
        this.sideBarService.collapse();
      }
    });
  }

  /**
   * 
   * @param event Event service event emitted
   * 
   * Process the event from the event service
   */
  processEvent(event: EventInterface): void {
    if (event.type === EventTypesEnum.TOGGLE_THEME) {
      // this.toggleTheme();
    } else if (event.type === EventTypesEnum.DESTROY_SUBSCRIPTIONS) {
      console.log("Destroy Subscriptions:", event.description);
      event.payload.forEach((subscription: Subscription) => {
        if (subscription) {
          subscription.unsubscribe();
        }
      })
    }
  }

  /**
   * Listener to the windows resize
   */
  @HostListener('window:resize', ['$event'])
  onResize(event?: any): void {
    const currentBreakPoint = this.mediaBreakpointsService.getByWidth(window.innerWidth);
    const breakPointSelected = this.breakPoints.find((breakPoint) => breakPoint.name == currentBreakPoint.name);
    this.compactMenu = breakPointSelected.compact;
    this.changeSideBarStatus();
  }

  /**
   * Changes if the side bar is compact
   */
  changeSideBarStatus(): void {
    if (this.compactMenu) {
      this.sideBarService.compact();
    } else {
      this.sideBarService.collapse();
    }
  }

}
