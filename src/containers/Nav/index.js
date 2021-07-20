import { connect } from 'react-redux';

import Nav from 'src/components/Nav';
import { changeTheme } from '../../actions/global';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeWebsiteTheme: function (theme) {
    dispatch(changeTheme(theme));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
