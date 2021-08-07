import { connect } from 'react-redux';

import App from 'src/components/App';
import { wsDisconnect } from 'src/actions/chat';
import { autoLoginUser, loadUserFullData } from '../../actions/user';
import { loadMangaDatabase } from '../../actions/manga';
import { loadCarouselData, loadCarouselDynamicData } from '../../actions/search';
import { appInit, appDestruct } from '../../actions/global';

const mapStateToProps = (state) => ({
  theme: state.global.theme,
  loading: state.global.loading,
  isLogged: state.user.logged,
  chatId: state.chat.lastSingleChat.id,
  mangaDatabase: state.manga.database,
  userFullData: state.user.fullData,
  redirectLink: state.global.redirectLink,
  carouselSearchData: state.search.carouselSearchData,
});

const mapDispatchToProps = (dispatch) => ({
  autoLogin: function () {
    dispatch(autoLoginUser());
  },
  onRefreshOrTabClosing: () => {
    dispatch(wsDisconnect());
  },
  loadMangaDatabase: () => {
    dispatch(loadMangaDatabase());
  },
  loadUserFullData: () => {
    dispatch(loadUserFullData());
  },
  loadCarouselData: () => {
    dispatch(loadCarouselData());
  },
  loadCarouselDynamicData: (userZipCode) => {
    dispatch(loadCarouselDynamicData(userZipCode));
  },
  appInit: () => {
    dispatch(appInit());
  },
  appDestruct: () => {
    dispatch(appDestruct());
  },
}
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
