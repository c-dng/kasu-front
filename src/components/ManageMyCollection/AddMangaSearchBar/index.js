import React from 'react';
import { Form, Segment } from 'semantic-ui-react';
import './style.scss';
import PropTypes from 'prop-types';

const AddMangaSearchBar = ({
  setMangaSearch, manageSubmit, loading, mangaSearch,
}) => {
  // retrieves manga database from state
  // then filter it based on mangaSearch
  // then saves results in state
  const handleSubmit = (event) => {
    event.preventDefault();
    manageSubmit(mangaSearch);
  };

  return (
    <div className="addMangaSearchbar">
      <div className="addMangaSearchbar-searchWrapper">
        <Segment className="addMangaSearchbar-segment">
          <Form className="addMangaSearchbar-form" onSubmit={handleSubmit}>
            <Form.Input
              className="addMangaSearchbar-input"
              loading={loading}
              icon="search"
              iconPosition="left"
              fluid
              placeholder="Rechercher..."
              value={mangaSearch}
              onChange={(event) => setMangaSearch(event.target.value)}
            />
          </Form>
        </Segment>
      </div>
    </div>
  );
};
AddMangaSearchBar.propTypes = {
  setMangaSearch: PropTypes.func.isRequired,
  manageSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  mangaSearch: PropTypes.string.isRequired,
};

export default AddMangaSearchBar;
