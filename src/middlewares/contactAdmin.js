import axios from 'axios';
import { SUBMIT_FORM, saveMessage } from 'src/actions/global';

const axiosInstance = axios.create(
  {
    baseURL: 'https://api.kasu.laetitia-dev.com/',
  },
);

const token = localStorage.getItem('token');
if (token) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const contactAdminMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_FORM: {
      const { object, content } = store.getState().global;
      axiosInstance
        .post('api/v1/user/1/contact-admin', { object, content })
        .then(
            (response) => {
            console.log(response.data);
            store.dispatch(saveMessage(response.data));
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