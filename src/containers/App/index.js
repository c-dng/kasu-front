import { connect } from 'react-redux';

import App from 'src/components/App';
import { wsDisconnect, wsConnect } from 'src/actions/chat';
import { autoLoginUser } from '../../actions/user';

const mapStateToProps = (state, ownProps) => ({
  theme: state.global.theme,
  loading: state.global.loading,
  isLogged: state.user.logged,
  chatId: state.chat.lastSingleChat.id,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  autoLogin: function () {
    dispatch(autoLoginUser());
  },
  onRefreshOrTabClosing: () => {
    dispatch(wsDisconnect());
  },
  onPageLoad: (id) => {
    dispatch(wsConnect(id));
  },
}
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
