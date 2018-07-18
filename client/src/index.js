import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Router from './components/Router';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

render(
  <Provider store={store} >
  <Router />
  </Provider>, document.getElementById('root')
  );

registerServiceWorker();