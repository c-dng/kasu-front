import { connect } from 'react-redux';
import { getUserInfos } from '../../actions/user';
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
