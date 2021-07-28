import { combineReducers } from 'redux';

import userReducer from './user';
import chatReducer from './chat';
import globalReducer from './global';

const rootReducer = combineReducers({
  user: userReducer,
  chat: chatReducer,
  global: globalReducer,
});

export default rootReducer;
