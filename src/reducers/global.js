import { CHANGE_THEME } from '../actions/global';

export const initialState = {
  theme: 'theme1',
  navIcons: 'black',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.themeName,
        navIcons: action.navIconsColor,
      };

    default:
      return state;
  }
};

export default reducer;
