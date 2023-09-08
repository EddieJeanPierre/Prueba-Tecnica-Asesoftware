export interface ToastNotificationState {
    title?: string;
    message: string;
    status?: string;
    icon?: string;
};

export const initialToastNotificationState: ToastNotificationState = null;