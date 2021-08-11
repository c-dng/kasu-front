import { combineReducers } from 'redux';

import userReducer from './user';
import chatReducer from './chat';
import globalReducer from './global';
import searchReducer from './search';
import mangaReducer from './manga';

// using combineReducers to allow for subdivision of state, making it more clear.
const rootReducer = combineReducers({
  user: userReducer,
  chat: chatReducer,
  global: globalReducer,
  search: searchReducer,
  manga: mangaReducer,
});

export default rootReducer;
