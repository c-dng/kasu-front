import React from 'react';
import { Search } from 'semantic-ui-react';
import './style.scss';

const SearchBar = () => (
  <div className="searchbar">
    <div className="searchbar-searchWrapper">
      <Search fluid />
    </div>
  </div>
);

export default SearchBar;
