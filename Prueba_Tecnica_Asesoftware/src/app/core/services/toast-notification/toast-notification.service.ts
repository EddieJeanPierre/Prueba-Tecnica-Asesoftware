
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { NbIconConfig, NbToastrService } from '@nebular/theme';
import { ToastNotificationState } from 'src/app/store/state/toast-notification.state';

@Injectable({
  providedIn: 'root'
})
export class ToastNotificationService {

  iconPack: string;

  constructor(private toastrService: NbToastrService) {
    this.iconPack = environment.iconPack;
  }

  showToastNotification(toastNotificationConfig: ToastNotificationState): void {
    const iconConfig: NbIconConfig = {
      icon: toastNotificationConfig.icon,
      pack: this.iconPack,
      status: toastNotificationConfig.status || 'success',
    };
    toastNotificationConfig.icon || delete iconConfig.icon;
    this.toastrService.show(
      toastNotificationConfig.message,
      toastNotificationConfig.title,
      iconConfig
    );
  }
}
