// == Import npm
import React from 'react';
import Nav from '/src/components/Nav';
import Home from '/src/components/Home';
import Login from '/src/components/Login';
import Footer from '/src/components/Footer';
// == Import

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Nav />
    <Home />
    <Login />
    <Footer />
  </div>
);

// == Export
export default App;
