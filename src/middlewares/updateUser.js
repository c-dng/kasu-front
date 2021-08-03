import {
  UPDATE_USER, LOAD_USER_FULL_DATA, saveMessage, saveUserFullData,
} from 'src/actions/user';
import api from 'src/api';
import { redirectTo, setLoadingFalse, setLoadingTrue } from '../actions/global';
import { GET_USER_INFOS, LOAD_OTHER_USER_FULL_DATA, saveOtherUserFullData, saveUserInfos } from '../actions/user';

const token = localStorage.getItem('token');
if (token) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const updateUser = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USER_INFOS: {
      // store.dispatch(setLoadingTrue());
      const userId = store.getState().user.data.id;
      api
        .get(`api/v1/user/${userId}`)
        .then(
          (response) => {
            console.log('get user infos succeeded', response.data.contact);
            store.dispatch(saveUserInfos(response.data.contact));
            // store.dispatch(setLoadingFalse());
          },
        )
        .catch((error) => {
          // store.dispatch(setLoadingFalse());
          console.log('get user infos failed', error);
        });
      next(action);
      break;
    }
    case UPDATE_USER: {
      const {
        zipCode, address, city, lastName, firstName, pseudo, email, password, holiday_mode, description,
      } = store.getState().user;
      const userId = store.getState().user.data.id;
      store.dispatch(setLoadingTrue());
      api
        .patch(`api/v1/user/${userId}/update`, {
          zipcode: zipCode, address, city, lastname: lastName, firstname: firstName, pseudo, email, password, holiday_mode, description,
        })
        .then(
          (response) => {
            console.log('update user infos succeeded', response.data.contact);
            store.dispatch(saveMessage(response.data));
            store.dispatch(setLoadingFalse());
          },
        )
        .then(
          (response) => {
            console.log('setting redirectTo to /profil/mon-profil');
            store.dispatch(redirectTo('/profil/mon-profil'));
          },
        )
        .catch((error) => {
          store.dispatch(setLoadingFalse());
          console.log('update user infos failed', error);
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
            console.log('get full user infos succeeded', response.data);
            store.dispatch(saveUserFullData(response.data));
            console.log('INFOS POUR SET PROFIL PAGE : ', response.data.contact);
            store.dispatch(saveUserInfos(response.data.contact));
            store.dispatch(setLoadingFalse());
          },
        )
        .catch((error) => {
          store.dispatch(setLoadingFalse());
          console.log('get full user infos failed', error);
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
            console.log('get full other user infos succeeded', response.data);
            store.dispatch(saveOtherUserFullData(response.data));
          },
        )
        .then((response) => {
          console.log('setting redirectTo to other user profile page');
          store.dispatch(redirectTo(`profil/${otherUserId}`));
        })
        .catch((error) => {
          console.log('get full other user infos failed', error);
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
