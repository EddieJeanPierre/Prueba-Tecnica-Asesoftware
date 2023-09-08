import { Component, Input, OnInit } from '@angular/core';
import { EventService } from '@core/services/event/event.service';
import { NbSidebarService } from '@nebular/theme';
import { Store, select } from '@ngrx/store';
import { EventInterface, EventTypesEnum } from '@shared/interfaces/event.interfaces';
import { ToastNotificationClear } from 'src/app/store/actions/toast-notification.actions';
import { ThemeActions } from 'src/app/store/actions/theme.actions';
import { toastNotificationState } from 'src/app/store/selectors/toast-notification.selectors';
import { setThemeActive, themeLoading } from 'src/app/store/selectors/theme.selectors';
import { ToastNotificationState } from 'src/app/store/state/toast-notification.state';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // Input Data
  @Input() compactMenu: boolean = false;
  // Theme active
  darkThemeActive: boolean;
  loadingTheme: boolean;

  constructor(
    private sideBarService: NbSidebarService,
    private store: Store<AppState>
  ) {
    this.loadingTheme = true;
    this.darkThemeActive = false;
    this.subscribeStoreEvents();
  }

  ngOnInit(): void {
    this.store.dispatch(new ToastNotificationClear());
  }

  /**
   * Gets the state of theme
   */
  subscribeStoreEvents(): void {
    this.store
      .pipe(select(themeLoading))
      .subscribe(payload => this.loadingTheme = payload ? payload : false);
  }

  /**
   * 
   */
  toggleSideBar() {
    this.sideBarService.toggle(this.compactMenu);
  }

  /**
   * Emits the change theme event
   */
  toggleThme(): void {
    this.store.dispatch(new ThemeActions.toggleThemeRequest());
  }

  /**
   * 
   * @param event Event service event emitted
   * 
   * Process the event from the event service
   */
  processEvent(event: EventInterface): void {
    if (event.type === EventTypesEnum.DARK_THEME_ACTIVE) {
      this.darkThemeActive = event.payload;
    }
  }
}
