import { connect } from 'react-redux';

import Conversations from 'src/components/Conversations';
import {
  toggleHiddenBox, loadSingleChat,
} from '../../actions/chat';
import { loadConversations, loadOtherUserFullData } from '../../actions/user';
import { changeTheme, redirectTo } from '../../actions/global';

const mapStateToProps = (state) => ({
  isBoxHidden: state.chat.isBoxHidden,
  conversations: state.user.conversations,
  userPseudo: state.user.data.pseudo,
  userId: state.user.data.id,
});

const mapDispatchToProps = (dispatch) => ({
  handleHiddenBoxDisplay: function () {
    dispatch(toggleHiddenBox());
  },
  loadSingleChat: function (id) {
    dispatch(loadSingleChat(id));
  },
  handleConversationsLoad: function () {
    dispatch(loadConversations());
  },
  redirectTo: function (link) {
    dispatch(redirectTo(link));
  },
  changeWebsiteTheme: function (theme, navIconColor) {
    dispatch(changeTheme(theme, navIconColor));
  },
  loadOtherUserFullData: function (id) {
    dispatch(loadOtherUserFullData(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Conversations);
