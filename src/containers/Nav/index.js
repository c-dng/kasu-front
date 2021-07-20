import { connect } from 'react-redux';

import Nav from 'src/components/Nav';
import { changeTheme } from '../../actions/global';
import { logoutUser } from '../../actions/user';

const mapStateToProps = (state, ownProps) => ({
  navIconsColor: state.global.navIcons,
  isLogged: state.user.logged,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeWebsiteTheme: function (theme, navIconColor) {
    dispatch(changeTheme(theme, navIconColor));
  },
  disconnectUser: function () {
    dispatch(logoutUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
