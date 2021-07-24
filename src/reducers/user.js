import { CHANGE_PSEUDO, CHANGE_EMAIL, CHANGE_PASSWORD, SAVE_USER, LOGOUT_USER, AUTO_LOGIN_USER, CHANGE_ADDRESS, CHANGE_ZIP_CODE, CHANGE_FIRST_NAME, CHANGE_LAST_NAME, CHANGE_CITY } from '../actions/user';

export const initialState = {
  email: '',
  password: '',
  pseudo: '',
  address: '',
  zipCode: 0,
  city: '',
  firstName: '',
  lastName: '',
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
    case CHANGE_ADDRESS:
      return {
        ...state,
        address: action.address,
      };
    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case CHANGE_ZIP_CODE:
      return {
        ...state,
        zipCode: parseInt(action.zipCode, 10),
      };
    case CHANGE_FIRST_NAME:
      return {
        ...state,
        firstName: action.firstName,
      };
    case CHANGE_LAST_NAME:
      return {
        ...state,
        lastName: action.lastName,
      };
    case CHANGE_CITY:
      return {
        ...state,
        city: action.city,
      };
    case SAVE_USER:
      return {
        ...state,
        logged: true,
        pseudo: '',
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
