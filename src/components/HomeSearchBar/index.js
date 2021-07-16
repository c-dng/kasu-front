import React from 'react';
import { Search, Grid } from 'semantic-ui-react'
import './style.scss';

const HomeSearchBar = () => (
  <div className="homesearchbar">
    <Grid>
      <Grid.Column width={16}>
        <Search width={16} />
      </Grid.Column>
    </Grid>
  </div>
);

export default HomeSearchBar;
