import { APP_INIT, RESIZE_LEFT_PANEL, SWITCH_THEME, SET_LOADING, SET_ERROR, UIState, UIActionTypes } from './types';
import { ThemeType } from 'components/Theme/Theme';

const initialState: UIState = {
  init: true,
  theme: ThemeType.DARK,
  leftPanelWidth: 200,
  loading: false,
  error: null,
};

export const uiReducer = (state = initialState, action: UIActionTypes): UIState => {
  switch (action.type) {
    case APP_INIT:
      return {
        ...state,
        init: action.init,
      };

    case RESIZE_LEFT_PANEL:
      return {
        ...state,
        leftPanelWidth: action.leftPanelWidth,
      };

    case SWITCH_THEME:
      return {
        ...state,
        theme: action.theme,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };

    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};
