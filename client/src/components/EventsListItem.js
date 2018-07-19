import React from 'react';
import { Link } from 'react-router-dom';
import { formatDescription } from '../helpers';

const EventsListItem = ({ event }) => {
  const descriptionAvailable = event.description
  
  return(
    <div>
      <span>{ event.start_time }</span>
      <Link key={event.id} to={`/events/${event.id}`}>{ event.name }</Link>
      <p>{ descriptionAvailable ? formatDescription(event.description) : "No description provided." }</p>
    </div>
  );
};
  
export default EventsListItem;