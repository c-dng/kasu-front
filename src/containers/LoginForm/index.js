import { connect } from 'react-redux';

import LoginForm from 'src/components/LoginForm';
import {
  changeEmail, changePassword, loginUser, logoutUser,
} from '../../actions/user';

const mapStateToProps = (state, ownProps) => ({

  email: state.user.email,
  password: state.user.password,
  isLogged: state.user.logged,

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeEmail: function (email) {
    dispatch(changeEmail(email));
  },
  changePassword: function (password) {
    dispatch(changePassword(password));
  },
  handleLogin: function () {
    dispatch(loginUser());
  },
  handleLogout: function () {
    dispatch(logoutUser());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
