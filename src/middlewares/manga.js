import api from 'src/api';
import { setLoadingFalse, setLoadingTrue } from '../actions/global';
import {
  ADD_OR_REMOVE_VOLUMES,
  ADD_TO_MY_COLLECTION,
  DELETE_MANGA,
  LOAD_MANGA_DATABASE,
  MODIFY_VOLUME_AVAILABILITY,
  saveMangaDatabase,
} from '../actions/manga';
import { loadUserFullData } from '../actions/user';

const token = localStorage.getItem('token');
if (token) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const mangaMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_MANGA_DATABASE: {
      store.dispatch(setLoadingTrue());
      api.get('/api/v1/manga')
        .then((response) => {
          store.dispatch(saveMangaDatabase(response.data));
          store.dispatch(setLoadingFalse());
        })
        .catch(
          () => {
            store.dispatch(setLoadingFalse());
          },
        );
      next(action);
      break;
    }
    case ADD_TO_MY_COLLECTION: {
      const userId = store.getState().user.data.id;
      store.dispatch(setLoadingTrue());
      api.post(`api/v1/user/${userId}/manga`, { title: action.mangaTitle, volumes: action.volumes })
        .then(() => {
        })
        .then(() => {
          store.dispatch(loadUserFullData());
        })
        .catch(
          () => {
          },
        )
        .finally(() => {
          store.dispatch(setLoadingFalse());
        });
      next(action);
      break;
    }
    case MODIFY_VOLUME_AVAILABILITY: {
      const userId = store.getState().user.data.id;
      const { mangaId } = action;
      store.dispatch(setLoadingTrue());
      api.put(`api/v1/user/${userId}/manga/${mangaId}/availability`, { volumes: action.volumeAvailability })
        .then(() => {
        })
        .then(() => {
          store.dispatch(loadUserFullData());
        })
        .catch(
          () => {
          },
        )
        .finally(() => {
          store.dispatch(setLoadingFalse());
        });
      next(action);
      break;
    }
    case ADD_OR_REMOVE_VOLUMES: {
      const userId = store.getState().user.data.id;
      const { mangaId } = action;
      store.dispatch(setLoadingTrue());
      api.put(`api/v1/user/${userId}/manga/${mangaId}`, { volumes: action.volumePossessed })
        .then(() => {
        })
        .then(() => {
          store.dispatch(loadUserFullData());
        })
        .catch(
          () => {
          },
        )
        .finally(() => {
          store.dispatch(setLoadingFalse());
        });
      next(action);
      break;
    }
    case DELETE_MANGA: {
      const userId = store.getState().user.data.id;
      const { mangaId } = action;
      store.dispatch(setLoadingTrue());
      api.delete(`api/v1/user/${userId}/manga/${mangaId}`)
        .then(() => {
        })
        .then(() => {
          store.dispatch(loadUserFullData());
        })
        .catch(
          () => {
          },
        )
        .finally(() => {
          store.dispatch(setLoadingFalse());
        })
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default mangaMiddleware;
