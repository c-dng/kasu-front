// Pseudo field controlled component
export const CHANGE_PSEUDO = 'CHANGE_PSEUDO';

export const changePseudo = (pseudo) => ({
  type: CHANGE_PSEUDO,
  pseudo,
});

// Password field controlled component
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';

export const changePassword = (password) => ({
  type: CHANGE_PASSWORD,
  password,
});

// ConfirmPassword field controlled component
export const CHANGE_CONFIRM_PASSWORD = 'CHANGE_CONFIRM_PASSWORD';

export const changeConfirmPassword = (confirmPassword) => ({
  type: CHANGE_CONFIRM_PASSWORD,
  confirmPassword,
});

// Email field controlled component
export const CHANGE_EMAIL = 'CHANGE_EMAIL';

export const changeEmail = (email) => ({
  type: CHANGE_EMAIL,
  email,
});

// Zipcode field controlled component
export const CHANGE_ZIP_CODE = 'CHANGE_ZIP_CODE';

export const changeZipCode = (zipCode) => ({
  type: CHANGE_ZIP_CODE,
  zipCode,
});

// Firstname field controlled component
export const CHANGE_FIRST_NAME = 'CHANGE_FIRST_NAME';

export const changeFirstName = (firstName) => ({
  type: CHANGE_FIRST_NAME,
  firstName,
});

// Lastname field controlled component
export const CHANGE_LAST_NAME = 'CHANGE_LAST_NAME';

export const changeLastName = (lastName) => ({
  type: CHANGE_LAST_NAME,
  lastName,
});

// Address field controlled component
export const CHANGE_ADDRESS = 'CHANGE_ADDRESS';

export const changeAddress = (address) => ({
  type: CHANGE_ADDRESS,
  address,
});

// City field controlled component
export const CHANGE_CITY = 'CHANGE_CITY';

export const changeCity = (city) => ({
  type: CHANGE_CITY,
  city,
});

// Holiday mode field controlled component
export const CHANGE_HOLIDAY_MODE = 'CHANGE_HOLIDAY_MODE';

export const changeHolidayMode = (holiday_mode) => ({
  type: CHANGE_HOLIDAY_MODE,
  holiday_mode,
});

// Description field controlled component
export const CHANGE_DESCRIPTION = 'CHANGE_DESCRIPTION';

export const changeDescription = (description) => ({
  type: CHANGE_DESCRIPTION,
  description,
});

// Action to log the user
export const LOGIN_USER = 'LOGIN_USER';

export const loginUser = () => ({
  type: LOGIN_USER,
});

// Saving the connected user's data in the state
export const SAVE_USER = 'SAVE_USER';

export const saveUser = (data) => ({
  type: SAVE_USER,
  data,
});

// api call to load the connected user's conversations in the state
export const LOAD_CONVERSATIONS = 'LOAD_CONVERSATIONS';

export const loadConversations = () => ({
  type: LOAD_CONVERSATIONS,
});

// saving the connected user's conversations in the state
export const SAVE_USER_CONVERSATIONS = 'SAVE_USER_CONVERSATIONS';

export const saveUserConversations = (data) => ({
  type: SAVE_USER_CONVERSATIONS,
  data,
});

// action used by every reducer to re-init the state after user logging out
export const LOGOUT_USER = 'LOGOUT_USER';

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

// call to api for registering from register form submit
export const REGISTER_USER = 'REGISTER_USER';

export const RegisterUser = () => ({
  type: REGISTER_USER,
});

// call to api for updating user's info from updating form submit
export const UPDATE_USER = 'UPDATE_USER';

export const updateUser = () => ({
  type: UPDATE_USER,
});

// call to api to get user's connected infos
export const GET_USER_INFOS = 'GET_USER_INFOS';

export const getUserInfos = () => ({
  type: GET_USER_INFOS,
});

// saving in the state the connected user's data
export const SAVE_USER_INFOS = 'SAVE_USER_INFOS';

export const saveUserInfos = (infos) => ({
  type: SAVE_USER_INFOS,
  infos,
});

// saving in state the response message on successful updating profile data.
export const SAVE_MESSAGE = 'SAVE_MESSAGE';

export const saveMessage = (message) => ({
  type: SAVE_MESSAGE,
  message,
});

// erasing from state the response message.
export const ERASE_ERROR_MESSAGE = 'ERASE_ERROR_MESSAGE';

export const eraseErrorMessage = () => ({
  type: ERASE_ERROR_MESSAGE,
});

// call to api to load full user's connected infos
export const LOAD_USER_FULL_DATA = 'LOAD_USER_FULL_DATA';

export const loadUserFullData = () => ({
  type: LOAD_USER_FULL_DATA,
});

// saving in state the full user's connected infos
export const SAVE_USER_FULL_DATA = 'SAVE_USER_FULL_DATA';

export const saveUserFullData = (fullData) => ({
  type: SAVE_USER_FULL_DATA,
  fullData,
});

// call to api to load another member's data in order to display its profile page
export const LOAD_OTHER_USER_FULL_DATA = 'LOAD_OTHER_USER_FULL_DATA';

export const loadOtherUserFullData = (id) => ({
  type: LOAD_OTHER_USER_FULL_DATA,
  id,
});

// saving in state another member's data in order to display its profile page
export const SAVE_OTHER_USER_FULL_DATA = 'SAVE_OTHER_USER_FULL_DATA';

export const saveOtherUserFullData = (fullData) => ({
  type: SAVE_OTHER_USER_FULL_DATA,
  fullData,
});

export const SAVE_ERRORS = 'SAVE_ERRORS';

export const saveErrors = (errors) => ({
  type: SAVE_ERRORS,
  errors,
});

export const SUBMIT_FORM_REGISTER = 'SUBMIT_FORM_REGISTER';

export const submitFormRegister = () => ({
  type: SUBMIT_FORM_REGISTER,
});

export const SAVE_STATUS = 'SAVE_STATUS';

export const saveStatus = (status) => ({
  type: SAVE_STATUS,
  status,
});
