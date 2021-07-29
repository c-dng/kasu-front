/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import api from 'src/api';
import {
  LOGIN_USER, REGISTER_USER, saveUser, LOGOUT_USER, saveUserConversations, LOAD_CONVERSATIONS,
} from 'src/actions/user';
import { setLoadingFalse, setLoadingTrue } from '../actions/global';
import { wsDisconnect } from '../actions/chat';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN_USER: {
      const { pseudo, password } = store.getState().user;
      store.dispatch(setLoadingTrue());
      api
        .post('api/login_check', { username: pseudo, password })
        .then(
          (response) => {
            console.log(response);
            store.dispatch(setLoadingFalse());
            store.dispatch(saveUser(response.data));

            api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
            localStorage.setItem('token', response.data.token);
          },
        )
        .catch((error) => {
          store.dispatch(setLoadingFalse());
        })
        .then((response) => {
          const userId = store.getState().user.data.id;
          api
            .get(`api/v1/user/${userId}/chat`)
            .then(
              (response2) => {
                console.log(response2);

                store.dispatch(saveUserConversations(response2.data));
                store.dispatch(setLoadingFalse());
                // store.dispatch(wsConnect());
              },
            );
        });

      next(action);
      break;
    }

    case LOAD_CONVERSATIONS: {
      console.log('doing a load of conversations');
      const userId = store.getState().user.data.id;
      store.dispatch(setLoadingTrue());
      api
        .get(`api/v1/user/${userId}/chat`)
        .then(
          (response) => {
            console.log('great conversation loading', response);
            store.dispatch(setLoadingFalse());
            store.dispatch(saveUserConversations(response.data));
            store.dispatch(setLoadingFalse());
          },
        )
        .catch((error) => {
          console.log('load conversations went wrong', error);
          store.dispatch(setLoadingFalse());
        });
      next(action);
      break;
    }
    case LOGOUT_USER:
      localStorage.removeItem('token');
      delete api.defaults.headers.common.Authorization;
      store.dispatch(wsDisconnect());
      next(action);
      break;

    case REGISTER_USER: {
      const {
        pseudo,
        password,
        email,
        firstName,
        lastName,
        address,
        zipCode,
        city,
      } = store.getState().user;
      api
        .post('/api/v1/user/add', {
          email,
          firstname: firstName,
          lastname: lastName,
          pseudo,
          password,
          address,
          zip_code: zipCode,
          city,
        })
        .then(
          (response) => {
            console.log({
              email,
              firstname: firstName,
              lastname: lastName,
              pseudo,
              password,
              address,
              zip_code: zipCode,
              city,
            });
            console.log(response);
          },
        )
        .catch(
          (error) => {
            console.log({
              email,
              firstname: firstName,
              lastname: lastName,
              pseudo,
              password,
              address,
              zip_code: zipCode,
              city,
            });
            console.log(error);
          },
        );
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default authMiddleware;
