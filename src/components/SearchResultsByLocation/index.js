import React from 'react';
import {
  Card,
} from 'semantic-ui-react';
import './style.scss';
import SearchBar from 'src/containers/SearchBar';
import ResultCard from './ResultCard';

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
              results.map((result) => (
                <ResultCard
                  mangaName={result.mangaInfo.title}
                  mangaPicture={result.mangaInfo.picture}
                  mangaSynopsis={result.mangaInfo.synopsis}
                  ownerName={user.user.pseudo}
                  ownerPicture={user.user.picture}
                  ownerCity={user.user.city}
                  ownerZipCode={user.user.zip_code}
                  mangaVolumes={result.userVolumes}
                  ownerId={user.user.id}
                />
              ))
            );
          })
        }
      </Card.Group>
    </div>
  );
};

export default SearchResultsByLocation;
