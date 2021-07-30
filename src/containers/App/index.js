import { connect } from 'react-redux';

import App from 'src/components/App';
import { wsDisconnect, wsConnect } from 'src/actions/chat';
import { autoLoginUser, loadUserFullData } from '../../actions/user';
import { loadMangaDatabase } from '../../actions/manga';

const mapStateToProps = (state) => ({
  theme: state.global.theme,
  loading: state.global.loading,
  isLogged: state.user.logged,
  chatId: state.chat.lastSingleChat.id,
  mangaDatabase: state.manga.database,
  userFullData: state.user.fullData,
});

const mapDispatchToProps = (dispatch) => ({
  autoLogin: function () {
    dispatch(autoLoginUser());
  },
  onRefreshOrTabClosing: () => {
    dispatch(wsDisconnect());
  },
  onPageLoad: (id) => {
    dispatch(wsConnect(id));
  },
  loadMangaDatabase: () => {
    dispatch(loadMangaDatabase());
  },
  loadUserFullData: () => {
    dispatch(loadUserFullData());
  },
}
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
