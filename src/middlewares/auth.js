import api from 'src/api';
import {
  LOGIN_USER,
  REGISTER_USER,
  saveUser,
  LOGOUT_USER,
  saveUserConversations,
  LOAD_CONVERSATIONS,
  saveErrors,
  submitFormRegister,
} from 'src/actions/user';
import {
  appInit, setLoadingFalse, setLoadingTrue, redirectTo,
} from '../actions/global';
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
            store.dispatch(saveUser(response.data));
            api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
            localStorage.setItem('token', response.data.token);
          },
        )
        .catch(() => {
        })
        .then(() => {
          const userId = store.getState().user.data.id;
          api
            .get(`api/v1/user/${userId}/chat`)
            .then(
              (response2) => {
                store.dispatch(saveUserConversations(response2.data));
              },
            );
        })
        .then(() => {
          store.dispatch(appInit());
        })
        .finally(() => {
          store.dispatch(setLoadingFalse());
        });

      next(action);
      break;
    }

    case LOAD_CONVERSATIONS: {
      const userId = store.getState().user.data.id;
      store.dispatch(setLoadingTrue());
      api
        .get(`api/v1/user/${userId}/chat`)
        .then(
          (response) => {
            store.dispatch(setLoadingFalse());
            store.dispatch(saveUserConversations(response.data));
            store.dispatch(setLoadingFalse());
          },
        )
        .catch(() => {
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
      store.dispatch(setLoadingTrue());
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
          () => {
            store.dispatch(submitFormRegister());
            store.dispatch(redirectTo('/login'));
          },
        )
        .catch(
          (error) => {
            store.dispatch(saveErrors(error.request.responseText));
          },
        )
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

export default authMiddleware;
