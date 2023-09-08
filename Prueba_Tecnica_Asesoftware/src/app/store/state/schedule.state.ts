import { Commerce, Service, Turn } from "@features/schedule/interfaces/schedule.interfaces";

export interface ScheduleState {
    loadingCommerceList?: boolean,
    commerceList?: Commerce[],
    loadingServiceList?: boolean,
    serviceList?: Service[],
    loadingTurnList?: boolean,
    turnList?: Turn[],
    loadingTurnCreate?: boolean,
    turnCreated?: Turn,
};

export const initialScheduleState: ScheduleState = {
    loadingCommerceList: false,
    loadingServiceList: false,
    loadingTurnList: false,
    loadingTurnCreate: false,
    commerceList: [],
    serviceList: [],
    turnList: [],
    turnCreated: null,
};