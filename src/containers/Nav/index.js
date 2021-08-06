import { connect } from 'react-redux';
import Nav from 'src/components/Nav';
import { changeTheme, logoutGlobal } from '../../actions/global';
import { getUserInfos, loadConversations, logoutUser } from '../../actions/user';

const mapStateToProps = (state) => ({
  navIconsColor: state.global.navIcons,
  isLogged: state.user.logged,
  picture: state.user.data.picture,
});

const mapDispatchToProps = (dispatch) => ({
  changeWebsiteTheme: function (theme, navIconColor) {
    dispatch(changeTheme(theme, navIconColor));
  },
  disconnectUser: function () {
    dispatch(logoutUser());
    dispatch(logoutGlobal());
  },
  handleConversationsLoad: function () {
    dispatch(loadConversations());
  },
  loadUserInfos: function () {
    dispatch(getUserInfos());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
