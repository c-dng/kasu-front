import { CHANGE_THEME, SET_LOADING_FALSE, SET_LOADING_TRUE } from '../actions/global';
import { LOGOUT_USER } from '../actions/user';

export const initialState = {
  theme: 'theme1',
  navIcons: 'black',
  loading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.themeName,
        navIcons: action.navIconsColor,
      };
    case SET_LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };
    case SET_LOADING_FALSE:
      return {
        ...state,
        loading: false,
      };
    case LOGOUT_USER:
      return {
        theme: 'theme1',
        navIcons: 'black',
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
