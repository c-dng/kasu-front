/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
import { SEARCH_BY_ZIPCODE, saveSearchResult } from 'src/actions/search';
import api from 'src/api';
import { setLoadingFalse, setLoadingTrue } from '../actions/global';

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
    default:
      next(action);
  }
};

export default contactAdminMiddleware;