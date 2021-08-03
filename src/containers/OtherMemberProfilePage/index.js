import { connect } from 'react-redux';
import OtherMemberProfilePage from '../../components/OtherMemberProfilePage';

const mapStateToProps = (state, ownProps) => ({
  pseudo: state.user.otherUserFullData.contact.pseudo,
  bio: state.user.otherUserFullData.contact.description,
  city: state.user.otherUserFullData.contact.city,
  zipcode: state.user.otherUserFullData.contact.zip_code,
  picture: state.user.otherUserFullData.contact.picture,
  otherUserMangas: state.user.otherUserFullData.contact.manga,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(OtherMemberProfilePage);