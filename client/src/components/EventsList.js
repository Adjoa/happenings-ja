import React from 'react';
import EventsListItem from './EventsListItem';

const EventsList = (props) => {
  const eventsListItems = props.events.map(listItem => 
    <li key={listItem.id}>
      <EventsListItem event={listItem} />
    </li>
  );
  
  return(
    <div>
      <div>
        <ul>
          {eventsListItems}
        </ul>
      </div>
    </div>
  );
}
  
export default EventsList;