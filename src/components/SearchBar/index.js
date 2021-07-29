import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Segment } from 'semantic-ui-react';
import './style.scss';

const SearchBar = ({

  search, setSearch, manageSubmit, loading, searchResults,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    manageSubmit(search);
    console.log('search submit');
  };
  // const history = useHistory();

  // useEffect(() => {
  //   console.log('searchbar useffect. search results : ', searchResults);
  //   if (searchResults !== {} && searchResults) {
  //     console.log('searchbar useffect. modified search results : ', searchResults);
  //     history.push('/rechercher/ville');
  //   }
  // }, [searchResults]);

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
