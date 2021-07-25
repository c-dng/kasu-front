import { createStore, applyMiddleware, compose } from 'redux';

import authMiddleware from 'src/middlewares/auth';
import reducer from 'src/reducers';
import chatMiddleware from 'src/middlewares/chat';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(authMiddleware, chatMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
