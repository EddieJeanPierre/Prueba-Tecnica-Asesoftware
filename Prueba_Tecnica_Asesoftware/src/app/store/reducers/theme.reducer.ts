import { initialThemeState, ThemeState } from '../state/theme.state';
import { ThemeActionsType } from '../actions/theme.actions';
import { ThemeConstants } from '../constants/theme.constants';

export function themeReducer(
  state = initialThemeState,
  action: ThemeActionsType
): ThemeState {
  switch (action.type) {
    case ThemeConstants.TOGGLE_THEME_REQUEST:
      return {
        ...initialThemeState,
        loading: true
      };
    case ThemeConstants.TOGGLE_THEME_SUCCESS:
      return {
        ...state,
        loading: false,
        type: action.payload
      };
    case ThemeConstants.TOGGLE_THEME_ERROR:
      return {
        ...initialThemeState,
        loading: false,
      };
    case ThemeConstants.THEME_CLEAR:
      return initialThemeState;
    default:
      return state;
  }
}
