import { connect } from 'react-redux';

import Chat from 'src/components/Chat';
import { wsConnect } from 'src/actions/chat';

const mapStateToprops = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  onChatLoad: () => {
    // console.log(dispatch);
    dispatch(wsConnect());
  },
});

export default connect(mapStateToprops, mapDispatchToProps)(Chat);
