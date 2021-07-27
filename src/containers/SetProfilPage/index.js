import { connect } from 'react-redux';

import SetProfilPage from 'src/components/SetProfilPage';

import {
    changeEmail, changePassword, changeCity, changeAddress, changeZipCode, changeLastName, changeFirstName, changePseudo, changeHoliday_mode } from '../../actions/user';

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
    bio: state.user.bio
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    
    changeEmail: function (email) {
    dispatch(changeEmail(email));
    },

    changePassword: function (password) {
    dispatch(changePassword(password));
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

    changeHoliday_mode: function (holiday_mode) {
    dispatch(changeHoliday_mode(holiday_mode));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SetProfilPage);
