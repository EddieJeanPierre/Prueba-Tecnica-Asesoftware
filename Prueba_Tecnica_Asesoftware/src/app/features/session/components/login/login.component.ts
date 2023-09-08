import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { customReqMinMaxValidator, customReqMinValidator } from '@shared/directives/custom-validators-messages';
import { CustomControlConfig } from '@shared/interfaces/custom-validators.interfaces';
import { MockSessionService } from '@shared/mock-services/mock-session.service';
import { CreateToastNotification } from 'src/app/store/actions/toast-notification.actions';
import { ThemeConstants } from 'src/app/store/constants/theme.constants';
import { AppState } from 'src/app/store/state/app.state';
import { ToastNotificationState } from 'src/app/store/state/toast-notification.state';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loadingLoginForm: boolean;
  private userNameControlConfig: CustomControlConfig;
  private userPasswordControlConfig: CustomControlConfig;

  constructor(
    private fb: FormBuilder,
    private sessionService: MockSessionService,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.loadingLoginForm = false;
    this.userNameControlConfig = {
      fieldName: 'usuario',
      minLength: 5,
      maxLength: 10
    };
    this.userPasswordControlConfig = {
      fieldName: 'contraseña',
      minLength: 5
    };
    this.loginForm = this.fb.group({
      userName: ['', [customReqMinMaxValidator(this.userNameControlConfig)]],
      userPassword: ['', customReqMinValidator(this.userPasswordControlConfig)],
    });
  }

  ngOnInit() {
    this.verifySession();
  }

  verifySession(): void {
    if (localStorage.getItem('login') == 'true') {
      this.router.navigate(['/agendamiento']);
    }
  }

  get formStatus(): any {
    return this.formEdited()
      ? this.formHasError()
        ? 'danger'
        : 'success'
      : 'info';
  }

  getFormControl(formField: string): any {
    return {
      hasError: this.formControlHasError(formField),
      error: this.formControlError(formField),
      edited: this.formControlEdited(formField),
      status: this.formControlEdited(formField)
        ? this.formControlHasError(formField)
          ? 'danger'
          : 'success'
        : 'basic'
    };
  }

  private formEdited(): boolean {
    return this.loginForm.dirty || this.loginForm.touched;
  }

  private formHasError(): boolean {
    return this.loginForm.invalid;
  }

  private formControlEdited(formField: string): boolean {
    return this.loginForm.get(formField).dirty || this.loginForm.get(formField).touched;
  }

  private formControlHasError(formField: string): boolean {
    return this.loginForm.get(formField).hasError('customError');
  }

  private formControlError(formField: string): boolean {
    return this.loginForm.get(formField).getError('customMessage');
  }

  loginSubmit(): void {
    if (this.loginForm.valid) {
      this.loadingLoginForm = true;
      this.sessionService.validateUser(this.loginForm.value).subscribe({
        next: (res) => this.loginSuccess(res),
        error: (error) => this.loginError(error),
      });
    }
  }

  loginSuccess(res): void {
    if (res) {
      const toastNotificationState: ToastNotificationState = {
        message: "Se inicio sesión con éxito.",
        title: "Iniciar Sesión",
      };
      this.loginNotification(toastNotificationState);
      localStorage.setItem('login', 'true');
      this.verifySession();
    } else {
      const toastNotificationState: ToastNotificationState = {
        message: "No se inicio sesión.",
        title: "Iniciar Sesión",
        status: 'warning'
      };
      this.loginNotification(toastNotificationState);
    }
    this.loginSubscribeComplete();
  }

  loginError(error): void {
    const toastNotificationState: ToastNotificationState = {
      message: error.message,
      title: "Iniciar Sesión",
      status: 'danger'
    };
    this.loginNotification(toastNotificationState);
    this.loginSubscribeComplete();
  }

  loginSubscribeComplete(): void {
    this.loadingLoginForm = false;
  }

  loginNotification(toastNotificationState: ToastNotificationState): void {
    this.store.dispatch(new CreateToastNotification(toastNotificationState));
  }
}
