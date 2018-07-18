import React from 'react';
import { Link } from 'react-router-dom';
import { formatDescription } from '../helpers';

const EventsListItem = ({ event }) => {
  const descriptionAvailable = event.description
  
  return(
    <div>
      <span>{ event.start_time }</span>
      <h2>{ event.name }</h2>
      <p>{ descriptionAvailable ? formatDescription(event.description) : "No description provided." }</p>
      <Link to={`/events/${event.id}`}>See More</Link>
    </div>
  );
};
  
export default EventsListItem;