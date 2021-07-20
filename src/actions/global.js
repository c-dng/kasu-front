export const CHANGE_THEME = 'CHANGE_THEME';

export const changeTheme = (themeName, navIconsColor) => ({
  type: CHANGE_THEME,
  themeName,
  navIconsColor,
});
