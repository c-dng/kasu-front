import { connect } from 'react-redux';

import Conversations from 'src/components/Conversations';
import {
  toggleHiddenBox, loadSingleChat,
} from '../../actions/chat';

const mapStateToProps = (state, ownProps) => ({
  isBoxHidden: state.chat.isBoxHidden,
  conversations: state.user.conversations,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleHiddenBoxDisplay: function () {
    dispatch(toggleHiddenBox());
  },
  loadSingleChat: function (id) {
    dispatch(loadSingleChat(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Conversations);
