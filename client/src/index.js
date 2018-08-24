import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const router = (
  <Provider store={store} >
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
  )

render(router, document.getElementById('root'));
registerServiceWorker();


    
  