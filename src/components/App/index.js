// == Import npm
import React from 'react';

import Nav from 'src/components/Nav/';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import HomeSearchBar from 'src/components/HomeSearchBar';
import SearchResultsbyCP from 'src/components/SearchResultsbyCP'
import LoginForm from 'src/containers/LoginForm';
import Register from 'src/components/Register';
import ContactForm from 'src/components/ContactForm';

// == Import

import './styles.scss';
import { Route, Switch } from 'react-router-dom';
import NoAccountBox from '../NoAccountBox';
import Conversations from '../Conversations';

// == Composant
const App = () => (
  <div className="app theme1">

    <Nav />
    <Switch>
      <Route path="/" exact>
        <HomeSearchBar />
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
        <Footer />
      </Route>
      <Route path="/contact" exact>
        <ContactForm />
        <Footer />
      </Route>
      <Route path="/conversations" exact>
        <Conversations />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
