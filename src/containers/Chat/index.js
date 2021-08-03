import { connect } from 'react-redux';

import Chat from 'src/components/Chat';

const mapStateToprops = (state) => ({
  isLogged: state.user.logged,
  picture:state.user.data.picture,
  users: state.chat.lastSingleChat.users,
  userId:state.user.data.id 
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToprops, mapDispatchToProps)(Chat);
