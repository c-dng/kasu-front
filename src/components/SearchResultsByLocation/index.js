import React from 'react';
import {
  Card,
} from 'semantic-ui-react';
import './style.scss';
import SearchBar from 'src/containers/SearchBar';
import ResultCard from './ResultCard';

const SearchResultsByLocation = ({ users }) => {
  let open = true;
  console.log('en dehors du return');

  return (
    <div className="searchResultsByLocation">

      <div className="searchResultsByLocation-searchBarWrapper">
        <SearchBar />
      </div>
      <Card.Group className="searchResultsByLocation-cardGroup">
        {console.log('test')}
        {console.log(users)}
        {Object.entries(users).map((user) => (

          console.log(Object.entries(user))))}
        {

          // This is a way to iterate over an object items as if it were arrays
          // (therefore being able to use the ".map" declarative function)
          Object.entries(users).map((user) => (

            Object.entries(user).map((datas) => {
              let id;
              return <ResultCard />;
            })
          ))
        }
      </Card.Group>
    </div>
  );
};

export default SearchResultsByLocation;
