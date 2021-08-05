import { connect } from 'react-redux';
import ViewProfilPage from '../../components/ViewProfilPage';

const mapStateToProps = (state, ownProps) => ({
  pseudo: state.user.pseudo,
  bio: state.user.description,
  city: state.user.city,
  zipcode: state.user.zipCode,
  picture: state.user.data.picture,
  userMangas: state.user.fullData.contact.manga,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfilPage);
