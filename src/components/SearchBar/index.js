import React from 'react';
import PropTypes from 'prop-types';
import { Form, Segment } from 'semantic-ui-react';
import './style.scss';

const SearchBar = ({
  search, setSearch, manageSubmit, loading,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    manageSubmit(search);
  };

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

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  manageSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SearchBar;
