import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import App from 'src/containers/App';
import { store, persistor } from 'src/store';

import 'semantic-ui-css/semantic.min.css';
import Loading from './components/App/Loading';

const rootReactElement = (
  <Router>
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </Router>
);

const target = document.getElementById('root');

ReactDom.render(rootReactElement, target);
