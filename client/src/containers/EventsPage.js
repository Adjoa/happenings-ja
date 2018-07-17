import React from 'react';
import { getEvents } from '../actions/eventActions';

class EventsPage extends React.Component {
  componentDidMount() {
    getEvents()
  }

  render() {
    return (
      <div>
        <p> A list of events</p>
      </div>
    );
  }
}

export default EventsPage;
