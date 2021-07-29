/* eslint-disable linebreak-style */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Redirect } from 'react-router-dom';
import { Form, Segment } from 'semantic-ui-react';
import './style.scss';

const SearchBar = ({
  // eslint-disable-next-line react/prop-types
  search, setSearch, manageSubmit, loading, searchResults,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    manageSubmit(search);
    // eslint-disable-next-line no-console
    console.log('search submit');
  };

  if (searchResults) {
    // return <Redirect push to="/rechercher/ville" />;
  }

  return (
    <div className="searchbar">
      <div className="searchbar-searchWrapper">
        <Segment className="searchbar-segment">
          <Form className="searchbar-form" onSubmit={handleSubmit}>
            <Form.Input
              className="searchbar-input"
              loading={loading}
              icon="search"
              iconPosition="left"
              fluid
              placeholder="Rechercher..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </Form>
        </Segment>
      </div>
    </div>
  );
};

export default SearchBar;
