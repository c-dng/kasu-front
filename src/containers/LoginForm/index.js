import { connect } from 'react-redux';

import LoginForm from 'src/components/LoginForm';
import {
  changePseudo, changePassword, loginUser, logoutUser,
} from '../../actions/user';

const mapStateToProps = (state) => ({

  pseudo: state.user.pseudo,
  password: state.user.password,
  isLogged: state.user.logged,

});

const mapDispatchToProps = (dispatch) => ({
  changePseudo: function (pseudo) {
    dispatch(changePseudo(pseudo));
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
