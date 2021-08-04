import { connect } from 'react-redux';
import Register from 'src/components/Register';
import {
  changePseudo,
  changePassword,
  changeConfirmPassword,
  changeCity,
  changeZipCode,
  changeAddress,
  changeFirstName,
  changeLastName,
  changeEmail,
  RegisterUser,
  submitForm,
} from '../../actions/user';
import { redirectTo } from '../../actions/global';

const mapStateToProps = (state) => ({
  zipCode: state.user.zipCode,
  email: state.user.email,
  address: state.user.address,
  firstName: state.user.firstName,
  lastName: state.user.lastName,
  pseudo: state.user.pseudo,
  city: state.user.city,
  password: state.user.password,
  confirmPassword: state.user.confirmPassword,
  errors: state.user.errors,
  status: state.user.status,
});

const mapDispatchToProps = (dispatch) => ({
  changePseudo: function (pseudo) {
    dispatch(changePseudo(pseudo));
  },
  changePassword: function (password) {
    dispatch(changePassword(password));
  },
  changeConfirmPassword: function (confirmPassword) {
    dispatch(changeConfirmPassword(confirmPassword));
  },
  changeEmail: function (email) {
    dispatch(changeEmail(email));
  },
  changeZipCode: function (zipCode) {
    dispatch(changeZipCode(zipCode));
  },
  changeAddress: function (address) {
    dispatch(changeAddress(address));
  },
  changeCity: function (city) {
    dispatch(changeCity(city));
  },
  changeFirstName: function (firstName) {
    dispatch(changeFirstName(firstName));
  },
  changeLastName: function (lastName) {
    dispatch(changeLastName(lastName));
  },
  handleRegistering: function () {
    dispatch(RegisterUser());
  },

  handleEmpty: function () {
    dispatch(submitForm());
  },

  redirectTo: function (link) {
    dispatch(redirectTo(link));
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
