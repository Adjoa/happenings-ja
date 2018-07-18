import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers'
import Router from './components/Router';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
  <Provider store={ store } >
  <Router />
  </Provider>, document.getElementById('root')
  );

registerServiceWorker();