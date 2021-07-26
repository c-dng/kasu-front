export const CHANGE_THEME = 'CHANGE_THEME';

export const changeTheme = (themeName, navIconsColor) => ({
  type: CHANGE_THEME,
  themeName,
  navIconsColor,
});

export const SET_LOADING_TRUE = 'SET_LOADING_TRUE';

export const setLoadingTrue = () => ({
  type: SET_LOADING_TRUE,
});

export const SET_LOADING_FALSE = 'SET_LOADING_FALSE';

export const setLoadingFalse = () => ({
  type: SET_LOADING_FALSE,
});
