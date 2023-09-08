import { AppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { ScheduleState } from '../state/schedule.state';

export const scheduleState = (state: AppState) => state.schedule;

export const loadingCommerceList = createSelector(
    scheduleState,
    (state: ScheduleState) => state.loadingCommerceList
);

export const getCommerceList = createSelector(
    scheduleState,
    (state: ScheduleState) => state.commerceList
);

export const loadingServiceList = createSelector(
    scheduleState,
    (state: ScheduleState) => state.loadingServiceList
);

export const getServiceList = createSelector(
    scheduleState,
    (state: ScheduleState) => state.serviceList
);

export const loadingTurnList = createSelector(
    scheduleState,
    (state: ScheduleState) => state.loadingTurnList
);

export const getTurnList = createSelector(
    scheduleState,
    (state: ScheduleState) => state.turnList
);

export const loadingTurnCreate = createSelector(
    scheduleState,
    (state: ScheduleState) => state.loadingTurnCreate
);

export const getTurnCreated = createSelector(
    scheduleState,
    (state: ScheduleState) => state.turnCreated
);
