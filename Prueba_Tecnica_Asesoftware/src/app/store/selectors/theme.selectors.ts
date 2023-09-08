import { AppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { ThemeState } from '../state/theme.state';


export const themeState = (state: AppState) => state.theme;

export const setThemeActive = createSelector(
    themeState,
    (state: ThemeState) => state.type
);

export const themeLoading = createSelector(
    themeState,
    (state: ThemeState) => state.loading
);
