import { Action } from '@ngrx/store';
import { ThemeConstants } from '../constants/theme.constants';

export class ToggleThemeRequest implements Action {
    public readonly type = ThemeConstants.TOGGLE_THEME_REQUEST;
}

export class ToggleThemeSuccess implements Action {
    public readonly type = ThemeConstants.TOGGLE_THEME_SUCCESS;
    constructor(public payload: boolean) { }
}

export class ToggleThemeError implements Action {
    public readonly type = ThemeConstants.TOGGLE_THEME_ERROR;
}

export class ThemeClear implements Action {
    public readonly type = ThemeConstants.THEME_CLEAR;
}

export type ThemeActionsType =
    ToggleThemeRequest |
    ToggleThemeSuccess |
    ToggleThemeError |
    ThemeClear;

export const ThemeActions = {
    toggleThemeRequest: ToggleThemeRequest,
    toggleThemeSuccess: ToggleThemeSuccess,
    toggleThemeError: ToggleThemeError,
    themeClear: ThemeClear
}