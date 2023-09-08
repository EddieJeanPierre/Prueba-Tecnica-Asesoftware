import { Injectable } from '@angular/core';
import { ofType, Actions, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of, mergeMap } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
import { CreateToastNotification } from '../actions/toast-notification.actions';
import { AppState } from '../state/app.state';
import { CommerceListRequest, ScheduleActions, ServiceListRequest, TurnCreateRequest, TurnListRequest } from '../actions/schedule.actions';
import { ScheduleConstants } from '../constants/schedule.constants';
import { ScheduleService } from '@features/schedule/services/schedule.service';
import { ToastNotificationState } from '../state/toast-notification.state';
import { Commerce, Service, Turn } from '@features/schedule/interfaces/schedule.interfaces';

@Injectable()
export class ScheduleEffects {

    commerceListRequest = createEffect(() =>
        this.actions.pipe(
            ofType<CommerceListRequest>(ScheduleConstants.COMMERCE_LIST_REQUEST),
            mergeMap(() => this.scheduleService.getCommerceList().pipe(
                map((res: Commerce[]) => new ScheduleActions.commerceListSuccess(res)),
                catchError((error) => {
                    const toastNotificationState: ToastNotificationState = {
                        message: "No se logro obtener el listado de s.",
                        title: "Listado comercios",
                        status: 'warning'
                    };
                    this.store.dispatch(new CreateToastNotification(toastNotificationState));
                    return of(new ScheduleActions.commerceListError(error));
                })
            ))
        ));

    serviceListRequest = createEffect(() =>
        this.actions.pipe(
            ofType<ServiceListRequest>(ScheduleConstants.SERVICE_LIST_REQUEST),
            mergeMap(() => this.scheduleService.getServiceList().pipe(
                map((res: Service[]) => new ScheduleActions.serviceListSuccess(res)),
                catchError((error) => {
                    const toastNotificationState: ToastNotificationState = {
                        message: "No se logro obtener el listado de servicios.",
                        title: "Listado servicios",
                        status: 'warning'
                    };
                    this.store.dispatch(new CreateToastNotification(toastNotificationState));
                    return of(new ScheduleActions.serviceListError(error));
                })
            ))
        ));

    turnListRequest = createEffect(() =>
        this.actions.pipe(
            ofType<TurnListRequest>(ScheduleConstants.TURN_LIST_REQUEST),
            mergeMap(() => this.scheduleService.getTurnList().pipe(
                map((res: Turn[]) => new ScheduleActions.turnListSuccess(res)),
                catchError((error) => {
                    const toastNotificationState: ToastNotificationState = {
                        message: 'No se logro obtener el listado de turnos.',
                        title: "Listado turnos",
                        status: 'danger'
                    };
                    this.store.dispatch(new CreateToastNotification(toastNotificationState));
                    return of(new ScheduleActions.turnListError(error));
                })
            ))
        ));

    turnCreateRequest = createEffect(() =>
        this.actions.pipe(
            ofType<TurnCreateRequest>(ScheduleConstants.TURN_CREATE_REQUEST),
            map((action) => action.payload),
            mergeMap((turn) => this.scheduleService.createTurn(turn).pipe(
                map((res: Turn) => {
                    const toastNotificationState: ToastNotificationState = {
                        message: "Se registro el turno con éxito.",
                        title: "Registrar Turno",
                    };
                    this.store.dispatch(new CreateToastNotification(toastNotificationState));
                    return new ScheduleActions.turnCreateSuccess(res);
                }),
                catchError((error) => {
                    const toastNotificationState: ToastNotificationState = {
                        message: "No se logro registrar el turno.",
                        title: "Registrar Turno",
                        status: 'danger'
                    };
                    this.store.dispatch(new CreateToastNotification(toastNotificationState));
                    return of(new ScheduleActions.turnCreateError(error));
                })
            ))
        ));

    constructor(
        private actions: Actions,
        private store: Store<AppState>,
        private scheduleService: ScheduleService,
    ) { }

}