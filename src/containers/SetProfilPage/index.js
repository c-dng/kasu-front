import { connect } from 'react-redux';

import SetProfilPage from 'src/components/SetProfilPage';

import {
  getUserInfos, changeMessage, updateUser, changeDescription, changeEmail, changePassword, changeConfirmPassword, changeCity, changeAddress, changeZipCode, changeLastName, changeFirstName, changePseudo, changeHolidayMode, loadUserFullData, eraseMessage
} from '../../actions/user';

const mapStateToProps = (state, ownProps) => ({
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
  message: state.user.message,
  picture: state.user.data.picture,
  confirmPassword: state.user.confirmPassword,
  infos: state.user.infos
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeMessage: function (message) {
    dispatch(changeMessage(message));
  },

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

  displayUserInfos: function (infos) {
    dispatch(getUserInfos());
  }
  // onSetProfilPageUnmount: () => {
  //   dispatch(eraseMessage());
  // },
});

export default connect(mapStateToProps, mapDispatchToProps)(SetProfilPage);
