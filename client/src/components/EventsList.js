import React from 'react';
import EventsListItem from './EventsListItem';
import EventShow from '../containers/EventShow';

const EventsList = ({ events }) => {
  const renderEvents = events.map(event => 
    <li key={event.id}>
      <EventsListItem event={event} />
    </li>
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