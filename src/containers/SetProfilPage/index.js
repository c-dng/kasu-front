import { connect } from 'react-redux';
import SetProfilPage from 'src/components/SetProfilPage';
import {
  getUserInfos,
  updateUser,
  changeDescription,
  changeEmail,
  changePassword,
  changeConfirmPassword,
  changeCity,
  changeAddress,
  changeZipCode,
  changeLastName,
  changeFirstName,
  changePseudo,
  changeHolidayMode,
} from '../../actions/user';
import { redirectTo } from '../../actions/global';

const mapStateToProps = (state) => ({
  pseudo: state.user.pseudo,
  email: state.user.email,
  password: state.user.password,
  address: state.user.address,
  zipCode: state.user.zipCode,
  city: state.user.city,
  firstName: state.user.firstName,
  lastName: state.user.lastName,
  holiday_mode: state.user.holiday_mode,
  description: state.user.description,
  picture: state.user.data.picture,
  confirmPassword: state.user.confirmPassword,
});

const mapDispatchToProps = (dispatch) => ({

  handleUpdate: function () {
    dispatch(updateUser());
  },

  changeEmail: function (email) {
    dispatch(changeEmail(email));
  },

  changePassword: function (password) {
    dispatch(changePassword(password));
  },

  changeConfirmPassword: function (confirmPassword) {
    dispatch(changeConfirmPassword(confirmPassword));
  },

  changeCity: function (city) {
    dispatch(changeCity(city));
  },

  changeAddress: function (address) {
    dispatch(changeAddress(address));
  },

  changeZipCode: function (zipCode) {
    dispatch(changeZipCode(zipCode));
  },

  changeLastName: function (lastName) {
    dispatch(changeLastName(lastName));
  },

  changeFirstName: function (firstName) {
    dispatch(changeFirstName(firstName));
  },

  changePseudo: function (pseudo) {
    dispatch(changePseudo(pseudo));
  },

  changeHolidayMode: function (holiday_mode) {
    dispatch(changeHolidayMode(holiday_mode));
  },

  changeDescription: function (description) {
    dispatch(changeDescription(description));
  },

  displayUserInfos: function () {
    dispatch(getUserInfos());
  },

  redirectTo: function (link) {
    dispatch(redirectTo(link));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(SetProfilPage);
