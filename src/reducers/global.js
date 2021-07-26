import { CHANGE_THEME, CHANGE_OBJECT, ERASE_MESSAGE, CHANGE_CONTENT, CHANGE_EMAIL, SAVE_MESSAGE, SUBMIT_FORM } from '../actions/global';

export const initialState = {
  theme: 'theme1',
  navIcons: 'black',
  email: '',
  object: '',
  content: '',
  message:''
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
    case SAVE_MESSAGE:
      return {
      ...state,
      message: action.message,
    };
    case ERASE_MESSAGE:
      return {
      ...state,
      message: '',
    };
    case SUBMIT_FORM:
      return {
      ...state,
      object: '',
      content: ''
    };
    default:
      return state;
  }
};

export default reducer;