/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import { connect } from 'react-redux';
import ViewProfilPage from '../../components/ViewProfilPage';

const mapStateToProps = (state, ownProps) => ({
  pseudo: state.user.pseudo,
  bio: state.user.description,
  city: state.user.city,
  zipcode: state.user.zipCode,
  picture: state.user.data.picture,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfilPage);
