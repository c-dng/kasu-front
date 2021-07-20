import { CHANGE_THEME } from '../actions/global';

export const initialState = {
  theme: 'theme1',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.themeName,
      };

    default:
      return state;
  }
};

export default reducer;
