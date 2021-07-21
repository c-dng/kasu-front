// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'src/containers/Nav/';
import Home from 'src/containers/Home';
import Footer from 'src/components/Footer';
import SearchResultsByLocation from 'src/components/SearchResultsByLocation';
import LoginForm from 'src/containers/LoginForm';
import Register from 'src/components/Register';
import ContactForm from 'src/components/ContactForm';
import Conversations from 'src/containers/Conversations';
import SetProfilPage from 'src/components/SetProfilPage';
import ManageMyCollection from 'src/components/ManageMyCollection';
import ViewProfilPage from 'src/components/ViewProfilPage';
import Team from 'src/components/Team';
import LegalNotice from 'src/components/LegalNotice';

// == Import

import './style.scss';
import { Route, Switch } from 'react-router-dom';
import NoAccountBox from '../NoAccountBox';
import AlreadyAccountBox from '../AlreadyAccountBox';


// == Composant
const App = ({ theme, autoLogin }) => {
  const token = localStorage.getItem('token');
  if (token) {
    autoLogin();
  }

  return (
    <div className={`app ${theme}`}>

      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
          <Footer />
        </Route>
        <Route path="/login" exact>
          <LoginForm />
          <NoAccountBox />
          <Footer />
        </Route>
        <Route path="/register" exact>
          <Register />
          <AlreadyAccountBox />
          <Footer />
        </Route>
        <Route path="/contact" exact>
          <ContactForm />
          <Footer />
        </Route>
        <Route path="/conversations" exact>
          <Conversations />
        </Route>
        <Route path="/rechercher/ville" exact>
          <SearchResultsByLocation />
          <Footer />
        </Route>
        <Route path="/profil/id" exact>
          <SetProfilPage />
          <Footer />
        </Route>
        <Route path="/profil/collection" exact>
          <ManageMyCollection />
          <Footer />
        </Route>
        <Route path="/profil/mes-infos" exact>
          <ViewProfilPage />
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
      </Switch>
    </div>
  );
};

App.propTypes = {
  theme: PropTypes.string.isRequired,
  autoLogin: PropTypes.func.isRequired,
};

// == Export
export default App;
