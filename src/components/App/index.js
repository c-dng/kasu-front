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
  useEffect(() => {
    appInit();
    return appDestruct;
  }, []);

  const handleOnClose = () => {
    if (isLogged) {
      onRefreshOrTabClosing();
    }
  };

  useBeforeunload(() => {
    handleOnClose();
  });

  const dispatch = useDispatch();

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!mangaDatabase && isLogged && token) {
      console.log('mangaDatabase useEffect test', { mangaDatabase, token });
      loadMangaDatabase();
    }
    if (!userFullData && isLogged && token) {
      console.log('userFullData useEffect test', { userFullData });
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

  const history = useHistory();

  useEffect(() => {
    console.log('App redirect useEffect', redirectLink);
    const redirectToLink = redirectLink;
    if (redirectToLink) {
      dispatch(redirectTo(false));
      console.log('redirecting to ', redirectToLink);
      history.push(redirectToLink);
    }
  }, [redirectLink]);

  const location = useLocation();
  console.log(location.pathname);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (loading) {
    return <Loading />;
  }

  return (
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
        <Route path="/conversations" exact>
          <Conversations />
        </Route>
        <Route path="/conversation/:id" exact>
          <Chat />
        </Route>
        <Route path="/rechercher/ville" exact>
          <SearchResultsByLocation />
          <Footer />
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
        <Route path="/team" exact>
          <Team />
          <Footer />
        </Route>
        <Route path="/mentions-legales" exact>
          <LegalNotice />
          <Footer />
        </Route>
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
};

App.defaultProps = {
  loading: false,
};

// == Export
export default App;
