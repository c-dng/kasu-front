// == Import npm
import React from 'react';

import Nav from 'src/components/Nav/';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import SearchBar from 'src/components/SearchBar';
import SearchResultsByLocation from 'src/components/SearchResultsByLocation';
import LoginForm from 'src/containers/LoginForm';
import Register from 'src/components/Register';
import ContactForm from 'src/components/ContactForm';
import Conversations from 'src/containers/Conversations';
import SetProfilPage from 'src/components/SetProfilPage';

// == Import

import './style.scss';
import { Route, Switch } from 'react-router-dom';
import NoAccountBox from '../NoAccountBox';
import AlreadyAccountBox from '../AlreadyAccountBox';

// == Composant
const App = () => (
  <div className="app theme1">

    <Nav />
    <Switch>
      <Route path="/" exact>
        <Home />
        <SearchBar />
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
        <SearchBar />
        <SearchResultsByLocation />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
