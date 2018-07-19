import React from 'react';
import { Link } from 'react-router-dom';
import EventsListItem from './EventsListItem';
import EventShow from '../containers/EventShow';

const EventsList = ({ events }) => {
  const renderEvents = events.map(event => 
    <Link key={event.id} to={`/events/${event.id}`}>
      <EventsListItem event={event} />
    </Link>
  );
  
  return(
    <div>
      <div>
        <ul>
          { renderEvents }
        </ul>
      </div>
    </div>
  );
}
  
export default EventsList;