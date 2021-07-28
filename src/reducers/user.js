import { SAVE_USER_INFOS, CHANGE_PSEUDO, CHANGE_EMAIL, CHANGE_PASSWORD, SAVE_USER, LOGOUT_USER, CHANGE_ADDRESS, CHANGE_ZIP_CODE, CHANGE_FIRST_NAME, CHANGE_LAST_NAME, CHANGE_CITY, CHANGE_HOLIDAY_MODE, SAVE_USER_CONVERSATIONS, UPDATE_USER } from '../actions/user';

export const initialState = {
  email: '',
  password: '',
  pseudo: '',
  address: '',
  zipCode: 0,
  city: '',
  firstName: '',
  lastName: '',
  holiday_mode: false,
  bio: '',
  logged: false,
  data: {},
  conversations: {},
  infos: {},
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
    case CHANGE_HOLIDAY_MODE:
    return {
      ...state,
      holiday_mode: action.holiday_mode,
    };
    case SAVE_USER:
      return {
        ...state,
        logged: true,
        pseudo: '',
        password: '',
        data: action.data.data,
      };
    case SAVE_USER_INFOS:
      return {
        ...state,
        email: action.infos.email,
        password: '',
        pseudo: action.infos.pseudo,
        address: action.infos.address,
        zipCode: action.infos.zip_code,
        city: action.infos.city,
        firstName: action.infos.firstname,
        lastName: action.infos.lastname,
        holiday_mode: action.infos.holiday_mode,
        bio: action.infos.description,
      };
    case UPDATE_USER:
      return {
      ...state,
      email: '',
      password: '',
      pseudo: '',
      address: '',
      zipCode: 0,
      city: '',
      firstName: '',
      lastName: '',
      holiday_mode: false,
      bio: '',
    };
    case SAVE_USER_CONVERSATIONS:
      return {
        ...state,
        conversations: action.data,
      };
    case LOGOUT_USER:
      return {
        email: '',
        password: '',
        pseudo: '',
        address: '',
        zipCode: 0,
        city: '',
        firstName: '',
        lastName: '',
        logged: false,
        data: {},
        conversations: {},
      };
    default:
      return state;
  }
};

export default reducer;
