// == Import npm
import React from 'react';

import Nav from 'src/components/Nav/';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import HomeSearchBar from 'src/components/HomeSearchBar';
import Login from 'src/components/Login';

// == Import

import './styles.scss';
import { Route, Switch } from 'react-router-dom';

// == Composant
const App = () => (
  <div className="app theme1">

    <Nav />

    <Switch>
      <Route path="/" exact>
        <HomeSearchBar />
        <Home />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
    </Switch>

    <Footer />

  </div>
);

// == Export
export default App;
