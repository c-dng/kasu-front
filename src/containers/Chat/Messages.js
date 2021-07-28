import { connect } from 'react-redux';

import Messages from 'src/components/Chat/Messages';

const mapStateToProps = (state) => ({
  messages: state.chat.lastSingleChat.messages,
  
});

export default connect(mapStateToProps)(Messages);
