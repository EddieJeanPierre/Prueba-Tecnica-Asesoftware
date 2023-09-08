import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { AppState } from '../state/app.state';
import { toastNotificationReducer } from './toast-notification.reducer';
import { themeReducer } from './theme.reducer';
import { scheduleReducer } from './schedule.reducer';

export const appReducer: ActionReducerMap<AppState, any> = {
    router: routerReducer,
    toastNotification: toastNotificationReducer,
    theme: themeReducer,
    schedule: scheduleReducer
}