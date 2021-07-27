import { CHANGE_THEME, SET_LOADING_FALSE, SET_LOADING_TRUE, CHANGE_OBJECT, ERASE_MESSAGE, CHANGE_CONTENT, CHANGE_EMAIL, SAVE_MESSAGE, SUBMIT_FORM } from '../actions/global';
import { LOGOUT_USER } from '../actions/user';

export const initialState = {
  theme: 'theme1',
  navIcons: 'black',
  email: '',
  object: '',
  content: '',
  message:'',
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
      content: '',
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
        email: '',
        object: '',
        content: '',
        message:'',
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;