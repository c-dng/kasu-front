import { CHANGE_EMAIL, CHANGE_PASSWORD, SAVE_USER, LOGOUT_USER } from '../actions/user';

export const initialState = {
  email: '',
  password: '',
  pseudo: '',
  logged: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.email,
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
