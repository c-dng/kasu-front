import { connect } from 'react-redux';
import Message from '../../components/Chat/Messages/Message';

;

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);

  return {
    isMine: state.user.pseudo === ownProps.author,
  };
};

export default connect(mapStateToProps)(Message);
