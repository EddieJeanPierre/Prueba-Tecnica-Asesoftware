import { ToastNotificationActions } from 'src/app/store/actions/toast-notification.actions';
import { Injectable } from '@angular/core';
import { ofType, Actions, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { CreateToastNotification } from '../actions/toast-notification.actions';
import { AppState } from '../state/app.state';
import { ToastNotificationConstants } from '../constants/toast-notification.constants';
import { ToastNotificationService } from '@core/services/toast-notification/toast-notification.service';

@Injectable()
export class ToastNotificationEffects {

    toastNotificationRequest = createEffect(() => this.actions.pipe(
        ofType<CreateToastNotification>(ToastNotificationConstants.TOAST_NOTIFICATION),
        map(action => action.payload),
        map((toastNotificationConfig) => {
            this.toastNotificationService.showToastNotification(toastNotificationConfig);
        }),
        switchMap(() => {
            return of(new ToastNotificationActions.toastNotificationShowed());
        })
    ));

    constructor(
        private actions: Actions,
        private store: Store<AppState>,
        private toastNotificationService: ToastNotificationService,
    ) { }

}