import React from 'react';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import EventsPage from '../components/EventsPage';
import Footer from '../components/Footer';

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
          <EventsPage events={ this.props.events.events } />
          <Footer/>
        </div> : "Loading..."
      }
      </div>
    );
  }
}

export default App;
