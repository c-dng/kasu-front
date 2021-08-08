import {
  APP_INIT,
  APP_DESTRUCT,
} from 'src/actions/global';
import {
  wsConnect,
  wsDisconnect,
} from 'src/actions/chat';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case APP_INIT: {
      store.dispatch(wsConnect());
      next(action);
      break;
    }
    case APP_DESTRUCT: {
      store.dispatch(wsDisconnect());
      next(action);
      break;
    }
    default:
      next(action);
      break;
  }
};
