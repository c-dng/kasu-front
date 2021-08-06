import React from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import {
  Card,
} from 'semantic-ui-react';
import './style.scss';
import SearchBar from 'src/containers/SearchBar';
import ResultCard from './ResultCard';

const SearchResultsByLocation = ({ users, handleLoadUser, createNewChat }) => (
  <div className="searchResultsByLocation">

    <div className="searchResultsByLocation-searchBarWrapper">
      <SearchBar />
    </div>

    <div className="searchResultsByLocation-banner-title">Résultats de votre recherche</div>

    <Card.Group className="searchResultsByLocation-cardGroup">
      <h4 className={users.length !== 0 ? 'searchResultsByLocation-subtitle--displayNone' : 'searchResultsByLocation-subtitle'}>Pas de résultats, essayez une autre localisation.</h4>

      {
        Object.values(users).map((user) => {
          const results = Object.values(user.mangas);
          return (
            results.map((result) => (
              <ResultCard
                key={uuid()}
                mangaName={result.mangaInfo.title}
                mangaPicture={result.mangaInfo.picture}
                mangaSynopsis={result.mangaInfo.synopsis}
                ownerName={user.user.pseudo}
                ownerPicture={user.user.picture}
                ownerCity={user.user.city}
                ownerZipCode={user.user.zip_code}
                mangaVolumes={result.userVolumes}
                ownerId={user.user.id}
                handleLoadUser={handleLoadUser}
                createNewChat={createNewChat}
              />
            ))
          );
        })
      }
    </Card.Group>
  </div>
);

SearchResultsByLocation.propTypes = {
  users: PropTypes.object.isRequired,
  handleLoadUser: PropTypes.func.isRequired,
  createNewChat: PropTypes.func.isRequired,
};

export default SearchResultsByLocation;
