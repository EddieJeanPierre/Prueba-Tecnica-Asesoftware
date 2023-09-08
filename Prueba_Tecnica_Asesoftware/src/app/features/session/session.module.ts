import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionRoutingModule } from './session-routing.module';
import { LoginComponent } from './components/login/login.component';
import { NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbSpinnerModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './components/logout/logout.component';


@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    SessionRoutingModule,
    NbCardModule,
    NbInputModule,
    FormsModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbIconModule,
    NbFormFieldModule,
    NbSpinnerModule
  ]
})
export class SessionModule { }
