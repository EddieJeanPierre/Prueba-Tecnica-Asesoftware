import { ScheduleActionsType } from '../actions/schedule.actions';
import { ScheduleConstants } from '../constants/schedule.constants';
import { ScheduleState, initialScheduleState } from '../state/schedule.state';

export function scheduleReducer(
  state = initialScheduleState,
  action: ScheduleActionsType
): ScheduleState {
  switch (action.type) {
    case ScheduleConstants.COMMERCE_LIST_REQUEST:
      return {
        ...state,
        commerceList: [],
        loadingCommerceList: true
      };
    case ScheduleConstants.COMMERCE_LIST_SUCCESS:
      return {
        ...state,
        commerceList: action.payload,
        loadingCommerceList: false
      };
    case ScheduleConstants.COMMERCE_LIST_ERROR:
      return {
        ...state,
        commerceList: [],
        loadingCommerceList: false
      };
    case ScheduleConstants.SERVICE_LIST_REQUEST:
      return {
        ...state,
        serviceList: [],
        loadingServiceList: true
      };
    case ScheduleConstants.SERVICE_LIST_SUCCESS:
      return {
        ...state,
        serviceList: action.payload,
        loadingServiceList: false
      };
    case ScheduleConstants.SERVICE_LIST_ERROR:
      return {
        ...state,
        serviceList: [],
        loadingServiceList: false
      };
    case ScheduleConstants.TURN_LIST_REQUEST:
      return {
        ...state,
        turnList: [],
        loadingTurnList: true
      };
    case ScheduleConstants.TURN_LIST_SUCCESS:
      return {
        ...state,
        turnList: action.payload,
        loadingTurnList: false
      };
    case ScheduleConstants.TURN_LIST_ERROR:
      return {
        ...state,
        turnList: [],
        loadingTurnList: false
      };
    case ScheduleConstants.TURN_CREATE_REQUEST:
      return {
        ...state,
        turnCreated: null,
        loadingTurnCreate: true
      };
    case ScheduleConstants.TURN_CREATE_SUCCESS:
      return {
        ...state,
        turnCreated: action.payload,
        loadingTurnCreate: false
      };
    case ScheduleConstants.TURN_CREATE_ERROR:
      return {
        ...state,
        turnCreated: null,
        loadingTurnCreate: false,
      };
    case ScheduleConstants.SCHEDULE_CLEAR:
      return initialScheduleState;
    default:
      return state;
  }
}
