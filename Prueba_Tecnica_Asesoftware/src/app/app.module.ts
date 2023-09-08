import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ThemeEffects } from './store/effects/theme.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './store/reducers/app.reducer';
import { metaReducers } from './store/reducers/meta.reducer';
import { environment } from '@environment/environment';
import { NbDatepickerModule, NbTimepickerModule, NbToastrModule } from '@nebular/theme';
import { ToastNotificationEffects } from './store/effects/toast-notification.effects';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ScheduleEffects } from './store/effects/schedule.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    CoreModule,
    SharedModule,
    StoreModule.forRoot(appReducer, { metaReducers }),
    EffectsModule.forRoot([
      ThemeEffects,
      ToastNotificationEffects,
      ScheduleEffects
    ]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !environment.production,
    }),
    NbToastrModule.forRoot(),
    HttpClientModule,
    NbDatepickerModule.forRoot(),
    NbTimepickerModule.forRoot()
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
