/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import {
  SAVE_USER_INFOS, CHANGE_MESSAGE, CHANGE_DESCRIPTION, CHANGE_PSEUDO, CHANGE_EMAIL, CHANGE_PASSWORD, CHANGE_CONFIRM_PASSWORD, SAVE_USER, LOGOUT_USER, CHANGE_ADDRESS, CHANGE_ZIP_CODE, CHANGE_FIRST_NAME, CHANGE_LAST_NAME, CHANGE_CITY, CHANGE_HOLIDAY_MODE, SAVE_USER_CONVERSATIONS, UPDATE_USER, ERASE_MESSAGE, SAVE_MESSAGE, SAVE_USER_FULL_DATA, SAVE_OTHER_USER_FULL_DATA,
} from '../actions/user';

export const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
  pseudo: '',
  address: '',
  zipCode: '',
  city: '',
  firstName: '',
  lastName: '',
  holiday_mode: false,
  description: '',
  logged: false,
  data: {},
  conversations: {},
  infos: {},
  message: '',
  picture: '',
  fullData: '',
  otherUserFullData: '',
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
    case CHANGE_CONFIRM_PASSWORD:
      return {
        ...state,
        confirmPassword: action.confirmPassword,
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
        zipCode: action.zipCode,
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
    case CHANGE_DESCRIPTION:
      return {
        ...state,
        description: action.description,
      };
    case SAVE_MESSAGE:
      return {
        ...state,
        message: action.message,
      };
    case CHANGE_MESSAGE:
      return {
        ...state,
        message: action.message,
      };
    case ERASE_MESSAGE:
      return {
        ...state,
        message: '',
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
        confirmPassword: '',
        pseudo: action.infos.pseudo,
        address: action.infos.address,
        zipCode: action.infos.zip_code,
        city: action.infos.city,
        firstName: action.infos.firstname,
        lastName: action.infos.lastname,
        holiday_mode: action.infos.holiday_mode,
        description: action.infos.description,
        picture: action.infos.picture,
        infos: action.infos,
      };
    case SAVE_USER_FULL_DATA:
      return {
        ...state,
        fullData: action.fullData,
      };
    case SAVE_OTHER_USER_FULL_DATA:
      return {
        ...state,
        otherUserFullData: action.fullData,
      };
    case UPDATE_USER:
      return {
        ...state,
        email: '',
        password: '',
        confirmPassword: '',
        pseudo: '',
        address: '',
        zipCode: '',
        city: '',
        firstName: '',
        lastName: '',
        holiday_mode: '',
        description: '',
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
        confirmPassword:'',
        pseudo: '',
        address: '',
        zipCode: '',
        city: '',
        firstName: '',
        lastName: '',
        holiday_mode: false,
        description: '',
        logged: false,
        data: {},
        conversations: {},
        infos: {},
        message: '',
        picture: '',
        fullData: '',
        otherUserFullData: '',
      };
    default:
      return state;
  }
};

export default reducer;
