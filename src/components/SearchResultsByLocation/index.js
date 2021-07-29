/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
import React from 'react';
import {
  Card,
} from 'semantic-ui-react';
import './style.scss';
import SearchBar from 'src/containers/SearchBar';
import ResultCard from './ResultCard';

// eslint-disable-next-line react/prop-types
const SearchResultsByLocation = ({ users }) => {
  console.log('en dehors du return');

  return (
    <div className="searchResultsByLocation">

      <div className="searchResultsByLocation-searchBarWrapper">
        <SearchBar />
      </div>
      <Card.Group className="searchResultsByLocation-cardGroup">
        {console.log(Object.entries(users))}
        {
          Object.values(users).map((user) => {
            const results = Object.values(user.mangas);
            return (
              results.map((result) => {
                console.log(result);
                const userId = user.userId;
                return <ResultCard mangaName={result.mangaInfo.title} mangaPicture={result.mangaInfo.picture} mangaSynopsis={result.mangaInfo.synopsis} />;
              })
            );
          })
        }
      </Card.Group>
    </div>
  );
};

export default SearchResultsByLocation;
