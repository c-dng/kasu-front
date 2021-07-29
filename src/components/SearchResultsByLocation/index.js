import React from 'react';
import {
  Card,
} from 'semantic-ui-react';
import './style.scss';
import SearchBar from 'src/containers/SearchBar';
import ResultCard from './ResultCard';

const SearchResultsByLocation = ({ users }) => {
  const open = true;
  console.log('en dehors du return');

  return (
    <div className="searchResultsByLocation">

      <div className="searchResultsByLocation-searchBarWrapper">
        <SearchBar />
      </div>
      <Card.Group className="searchResultsByLocation-cardGroup">
        {

          Object.values(users).map((user) => {
            const tar = Object.values(user.mangas);
            return (
              tar.map((manga) => (
                <ResultCard />
              ))
            );
          })
        }
      </Card.Group>
    </div>
  );
};

export default SearchResultsByLocation;
