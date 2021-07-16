// == Import npm
import React from 'react';
import Nav from '/src/components/Nav';
import SearchbarHome from '/src/components/SearchbarHome';
import Home from '/src/components/Home';
import Footer from '/src/components/Footer';

// == Import

import './styles.scss';

// == Composant
const App = () => (
  <div className="app theme1">
    <Nav />
    <SearchbarHome/ >
    <Home />
    <Footer />
  </div>
);

// == Export
export default App;
