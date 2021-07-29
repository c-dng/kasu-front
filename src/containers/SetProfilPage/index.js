import { connect } from 'react-redux';

import SetProfilPage from 'src/components/SetProfilPage';

import {
    updateUser, changeEmail, changePassword, changeCity, changeAddress, changeZipCode, changeLastName, changeFirstName, changePseudo, changeHolidayMode, getUserInfos } from '../../actions/user';

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
    bio: state.user.bio,
    infos: state.user.infos
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

    displayUserInfos: function () {
    dispatch(getUserInfos());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SetProfilPage);
