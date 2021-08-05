import { connect } from 'react-redux';

import Chat from 'src/components/Chat';
import { redirectTo } from '../../actions/global';
import { loadOtherUserFullData } from '../../actions/user';

const mapStateToprops = (state) => ({
  isLogged: state.user.logged,
  picture: state.user.data.picture,
  users: state.chat.lastSingleChat.users,
  userId: state.user.data.id,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleLoadUser: function (id) {
    dispatch(loadOtherUserFullData(id));
  },
  redirectTo: function (link) {
    dispatch(redirectTo(link));
  },
});

export default connect(mapStateToprops, mapDispatchToProps)(Chat);
