import React from 'react';
import SearchBar from '../../SearchBar';

const SearchExplained = () => (
  <div className="searchExplained">
    <h2 className="searchExplained-title">Découvrez les collections près de chez vous</h2>
    <p className="searchExplained-description">
      Cherchez les collections disponibles près de chez vous, entrez en contact
      et définissez ensemble vos conditions d’échange.
      Pour commencer, tapez le nom de votre ville dans la barre de recherche.
      Bonne lecture !
    </p>
    <div className="searchExplained-searchWrapper">
      <SearchBar className="searchExplained-searchBar" />
    </div>
  </div>
);

export default SearchExplained;
