import { connect } from 'react-redux';

import SetProfilPage from 'src/components/SetProfilPage';

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
});

export default connect(mapStateToProps, mapDispatchToProps)(SetProfilPage);
