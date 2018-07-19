import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import NavBar from './NavBar';
import Welcome from './Welcome';
import EventsPage from './EventsPage';
import NotFound from './NotFound';
import Footer from './Footer';

class App extends React.Component {
  componentDidMount() {
    this.props.getEvents()
  }
  
  render() {
    let eventsReady = !this.props.loading;
    
    return (
      <div>
      { eventsReady ?
        <div>
          <Header/>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/events" component={EventsPage} />
            <Route component={NotFound} />
          </Switch>
          <Footer/>
        </div> : "Loading..."
      }
      </div>
    );
  }
}

export default App;
