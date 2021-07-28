import { SUBMIT_FORM, saveMessage } from 'src/actions/global';
import api from 'src/api';
import { setLoadingFalse, setLoadingTrue } from '../actions/global';

const token = localStorage.getItem('token');
if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const contactAdminMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_FORM: {
      store.dispatch(setLoadingTrue());
      const { object, content } = store.getState().global;
      api
        .post('api/v1/user/1/contact-admin', { object, content })
        .then(
            (response) => {
            console.log('Post and set save message succeeded', response.data);
            store.dispatch(saveMessage(response.data));
            store.dispatch(setLoadingFalse());
            },
        )
        .catch((error) => {
          store.dispatch(setLoadingFalse());
          console.log('Post and set save message failed', error)
        });     
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default contactAdminMiddleware;