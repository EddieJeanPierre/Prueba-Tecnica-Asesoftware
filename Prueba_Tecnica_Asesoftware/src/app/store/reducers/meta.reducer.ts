import { ActionReducer, MetaReducer } from '@ngrx/store';

export function debug(reducer): ActionReducer<any, any> {
    return function (state, action) {
        const result = reducer(state, action);
        if (
            action.type !== '@ngrx/router-store/navigation'
            && action.type !== '@ngrx/router-store/request'
            && action.type !== '@ngrx/router-store/navigated'
            && action.type !== '@ngrx/store/init'
            && action.type !== '@ngrx/effects/init'
        ) {
            console.log('New Action', action);
            console.log('Prev state', state);
            console.log('Next state', result);
            console.log("==========");
        }
        return result;
    };
}

export const metaReducers: MetaReducer<any>[] = [debug];