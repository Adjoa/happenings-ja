import React from 'react';
import EventsList from '../components/EventsList';

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


