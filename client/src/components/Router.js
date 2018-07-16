import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from '../components/Welcome';
import App from '../containers/App';
import NotFound from '../components/NotFound';

const Router = () => (  
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/search" component={App} />
      <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
  );

export default Router;