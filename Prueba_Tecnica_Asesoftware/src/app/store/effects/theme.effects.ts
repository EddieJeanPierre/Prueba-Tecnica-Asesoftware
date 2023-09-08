import { Injectable } from '@angular/core';
import { ofType, Actions, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of, delay } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { ThemeConstants } from '../constants/theme.constants';
import { CreateToastNotification } from '../actions/toast-notification.actions';
import { AppState } from '../state/app.state';
import { ToggleThemeRequest, ThemeActions } from '../actions/theme.actions';
import { ThemeService } from '@core/services/theme/theme.service';
import { ToastNotificationState } from '../state/toast-notification.state';

@Injectable()
export class ThemeEffects {

    private timeOut = 80;

    toggleThemeRequest = createEffect(() => this.actions.pipe(
        ofType<ToggleThemeRequest>(ThemeConstants.TOGGLE_THEME_REQUEST),
        map(() => this.themeService.toggleTheme()),
        switchMap((type: boolean) => {
            const toastNotificationState: ToastNotificationState = {
                message: type ? "Activado" : "Desactivado",
                title: "Tema Oscuro",
                icon: ThemeConstants.TOGGLE_THEME_ICON
            };
            setTimeout(() => {
                this.store.dispatch(new CreateToastNotification(toastNotificationState));
            }, this.timeOut);
            return of(new ThemeActions.toggleThemeSuccess(type)).pipe(delay(this.timeOut));
        }),
    ));

    constructor(
        private actions: Actions,
        private store: Store<AppState>,
        private themeService: ThemeService,
    ) { }

}