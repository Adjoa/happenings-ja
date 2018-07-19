import React from 'react';
import EventsList from '../components/EventsList';
import EventShow from './EventShow';
import EventForm from './EventForm';

class EventsPage extends React.Component {
  componentDidMount() {
    this.props.getEvents()
  }
  
  render() {
    let eventsReady = !this.props.loading;
  
    if(eventsReady) {
      return (
        <div>
          <EventsList events={ this.props.events }/>
        </div>
      );
    } 
    else {
      return ( <div>Loading...</div>)
    }
  }
}

export default EventsPage;


