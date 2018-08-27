import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import NotFound from './NotFound';
import Footer from './Footer';
import EventsPage from '../containers/EventsPage';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends React.Component {
  render() {
    return (
        <div>
          <CssBaseline />
          <Header/>
          <NavBar/>
          <Switch>
            <Route path="/" component={EventsPage} />
            <Route path="/events" component={EventsPage} />
            <Route component={NotFound} />
          </Switch>
          <Footer/>
        </div>
    );
  }
}

export default App;
