import { RouterReducerState } from "@ngrx/router-store";

import { ToastNotificationState, initialToastNotificationState } from './toast-notification.state';
import { ThemeState, initialThemeState } from './theme.state';
import { ScheduleState, initialScheduleState } from "./schedule.state";

export interface AppState {
    router?: RouterReducerState;
    toastNotification: ToastNotificationState;
    theme: ThemeState;
    schedule: ScheduleState;
};

export const initialAppState: AppState = {
    toastNotification: initialToastNotificationState,
    theme: initialThemeState,
    schedule: initialScheduleState
};

export function getInitialState(): AppState {
    return initialAppState;
}