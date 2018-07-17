import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import Welcome from '../components/Welcome';
import EventsPage from '../containers/EventsPage';
import NotFound from '../components/NotFound';

const Router = () => (  
    <BrowserRouter>
    <div>
      <Header/>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/events" component={EventsPage} />
        <Route component={NotFound} />
      </Switch>  
      <Footer/>
    </div>
    </BrowserRouter>
  );

export default Router;