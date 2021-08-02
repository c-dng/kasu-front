/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
export const CHANGE_PSEUDO = 'CHANGE_PSEUDO';

export const changePseudo = (pseudo) => ({
  type: CHANGE_PSEUDO,
  pseudo,
});

export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';

export const changePassword = (password) => ({
  type: CHANGE_PASSWORD,
  password,
});

export const CHANGE_CONFIRM_PASSWORD = 'CHANGE_CONFIRM_PASSWORD';

export const changeConfirmPassword = (confirmPassword) => ({
  type: CHANGE_CONFIRM_PASSWORD,
  confirmPassword,
});

export const CHANGE_EMAIL = 'CHANGE_EMAIL';

export const changeEmail = (email) => ({
  type: CHANGE_EMAIL,
  email,
});

export const CHANGE_ZIP_CODE = 'CHANGE_ZIP_CODE';

export const changeZipCode = (zipCode) => ({
  type: CHANGE_ZIP_CODE,
  zipCode,
});

export const CHANGE_FIRST_NAME = 'CHANGE_FIRST_NAME';

export const changeFirstName = (firstName) => ({
  type: CHANGE_FIRST_NAME,
  firstName,
});

export const CHANGE_LAST_NAME = 'CHANGE_LAST_NAME';

export const changeLastName = (lastName) => ({
  type: CHANGE_LAST_NAME,
  lastName,
});

export const CHANGE_ADDRESS = 'CHANGE_ADDRESS';

export const changeAddress = (address) => ({
  type: CHANGE_ADDRESS,
  address,
});

export const CHANGE_CITY = 'CHANGE_CITY';

export const changeCity = (city) => ({
  type: CHANGE_CITY,
  city,
});

export const CHANGE_HOLIDAY_MODE = 'CHANGE_HOLIDAY_MODE';

export const changeHolidayMode = (holiday_mode) => ({
  type: CHANGE_HOLIDAY_MODE,
  holiday_mode,
});

export const CHANGE_DESCRIPTION = 'CHANGE_DESCRIPTION';

export const changeDescription = (description) => ({
  type: CHANGE_DESCRIPTION,
  description,
});

export const LOGIN_USER = 'LOGIN_USER';

export const loginUser = () => ({
  type: LOGIN_USER,
});

export const AUTO_LOGIN_USER = 'AUTO_LOGIN_USER';

export const autoLoginUser = () => ({
  type: AUTO_LOGIN_USER,
});

export const SAVE_USER = 'SAVE_USER';

export const saveUser = (data) => ({
  type: SAVE_USER,
  data,
});

export const LOAD_CONVERSATIONS = 'LOAD_CONVERSATIONS';

export const loadConversations = () => ({
  type: LOAD_CONVERSATIONS,
});

export const SAVE_USER_CONVERSATIONS = 'SAVE_USER_CONVERSATIONS';

export const saveUserConversations = (data) => ({
  type: SAVE_USER_CONVERSATIONS,
  data,
});

export const LOGOUT_USER = 'LOGOUT_USER';

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const REGISTER_USER = 'REGISTER_USER';

export const RegisterUser = () => ({
  type: REGISTER_USER,
});

export const UPDATE_USER = 'UPDATE_USER';

export const updateUser = () => ({
  type: UPDATE_USER,
});

export const SAVE_USER_INFOS = 'SAVE_USER_INFOS';

export const saveUserInfos = (fullData) => ({
  type: SAVE_USER_INFOS,
  fullData,
});

export const SAVE_MESSAGE = 'SAVE_MESSAGE';

export const saveMessage = (message) => ({
  type: SAVE_MESSAGE,
  message,
});

export const ERASE_MESSAGE = 'ERASE_MESSAGE';

export const eraseMessage = () => ({
  type: ERASE_MESSAGE,
});

export const LOAD_USER_FULL_DATA = 'LOAD_USER_FULL_DATA';

export const loadUserFullData = () => ({
  type: LOAD_USER_FULL_DATA,
});

export const SAVE_USER_FULL_DATA = 'SAVE_USER_FULL_DATA';

export const saveUserFullData = (fullData) => ({
  type: SAVE_USER_FULL_DATA,
  fullData,
});

export const LOAD_OTHER_USER_FULL_DATA = 'LOAD_OTHER_USER_FULL_DATA';

export const loadOtherUserFullData = (id) => ({
  type: LOAD_OTHER_USER_FULL_DATA,
  id,
});

export const SAVE_OTHER_USER_FULL_DATA = 'SAVE_OTHER_USER_FULL_DATA';

export const saveOtherUserFullData = (fullData) => ({
  type: SAVE_OTHER_USER_FULL_DATA,
  fullData,
});
