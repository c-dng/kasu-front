import { connect } from 'react-redux';

import Nav from 'src/components/Nav';
import { changeTheme } from '../../actions/global';
import { loadConversations, logoutUser } from '../../actions/user';

const mapStateToProps = (state, ownProps) => ({
  navIconsColor: state.global.navIcons,
  isLogged: state.user.logged,
  picture:state.user.picture,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeWebsiteTheme: function (theme, navIconColor) {
    dispatch(changeTheme(theme, navIconColor));
  },
  disconnectUser: function () {
    dispatch(logoutUser());
  },
  handleConversationsLoad: function () {
    dispatch(loadConversations());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
