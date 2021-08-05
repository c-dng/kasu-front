import { connect } from 'react-redux';

import Conversations from 'src/components/Conversations';
import {
  toggleHiddenBox, loadSingleChat,
} from '../../actions/chat';
import { loadConversations } from '../../actions/user';
import { redirectTo } from '../../actions/global';

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
});

export default connect(mapStateToProps, mapDispatchToProps)(Conversations);
