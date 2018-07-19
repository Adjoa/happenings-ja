import React from 'react';
import EventsList from '../components/EventsList';
import EventShow from '../containers/EventShow';
import EventForm from '../containers/EventForm';

class EventsPage extends React.Component {
  render() {
    return (
      <div>
        <EventsList events={ this.props.events }/>
      </div>
    );
  }
}

export default EventsPage;


