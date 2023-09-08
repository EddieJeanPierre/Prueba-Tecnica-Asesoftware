import { environment } from "@environment/environment";

export interface ThemeState {
    loading: boolean,
    type: boolean;
    payload: { type: boolean };
};

export const initialThemeState: ThemeState = {
    loading: false,
    type: environment.darkThemeActive,
    payload: null
}