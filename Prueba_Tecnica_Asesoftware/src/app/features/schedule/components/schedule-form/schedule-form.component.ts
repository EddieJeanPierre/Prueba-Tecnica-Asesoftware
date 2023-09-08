import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Commerce, Service, Turn } from '@features/schedule/interfaces/schedule.interfaces';
import { ScheduleService } from '@features/schedule/services/schedule.service';
import { NbDateService } from '@nebular/theme';
import { Store, select } from '@ngrx/store';
import { customRequiredValidator } from '@shared/directives/custom-validators-messages';
import { CustomControlConfig } from '@shared/interfaces/custom-validators.interfaces';
import { ScheduleActions } from 'src/app/store/actions/schedule.actions';
import { CreateToastNotification } from 'src/app/store/actions/toast-notification.actions';
import { getTurnCreated, loadingTurnCreate } from 'src/app/store/selectors/schedule.selectors';
import { AppState } from 'src/app/store/state/app.state';
import { ToastNotificationState } from 'src/app/store/state/toast-notification.state';

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.scss']
})

export class ScheduleFormComponent implements OnInit {

  @Input() loadingCommerceList: boolean = false;
  @Input() loadingServiceList: boolean = false;

  @Input() commerceList: Commerce[] = [];
  @Input() serviceList: Service[] = [];

  serviceListFinal: Service[] = [];

  turnList: {
    value: string,
    label: string
  }[] = [];

  serviceSelectedDuration: number;

  scheduleForm: FormGroup;
  loadingScheduleForm: boolean;
  private commerceControlConfig: CustomControlConfig;
  private serviceControlConfig: CustomControlConfig;
  private dateControlConfig: CustomControlConfig;
  private turnControlConfig: CustomControlConfig;
  minDate: Date;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private dateService: NbDateService<Date>,
    private scheduleService: ScheduleService,
    private datePipe: DatePipe
  ) {
    this.serviceSelectedDuration = 0;
    this.minDate = this.dateService.addDay(this.dateService.today(), 0);
    this.loadingScheduleForm = false;
    this.commerceControlConfig = {
      fieldName: 'comercio'
    };
    this.serviceControlConfig = {
      fieldName: 'servicio'
    };
    this.dateControlConfig = {
      fieldName: 'fecha'
    };
    this.turnControlConfig = {
      fieldName: 'turno'
    };
    this.scheduleForm = this.fb.group({
      commerce: ['', [customRequiredValidator(this.commerceControlConfig)]],
      service: ['', customRequiredValidator(this.serviceControlConfig)],
      date: ['', [customRequiredValidator(this.dateControlConfig)]],
      turn: ['', [customRequiredValidator(this.turnControlConfig)]]
    });
  }

  ngOnInit() {
    this.updateServiceList(this.scheduleForm.get("commerce").value);
    this.getTurnStates();
  }

  getTurnStates(): void {
    this.store
      .pipe(select(loadingTurnCreate))
      .subscribe(payload => this.loadingScheduleForm = payload || false);
    this.store
      .pipe(select(getTurnCreated))
      .subscribe(payload => {
        this.scheduleForm.reset();
      });
  }

  updateServiceList(idService: number): void {
    this.serviceListFinal = this.serviceList.filter(serviceItem => serviceItem.idService == idService);
  }

  updateTurnList(service: Service) {
    const initHour = parseInt(service.initTime.split(":")[0], 10);
    const finalHour = parseInt(service.finalTime.split(":")[0], 10);
    let initMinute = parseInt(service.initTime.split(":")[1], 10);
    let finalMinute = parseInt(service.finalTime.split(":")[1], 10);
    const startTime = new Date(0);
    startTime.setHours(initHour);
    startTime.setMinutes(initMinute);
    const endTime = new Date(0);
    endTime.setHours(finalHour);
    endTime.setMinutes(finalMinute);
    while (startTime <= endTime) {
      const formattedTime = this.formatTime(startTime);
      this.turnList.push({
        value: formattedTime,
        label: formattedTime
      });
      startTime.setMinutes(startTime.getMinutes() + service.duration);
    }
  }

  formatTime(time: Date): string {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  filterDate = (date) => date.getDay() !== 0 && date.getDay() !== 6;

  get formStatus(): any {
    return this.formEdited()
      ? this.formHasError()
        ? 'danger'
        : 'success'
      : 'info';
  }

  private formEdited(): boolean {
    return this.scheduleForm.dirty || this.scheduleForm.touched;
  }

  private formHasError(): boolean {
    return this.scheduleForm.invalid;
  }

  scheduleSubmit(): void {
    if (this.scheduleForm.valid) {
      this.loadingScheduleForm = true;
      const initHour = parseInt(this.scheduleForm.get("turn").value.split(":")[0], 10);
      const initMinute = parseInt(this.scheduleForm.get("turn").value.split(":")[1], 10);
      const finalTime = new Date(0);
      finalTime.setHours(initHour);
      finalTime.setMinutes(initMinute);
      finalTime.setMinutes(finalTime.getMinutes() + this.serviceSelectedDuration);
      this.store.dispatch(new ScheduleActions.turnCreateRequest({
        idService: this.scheduleForm.get("service").value,
        status: true,
        dateTurn: this.datePipe.transform(this.scheduleForm.get("date").value, 'yyyy-MM-dd'),
        initTime: this.scheduleForm.get("turn").value,
        finalTime: this.formatTime(finalTime)
      }));
    }
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

  private formControlEdited(formField: string): boolean {
    return this.scheduleForm.get(formField).dirty || this.scheduleForm.get(formField).touched;
  }

  private formControlHasError(formField: string): boolean {
    return this.scheduleForm.get(formField).hasError('customError');
  }

  private formControlError(formField: string): boolean {
    return this.scheduleForm.get(formField).getError('customMessage');
  }

  commerceSelected(): void {
    this.scheduleForm.get("service").setValue(null);
    this.scheduleForm.get("turn").setValue(null);
    this.turnList = [];
    this.serviceSelectedDuration = 0;
    this.updateServiceList(this.scheduleForm.get("commerce").value);
  }

  serviceSelected(): void {
    this.scheduleForm.get("turn").setValue(null);
    this.turnList = [];
    let serviceSelected = this.serviceList.find(serviceItem => serviceItem.idService == this.scheduleForm.get("service").value);
    this.serviceSelectedDuration = serviceSelected.duration;
    this.updateTurnList(serviceSelected);
  }

}
