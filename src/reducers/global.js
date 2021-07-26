import { CHANGE_THEME, CHANGE_OBJECT, CHANGE_CONTENT, CHANGE_EMAIL } from '../actions/global';

export const initialState = {
  theme: 'theme1',
  navIcons: 'black',
  email: '',
  object: '',
  content: ''
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.themeName,
        navIcons: action.navIconsColor,
      };
    case CHANGE_EMAIL:
      return {
      ...state,
      email: action.email,
    };
    case CHANGE_OBJECT:
      return {
      ...state,
      object: action.object,
    };
    case CHANGE_CONTENT:
      return {
      ...state,
      content: action.content,
    };
    default:
      return state;
  }
};

export default reducer;
