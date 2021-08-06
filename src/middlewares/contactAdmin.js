import {
  SUBMIT_FORM, saveMessage, setLoadingFalse, setLoadingTrue,
} from 'src/actions/global';
import api from 'src/api';

const token = localStorage.getItem('token');
if (token) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const contactAdminMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_FORM: {
      store.dispatch(setLoadingTrue());
      const userId = store.getState().user.data.id;
      const { object, content } = store.getState().global;
      api
        .post(`api/v1/user/${userId}/contact-admin`, { object, content })
        .then(
          (response) => {
            store.dispatch(saveMessage(response.data));
            store.dispatch(setLoadingFalse());
          },
        )
        .catch(() => {
          store.dispatch(setLoadingFalse());
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default contactAdminMiddleware;
