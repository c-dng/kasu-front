import { connect } from 'react-redux';

import ChatField from 'src/components/Chat/ChatField';
import { sendMessage, setNewMessage } from 'src/actions/chat';

const mapStateToprops = (state) => ({
  newMessage: state.chat.newMessage,
});

const mapDispatchToProps = (dispatch) => ({
  manageSubmit: () => {
    dispatch(sendMessage());
  },
  setNewMessage: (newMessage) => {
    dispatch(setNewMessage(newMessage));
  },
});

export default connect(mapStateToprops, mapDispatchToProps)(ChatField);
