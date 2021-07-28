import { connect } from 'react-redux';

import ChatField from 'src/components/Chat/ChatField';
import { sendMessage, setNewMessage } from 'src/actions/chat';

const mapStateToprops = (state) => ({
  newMessage: state.chat.newMessage,
  chatId: state.chat.lastSingleChat.id,
});

const mapDispatchToProps = (dispatch) => ({
  manageSubmit: (id, content) => {
    dispatch(sendMessage(id, content));
  },
  setNewMessage: (newMessage) => {
    dispatch(setNewMessage(newMessage));
  },
});

export default connect(mapStateToprops, mapDispatchToProps)(ChatField);
