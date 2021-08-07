import {
  UPDATE_USER,
  LOAD_USER_FULL_DATA,
  saveMessage,
  saveUserFullData,
  GET_USER_INFOS,
  LOAD_OTHER_USER_FULL_DATA,
  saveOtherUserFullData,
  saveUserInfos,
} from 'src/actions/user';
import api from 'src/api';
import { redirectTo, setLoadingFalse, setLoadingTrue } from '../actions/global';

const token = localStorage.getItem('token');
if (token) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const updateUser = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USER_INFOS: {
      const userId = store.getState().user.data.id;
      api
        .get(`api/v1/user/${userId}`)
        .then(
          (response) => {
            store.dispatch(saveUserInfos(response.data.contact));
          },
        )
        .catch(() => {
        });
      next(action);
      break;
    }
    case UPDATE_USER: {
      const {
        zipCode,
        address,
        city,
        lastName,
        firstName,
        pseudo,
        email,
        password,
        holiday_mode,
        description,
      } = store.getState().user;
      const userId = store.getState().user.data.id;
      store.dispatch(setLoadingTrue());
      api
        .patch(`api/v1/user/${userId}/update`, {
          zipcode: zipCode,
          address,
          city,
          lastname: lastName,
          firstname: firstName,
          pseudo,
          email,
          password,
          holiday_mode,
          description,
        })
        .then(
          (response) => {
            store.dispatch(saveMessage(response.data));
            store.dispatch(setLoadingFalse());
          },
        )
        .then(
          () => {
            store.dispatch(redirectTo('/profil/mon-profil'));
          },
        )
        .catch(() => {
          store.dispatch(setLoadingFalse());
        });
      next(action);
      break;
    }
    case LOAD_USER_FULL_DATA: {
      store.dispatch(setLoadingTrue());
      const userId = store.getState().user.data.id;
      api
        .get(`api/v1/user/${userId}`)
        .then(
          (response) => {
            store.dispatch(saveUserFullData(response.data));
            store.dispatch(saveUserInfos(response.data.contact));
            store.dispatch(setLoadingFalse());
          },
        )
        .catch(() => {
          store.dispatch(setLoadingFalse());
        });
      next(action);
      break;
    }
    case LOAD_OTHER_USER_FULL_DATA: {
      store.dispatch(setLoadingTrue());
      const otherUserId = action.id;
      api
        .get(`api/v1/user/${otherUserId}`)
        .then(
          (response) => {
            store.dispatch(saveOtherUserFullData(response.data));
          },
        )
        .then(() => {
          store.dispatch(redirectTo(`/profil/${otherUserId}`));
        })
        .catch(() => {
        })
        .finally(() => {
          store.dispatch(setLoadingFalse());
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default updateUser;
