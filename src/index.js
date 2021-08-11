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
  // allows front routing
  <Router>
    {/* implants redux store mechanism */}
    <Provider store={store}>
      {/* PersistGate is a react specific component for redux-persist integration */}
      <PersistGate loading={<Loading />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </Router>
);

const target = document.getElementById('root');

ReactDom.render(rootReactElement, target);
