import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'; // This allows to merge two-levels deep (a combined reducer)
import authMiddleware from 'src/middlewares/auth';
import reducer from 'src/reducers';
import chatMiddleware from 'src/middlewares/chat';
import contactAdmin from 'src/middlewares/contactAdmin';
import searchMiddleware from 'src/middlewares/search';


const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(authMiddleware, chatMiddleware, contactAdmin, searchMiddleware),
);

// const store = createStore(reducer, enhancers);
export const store = createStore(persistedReducer, enhancers);
export const persistor = persistStore(store);
