export const CHANGE_THEME = 'CHANGE_THEME';

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

export const submitForm = (content) => ({
  type: SUBMIT_FORM,
  content,
});