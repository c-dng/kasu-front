import { useHistory } from 'react-router-dom';
import { SEARCH_BY_ZIPCODE, saveSearchResult } from 'src/actions/search';
import api from 'src/api';
import { redirectTo, setLoadingFalse, setLoadingTrue } from '../actions/global';
import { saveMangaSearch, SEARCH_BY_MANGA_NAME } from '../actions/search';
import React from 'react';
const token = localStorage.getItem('token');
if (token) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const contactAdminMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEARCH_BY_ZIPCODE: {
      const { zipcode } = action;
      store.dispatch(setLoadingTrue());
      api
        .get(`/api/v1/search/${zipcode}`)
        .then(
          (response) => {
            console.log('la recherche par zip code a marché', response.data);
            store.dispatch(saveSearchResult(response.data));

            store.dispatch(setLoadingFalse());
          },
        )
        .catch(
          (error) => {
            store.dispatch(setLoadingFalse());
            console.log('la recherche par zip code a planté', error);
          },
        );
      next(action);
      break;
    }
    case SEARCH_BY_MANGA_NAME: {
      const { mangaDatabase } = store.getState().manga;
      const mangaDatabaseAsAnArray = Object.values(mangaDatabase);
      console.log('manga Database as an array', mangaDatabaseAsAnArray);
      console.log('example of a manga title', mangaDatabaseAsAnArray[0].title);
      const mangaSearch = action.mangaName;
      const filtered = mangaDatabaseAsAnArray.filter((manga) => {
        console.log(mangaSearch);
        return manga.title.toLowerCase().includes(mangaSearch.toLowerCase());
      });
      console.log('filter: ', filtered);
      store.dispatch(saveMangaSearch(filtered));
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default contactAdminMiddleware;