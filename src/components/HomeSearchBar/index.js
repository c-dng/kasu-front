import React from 'react';
import { Search, Grid } from 'semantic-ui-react';
import './style.scss';

const HomeSearchBar = () => (
  <div className="homesearchbar">
    <div className="homesearchbar-searchWrapper">
      <Search fluid/>
    </div>
  </div>
);

export default HomeSearchBar;
