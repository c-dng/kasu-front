import { connect } from 'react-redux';

import Conversations from 'src/components/Conversations';
import {
  toggleHiddenBox,
} from '../../actions/chat';

const mapStateToProps = (state, ownProps) => ({
  isBoxHidden: state.chat.isBoxHidden,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleHiddenBoxDisplay: function () {
    dispatch(toggleHiddenBox());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Conversations);
