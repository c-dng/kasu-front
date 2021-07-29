import { connect } from 'react-redux';

import App from 'src/components/App';
import { wsDisconnect, wsConnect } from 'src/actions/chat';
import { autoLoginUser } from '../../actions/user';
import { loadMangaDatabase } from '../../actions/manga';

const mapStateToProps = (state) => ({
  theme: state.global.theme,
  loading: state.global.loading,
  isLogged: state.user.logged,
  chatId: state.chat.lastSingleChat.id,
  mangaDatabase: state.manga.database,
  redirectTo: state.global.redirectLink,
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
}
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
