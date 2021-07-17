// == Import npm
import React from 'react';

import Nav from 'src/components/Nav/';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import HomeSearchBar from 'src/components/HomeSearchBar';
import LoginForm from 'src/components/LoginForm';
import Register from 'src/components/Register';

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
        <LoginForm />
      </Route>
      <Route path="/register" exact>
        <Register />
      </Route>
    </Switch>

    <Footer />

  </div>
);

// == Export
export default App;
