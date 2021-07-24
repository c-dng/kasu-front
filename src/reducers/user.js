import { CHANGE_PSEUDO, CHANGE_PASSWORD, SAVE_USER, LOGOUT_USER, AUTO_LOGIN_USER } from '../actions/user';

export const initialState = {
  email: '',
  password: '',
  pseudo: '',
  logged: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_PSEUDO:
      return {
        ...state,
        pseudo: action.pseudo,
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    case SAVE_USER:
      return {
        ...state,
        logged: true,
        pseudo: action.data.pseudo,
        email: '',
        password: '',
      };
    case AUTO_LOGIN_USER:
      return {
        ...state,
        logged: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        logged: false,
        pseudo: '',
      };
    default:
      return state;
  }
};

export default reducer;
