import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Welcome from './components/Welcome';
import WrapperApp from './components/WrapperApp';
import EventForm from './components/EventForm';
import EventShow from './containers/EventShow';
import NotFound from './components/NotFound';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const router = (
  <Provider store={store} >
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/events" component={WrapperApp} />
        <Route exact path="/events/new" component={EventForm} />
        <Route path={`/events/:eventId`} component={EventShow} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
  )

render(router, document.getElementById('root'));
registerServiceWorker();


    
  