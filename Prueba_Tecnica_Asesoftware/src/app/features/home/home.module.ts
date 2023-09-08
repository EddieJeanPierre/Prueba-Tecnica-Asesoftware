import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NbButtonModule, NbCardModule, NbIconModule } from '@nebular/theme';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule
  ],
})
export class HomeModule { }
