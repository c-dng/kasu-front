import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'; // This allows to merge two-levels deep (a combined reducer)
import authMiddleware from 'src/middlewares/auth';
import reducer from 'src/reducers';
import chatMiddleware from 'src/middlewares/chat';
import contactAdminMiddleware from 'src/middlewares/contactAdmin';
import searchMiddleware from 'src/middlewares/search';
import updateUser from 'src/middlewares/updateUser';
import mangaMiddleware from 'src/middlewares/manga';
import globalMiddleware from 'src/middlewares/global';

// redux-persist used to make the state persist in localstorage, so that on refresh for example
// user's display is not impacted by re-init of state.

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    authMiddleware,
    chatMiddleware,
    contactAdminMiddleware,
    searchMiddleware,
    updateUser,
    mangaMiddleware,
    globalMiddleware,
  ),
);

export const store = createStore(persistedReducer, enhancers);
export const persistor = persistStore(store);
