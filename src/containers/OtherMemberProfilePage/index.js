import { connect } from 'react-redux';
import { createNewChat } from '../../actions/chat';
import OtherMemberProfilePage from '../../components/OtherMemberProfilePage';

const mapStateToProps = (state) => ({
  pseudo: state.user.otherUserFullData.contact.pseudo,
  bio: state.user.otherUserFullData.contact.description,
  city: state.user.otherUserFullData.contact.city,
  zipcode: state.user.otherUserFullData.contact.zip_code,
  picture: state.user.otherUserFullData.contact.picture,
  otherUserMangas: state.user.otherUserFullData.contact.manga,
  userId: state.user.otherUserFullData.contact.id,
});

const mapDispatchToProps = (dispatch) => ({
  createNewChat: function (id) {
    dispatch(createNewChat(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OtherMemberProfilePage);
