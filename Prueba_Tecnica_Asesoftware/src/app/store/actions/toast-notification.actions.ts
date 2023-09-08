import { Action } from '@ngrx/store';
import { ToastNotificationConstants } from '../constants/toast-notification.constants';
import { ToastNotificationState } from '../state/toast-notification.state';

export class CreateToastNotification implements Action {
    public readonly type = ToastNotificationConstants.TOAST_NOTIFICATION;
    constructor(public payload: ToastNotificationState) { }
}

export class ToastNotificationShowed implements Action {
    public readonly type = ToastNotificationConstants.TOAST_NOTIFICATION_CLEAR;
}

export class ToastNotificationClear implements Action {
    public readonly type = ToastNotificationConstants.TOAST_NOTIFICATION_CLEAR;
}

export type ToastNotificationActionsType =
    CreateToastNotification |
    ToastNotificationShowed |
    ToastNotificationClear;

export const ToastNotificationActions = {
    createToastNotification: CreateToastNotification,
    toastNotificationShowed: ToastNotificationShowed,
    toastNotificationClear: ToastNotificationClear
}