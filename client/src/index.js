import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import WrapperApp from './containers/WrapperApp';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const router = (
  <Provider store={store} >
    <BrowserRouter>
      <WrapperApp/>
    </BrowserRouter>
  </Provider>
  )

render(router, document.getElementById('root'));
registerServiceWorker();


    
  