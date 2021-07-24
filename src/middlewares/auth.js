import axios from 'axios';
import { LOGIN_USER, REGISTER_USER, saveUser, LOGOUT_USER } from 'src/actions/user';

const axiosInstance = axios.create(
  {
    baseURL: 'https://api.kasu.laetitia-dev.com/',
  },
);

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN_USER: {
      const { pseudo, password } = store.getState().user;
      axiosInstance
        .post('/api/login_check', { username: pseudo, password })
        .then(
          (response) => {
            console.log(response);

            store.dispatch(saveUser(response.data));

            axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
            localStorage.setItem('token', response.data.token);
          },
        );
      next(action);
      break;
    }
    case LOGOUT_USER:
      localStorage.removeItem('token');
      delete axiosInstance.defaults.headers.common.Authorization;
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
      axiosInstance
        .post('/api/v1/user/add', {
          email,
          firstname: firstName,
          lastname: lastName,
          pseudo,
          password,
          address,
          zip_code: zipCode,
          city,
          status: 1,
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
              status: 1,
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
              status: 1,
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
