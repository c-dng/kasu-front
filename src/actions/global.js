// Action allowing the user to change theme
export const CHANGE_THEME = 'CHANGE_THEME';

export const changeTheme = (themeName, navIconsColor) => ({
  type: CHANGE_THEME,
  themeName,
  navIconsColor,
});

// controlled component for email field
export const CHANGE_EMAIL = 'CHANGE_EMAIL';

export const changeEmail = (email) => ({
  type: CHANGE_EMAIL,
  email,
});

// controlled component for object field in contact form
export const CHANGE_OBJECT = 'CHANGE_OBJECT';

export const changeObject = (object) => ({
  type: CHANGE_OBJECT,
  object,
});

// controlled component for content field in contact form
export const CHANGE_CONTENT = 'CHANGE_CONTENT';

export const changeContent = (content) => ({
  type: CHANGE_CONTENT,
  content,
});

// submit contact form
export const SUBMIT_FORM = 'SUBMIT_FORM';

export const submitForm = () => ({
  type: SUBMIT_FORM,
});

// save the API response message for submitting a correct contact form.
// Message then displayed to the user.
export const SAVE_MESSAGE = 'SAVE_MESSAGE';

export const saveMessage = (message) => ({
  type: SAVE_MESSAGE,
  message,
});

// Erase the message displayed to the user in response to a successful contact form submission
export const ERASE_MESSAGE = 'ERASE_MESSAGE';

export const eraseMessage = () => ({
  type: ERASE_MESSAGE,
});

// Set state.global.loading to true allowing the page to render a loading animation,
// and allowing the app to wait for the api requested to get fulfilled
export const SET_LOADING_TRUE = 'SET_LOADING_TRUE';

export const setLoadingTrue = () => ({
  type: SET_LOADING_TRUE,
});

// Set state.global.loading to false, allowing the app to render properly, after a loading.
export const SET_LOADING_FALSE = 'SET_LOADING_FALSE';

export const setLoadingFalse = () => ({
  type: SET_LOADING_FALSE,
});

// assign a redirect link to the state.
// Whenever it changes, the router will switch to this link thanks to a useEffect.
export const REDIRECT = 'REDIRECT';

export const redirectTo = (link) => ({
  type: REDIRECT,
  link,
});

// Action triggered on app mount
export const APP_INIT = 'APP_INIT';

export const appInit = () => ({
  type: APP_INIT,
});

// Action triggered on app unmount
export const APP_DESTRUCT = 'APP_DESTRUCT';

export const appDestruct = () => ({
  type: APP_DESTRUCT,
});
