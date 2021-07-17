import React from 'react';
import { Search, Grid } from 'semantic-ui-react';
import './styles.scss';

const SearchbarHome = () => (
  <div className="searchbar">
    <Grid>
      <Grid.Column width={16}>
        <Search width={16} />
      </Grid.Column>
    </Grid>
  </div>
);

export default SearchbarHome;
