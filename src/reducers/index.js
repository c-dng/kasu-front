import { combineReducers } from 'redux';

import userReducer from './user';
import chatReducer from './chat';
import globalReducer from './global';
import searchReducer from './search';
import mangaReducer from './manga';

const rootReducer = combineReducers({
  user: userReducer,
  chat: chatReducer,
  global: globalReducer,
  search: searchReducer,
  manga: mangaReducer,
});

export default rootReducer;
