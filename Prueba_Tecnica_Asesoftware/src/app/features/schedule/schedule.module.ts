import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleListComponent } from './components/schedule-list/schedule-list.component';
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbFormFieldModule, NbInputModule, NbSelectModule, NbSpinnerModule, NbTimepickerModule, NbTreeGridModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScheduleFormComponent } from './components/schedule-form/schedule-form.component';
import { ScheduleComponent } from './components/schedule/schedule.component';


@NgModule({
  declarations: [
    ScheduleListComponent,
    ScheduleFormComponent,
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    NbCardModule,
    FormsModule,
    ReactiveFormsModule,
    NbSpinnerModule,
    NbInputModule,
    NbFormFieldModule,
    NbButtonModule,
    NbSelectModule,
    NbDatepickerModule,
    NbTimepickerModule,
    NbTreeGridModule
  ],
  providers: [
    DatePipe
  ]
})
export class ScheduleModule { }
