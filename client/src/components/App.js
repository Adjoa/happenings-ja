import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import NavBar from './NavBar';
import Welcome from './Welcome';
import EventsPage from './EventsPage';
import NotFound from './NotFound';
import Footer from './Footer';

import EventForm from '../containers/EventForm';
import EventShow from '../containers/EventShow';

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
            <Route exact path="/events" component={EventsPage} />
            <Route exact path="/events/new" component={EventForm} />
            <Route path={`/events/:eventId`} component={EventShow} />
            <Route component={NotFound} />
          </Switch>
          {/* <EventsPage events={ this.props.events.events } />*/}
          <Footer/>
        </div> : "Loading..."
      }
      </div>
    );
  }
}

export default App;
