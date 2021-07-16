// == Import npm
import React from 'react';
import Nav from '/src/components/Nav';
import SearchbarHome from '/src/components/SearchbarHome';
import Footer from '/src/components/Footer';
// == Import

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Nav />
    <SearchbarHome/ >
    <Footer />
  </div>
);

// == Export
export default App;
