import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import NavBar from './NavBar';
import Welcome from './Welcome';
import NotFound from './NotFound';
import Footer from './Footer';

import EventsPage from '../containers/EventsPage';

import CssBaseline from '@material-ui/core/CssBaseline';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div>
          <Header/>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/events" component={EventsPage} />
            <Route component={NotFound} />
          </Switch>
          <Footer/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;


