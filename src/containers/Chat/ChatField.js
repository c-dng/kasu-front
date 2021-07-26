import { connect } from 'react-redux';

import ChatField from 'src/components/Chat/ChatField';
import { sendMessage, setNewMessage } from 'src/actions/chat';

const mapStateToprops = (state) => ({
  newMessage: state.chat.newMessage,
  userId: state.chat.lastSingleChat.id,
});

const mapDispatchToProps = (dispatch) => ({
  manageSubmit: (id) => {
    dispatch(sendMessage(id));
  },
  setNewMessage: (newMessage) => {
    dispatch(setNewMessage(newMessage));
  },
});

export default connect(mapStateToprops, mapDispatchToProps)(ChatField);
