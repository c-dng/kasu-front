// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Nav from 'src/containers/Nav';
import Home from 'src/containers/Home';
import Footer from 'src/components/Footer';
import SearchResultsByLocation from 'src/containers/SearchResultsByLocation';
import LoginForm from 'src/containers/LoginForm';
import Register from 'src/containers/Register';
import ContactForm from 'src/containers/ContactForm';
import Conversations from 'src/containers/Conversations';
import SetProfilPage from 'src/containers/SetProfilPage';
import ManageMyCollection from 'src/containers/ManageMyCollection';
import ViewProfilPage from 'src/containers/ViewProfilPage';
import Team from 'src/components/Team';
import LegalNotice from 'src/components/LegalNotice';
import Chat from 'src/containers/Chat';
import Error from 'src/components/Error';
import OtherMemberProfilePage from 'src/containers/OtherMemberProfilePage';
// == Import

import './style.scss';
import {
  Route, Switch, useHistory, useLocation,
} from 'react-router-dom';
import { useBeforeunload } from 'react-beforeunload';
import { useDispatch } from 'react-redux';
import Loading from './Loading';
import { redirectTo } from '../../actions/global';

// == Composant
const App = ({
  theme,
  onRefreshOrTabClosing,
  isLogged,
  loading,
  mangaDatabase,
  loadMangaDatabase,
  loadUserFullData,
  userFullData,
  redirectLink,
  carouselSearchData,
  loadCarouselData,
  loadCarouselDynamicData,
  appInit,
  appDestruct,
}) => {
  // appInit connect the websocket on app mount, appDestruct disconnect the socket on app unmount.
  useEffect(() => {
    appInit();
    return appDestruct;
  }, []);

  // onRefreshOrTabClosing disconnect the websocket.
  // duplicate of appDestruct.
  // Didn't have time to test its usefullness. Try to prefer appInit/appDestruct
  const handleOnClose = () => {
    if (isLogged) {
      onRefreshOrTabClosing();
    }
  };

  // hook via library, that does an action just before tab refresh or close.
  useBeforeunload(() => {
    handleOnClose();
  });
  // Dispatching in a component. Use with caution
  const dispatch = useDispatch();

  // jwt token
  const token = localStorage.getItem('token');

  // multi useEffect to load manga database, connected user data, default or dynamic carousel data
  // based on specific conditions
  useEffect(() => {
    if (!mangaDatabase && isLogged && token) {
      loadMangaDatabase();
    }
    if (!userFullData && isLogged && token) {
      loadUserFullData();
    }

    if (!carouselSearchData) {
      loadCarouselData();
    }
    if (isLogged && userFullData) {
      const userZipCode = userFullData.contact.zip_code;
      loadCarouselDynamicData(userZipCode);
    }
  }, [isLogged, mangaDatabase, token, userFullData], carouselSearchData);

  // history hook to perform redirections
  const history = useHistory();
  // everytime redirectLink is modified due to the REDIRECT action (action creator = redirectTo)
  // the url is pushed by the new link
  useEffect(() => {
    const redirectToLink = redirectLink;
    if (redirectToLink) {
      dispatch(redirectTo(false));
      history.push(redirectToLink);
    }
  }, [redirectLink]);

  // performs an automatic top of the page scroll on url change
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // if the loading state is passed to true, the app renders the loading animation page
  // in order to wait for asynchronous task to get done appropriately.
  if (loading) {
    return <Loading />;
  }

  return (
    // the theme variable is used for theming is every scss files
    <div className={`app ${theme}`}>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home userFullData={userFullData} />
          <Footer />
        </Route>
        <Route path="/login" exact>
          <LoginForm />
          <Footer />
        </Route>
        <Route path="/register" exact>
          <Register />
          <Footer />
        </Route>
        <Route path="/contact" exact>
          <ContactForm />
          <Footer />
        </Route>
        <Route path="/rechercher/ville" exact>
          <SearchResultsByLocation />
          <Footer />
        </Route>
        <Route path="/team" exact>
          <Team />
          <Footer />
        </Route>
        <Route path="/mentions-legales" exact>
          <LegalNotice />
          <Footer />
        </Route>
        {isLogged && (
          <>
            <Route path="/conversations" exact>
              <Conversations />
            </Route>
            <Route path="/conversation/:id" exact>
              <Chat />
            </Route>
            <Route path="/profil/collection" exact>
              <ManageMyCollection />
              <Footer />
            </Route>
            <Route path="/profil/mon-profil" exact>
              <ViewProfilPage />
              <Footer />
            </Route>
            <Route path="/profil/mes-infos" exact>
              <SetProfilPage />
              <Footer />
            </Route>
            <Route path="/profil/:id">
              <OtherMemberProfilePage />
              <Footer />
            </Route>
          </>
        )}
        <Route path="*">
          <Error />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
};

App.propTypes = {
  theme: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  isLogged: PropTypes.bool.isRequired,
  onRefreshOrTabClosing: PropTypes.func.isRequired,
  loadCarouselData: PropTypes.func.isRequired,
  loadCarouselDynamicData: PropTypes.func.isRequired,
  loadMangaDatabase: PropTypes.func.isRequired,
  appInit: PropTypes.func.isRequired,
  appDestruct: PropTypes.func.isRequired,
  loadUserFullData: PropTypes.func.isRequired,
  redirectLink: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  mangaDatabase: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  userFullData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  carouselSearchData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};

App.defaultProps = {
  loading: false,
  redirectLink: '',
  mangaDatabase: '',
  userFullData: {},
  carouselSearchData: {},
};

// == Export
export default App;
