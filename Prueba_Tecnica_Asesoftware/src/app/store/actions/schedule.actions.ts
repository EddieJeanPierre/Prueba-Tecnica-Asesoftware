import { Action } from '@ngrx/store';
import { ScheduleConstants } from '../constants/schedule.constants';
import { Commerce, Service, Turn } from '@features/schedule/interfaces/schedule.interfaces';

export class CommerceListRequest implements Action {
    public readonly type = ScheduleConstants.COMMERCE_LIST_REQUEST;
}

export class CommerceListSuccess implements Action {
    public readonly type = ScheduleConstants.COMMERCE_LIST_SUCCESS;
    constructor(public payload: Commerce[]) { }
}

export class CommerceListError implements Action {
    public readonly type = ScheduleConstants.COMMERCE_LIST_ERROR;
    constructor(public payload: any) { }
}

export class ServiceListRequest implements Action {
    public readonly type = ScheduleConstants.SERVICE_LIST_REQUEST;
}

export class ServiceListSuccess implements Action {
    public readonly type = ScheduleConstants.SERVICE_LIST_SUCCESS;
    constructor(public payload: Service[]) { }
}

export class ServiceListError implements Action {
    public readonly type = ScheduleConstants.SERVICE_LIST_ERROR;
    constructor(public payload: any) { }
}

export class TurnListRequest implements Action {
    public readonly type = ScheduleConstants.TURN_LIST_REQUEST;
}

export class TurnListSuccess implements Action {
    public readonly type = ScheduleConstants.TURN_LIST_SUCCESS;
    constructor(public payload: Turn[]) { }
}

export class TurnListError implements Action {
    public readonly type = ScheduleConstants.TURN_LIST_ERROR;
    constructor(public payload: any) { }
}

export class TurnCreateRequest implements Action {
    public readonly type = ScheduleConstants.TURN_CREATE_REQUEST;
    constructor(public payload: Turn) { }
}

export class TurnCreateSuccess implements Action {
    public readonly type = ScheduleConstants.TURN_CREATE_SUCCESS;
    constructor(public payload: Turn) { }
}

export class TurnCreateError implements Action {
    public readonly type = ScheduleConstants.TURN_CREATE_ERROR;
    constructor(public payload: any) { }
}

export class ScheduleClear implements Action {
    public readonly type = ScheduleConstants.SCHEDULE_CLEAR;
}

export type ScheduleActionsType =
    CommerceListRequest |
    CommerceListSuccess |
    CommerceListError |
    ServiceListRequest |
    ServiceListSuccess |
    ServiceListError |
    TurnListRequest |
    TurnListSuccess |
    TurnListError |
    TurnCreateRequest |
    TurnCreateSuccess |
    TurnCreateError |
    ScheduleClear;

export const ScheduleActions = {
    commerceListRequest: CommerceListRequest,
    commerceListSuccess: CommerceListSuccess,
    commerceListError: CommerceListError,
    serviceListRequest: ServiceListRequest,
    serviceListSuccess: ServiceListSuccess,
    serviceListError: ServiceListError,
    turnListRequest: TurnListRequest,
    turnListSuccess: TurnListSuccess,
    turnListError: TurnListError,
    turnCreateRequest: TurnCreateRequest,
    turnCreateSuccess: TurnCreateSuccess,
    turnCreateError: TurnCreateError,
    scheduleClear: ScheduleClear
}