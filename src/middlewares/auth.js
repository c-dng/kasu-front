import axios from 'axios';
import { LOGIN_USER, saveUser, LOGOUT_USER } from 'src/actions/user';

const axiosInstance = axios.create(
  {
    baseURL: 'http://localhost:3000',
  },
);

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN_USER: {
      const { email, password } = store.getState().user;
      axiosInstance
        .post('/login', { email, password })
        .then(
          (response) => {
            console.log(response);

            store.dispatch(saveUser(response.data));

            axiosInstance.defaults.headers.common.Authorization = `bearer ${response.data.token}`;
          },
        );
      next(action);
      break;
    }
    case LOGOUT_USER:

      delete axiosInstance.defaults.headers.common.Authorization;
      next(action);
      break;

    default:
      next(action);
  }
};

export default authMiddleware;
