// == Import npm
import React from 'react';

import Nav from 'src/components/Nav/';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import HomeSearchBar from 'src/components/HomeSearchBar';

// == Import

import './styles.scss';

// == Composant
const App = () => (
  <div className="app theme1">
    <Nav />
    <HomeSearchBar />
    <Home />
    <Footer />
  </div>
);

// == Export
export default App;
