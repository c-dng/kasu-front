/* eslint-disable linebreak-style */
export const CHANGE_THEME = 'CHANGE_THEME';

// eslint-disable-next-line linebreak-style
export const changeTheme = (themeName, navIconsColor) => ({
  type: CHANGE_THEME,
  themeName,
  navIconsColor,
});

export const CHANGE_EMAIL = 'CHANGE_EMAIL';

export const changeEmail = (email) => ({
  type: CHANGE_EMAIL,
  email,
});

export const CHANGE_OBJECT = 'CHANGE_OBJECT';

export const changeObject = (object) => ({
  type: CHANGE_OBJECT,
  object,
});

export const CHANGE_CONTENT = 'CHANGE_CONTENT';

export const changeContent = (content) => ({
  type: CHANGE_CONTENT,
  content,
});

export const SUBMIT_FORM = 'SUBMIT_FORM';

export const submitForm = () => ({
  type: SUBMIT_FORM,
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

export const SET_LOADING_TRUE = 'SET_LOADING_TRUE';

export const setLoadingTrue = () => ({
  type: SET_LOADING_TRUE,
});

export const SET_LOADING_FALSE = 'SET_LOADING_FALSE';

export const setLoadingFalse = () => ({
  type: SET_LOADING_FALSE,
});

export const REDIRECT = 'REDIRECT';

export const redirectTo = (link) => ({
  type: REDIRECT,
  link,
});

export const LOGOUT_GLOBAL = 'LOGOUT_GLOBAL';

export const logoutGlobal = () => ({
  type: LOGOUT_GLOBAL,
});
