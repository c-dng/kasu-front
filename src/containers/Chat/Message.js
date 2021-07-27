import { connect } from 'react-redux';
import Message from '../../components/Chat/Messages/Message';

const mapStateToProps = (state, ownProps) => {
  const { messageUserId } = ownProps;
  return {
    isMine: state.user.data.id === messageUserId,
  };
};

export default connect(mapStateToProps)(Message);
