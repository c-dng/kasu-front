/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import { connect } from 'react-redux';

import SetProfilPage from 'src/components/SetProfilPage';

import {
  updateUser, changeDescription, changeEmail, changePassword, changeConfirmPasswordPassword, changeCity, changeAddress, changeZipCode, changeLastName, changeFirstName, changePseudo, changeHolidayMode, getUserInfos, eraseMessage,
} from '../../actions/user';

const mapStateToProps = (state, ownProps) => ({
  email: state.user.email,
  password: state.user.password,
  pseudo: state.user.pseudo,
  address: state.user.address,
  zipCode: state.user.zipCode,
  city: state.user.city,
  firstName: state.user.firstName,
  lastName: state.user.lastName,
  holiday_mode: state.user.holiday_mode,
  description: state.user.description,
  infos: state.user.infos,
  message: state.user.message,
  picture: state.user.data.picture,
  confirmPassword: state.user.confirmPassword
});

const mapDispatchToProps = (dispatch, ownProps) => ({

  handleUpdate: function () {
    dispatch(updateUser());
  },

  changeEmail: function (email) {
    dispatch(changeEmail(email));
  },

  changePassword: function (password) {
    dispatch(changePassword(password));
  },

  changeConfirmPasswordPassword: function (confirmPassword) {
    dispatch(changeConfirmPasswordPassword(confirmPassword));
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

  onSetProfilPageUnmount: () => {
    dispatch(eraseMessage());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SetProfilPage);
