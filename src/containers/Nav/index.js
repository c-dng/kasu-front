import { connect } from 'react-redux';

import Nav from 'src/components/Nav';
import { changeTheme } from '../../actions/global';

const mapStateToProps = (state, ownProps) => ({
  navIconsColor: state.global.navIcons,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeWebsiteTheme: function (theme, navIconColor) {
    dispatch(changeTheme(theme, navIconColor));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
