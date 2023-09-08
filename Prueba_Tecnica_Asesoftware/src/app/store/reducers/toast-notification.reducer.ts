import { ToastNotificationActionsType } from '../actions/toast-notification.actions';
import { ToastNotificationState, initialToastNotificationState } from '../state/toast-notification.state';
import { ToastNotificationConstants } from '../constants/toast-notification.constants';

export function toastNotificationReducer(
  state = initialToastNotificationState,
  action: ToastNotificationActionsType
): ToastNotificationState {
  switch (action.type) {
    case ToastNotificationConstants.TOAST_NOTIFICATION:
      return action.payload;
    case ToastNotificationConstants.TOAST_NOTIFICATION_CLEAR:
      return initialToastNotificationState;
    default:
      return state;
  }
}
