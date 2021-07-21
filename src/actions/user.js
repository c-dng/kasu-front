export const CHANGE_EMAIL = 'CHANGE_EMAIL';

export const changeEmail = (email) => ({
  type: CHANGE_EMAIL,
  email,
});

export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';

export const changePassword = (password) => ({
  type: CHANGE_PASSWORD,
  password,
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

export const LOGOUT_USER = 'LOGOUT_USER';

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
