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
