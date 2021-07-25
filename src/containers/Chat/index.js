import { connect } from 'react-redux';

import Chat from 'src/components/Chat';
import { wsConnect, wsDisconnect } from 'src/actions/chat';

const mapStateToprops = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  onChatLoad: () => {
    // console.log(dispatch);
    dispatch(wsConnect());
  },
  onChatUnmount: () => {
    dispatch(wsDisconnect());
  }
});

export default connect(mapStateToprops, mapDispatchToProps)(Chat);
