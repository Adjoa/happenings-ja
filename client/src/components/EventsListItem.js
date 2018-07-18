import React from 'react';

const EventsListItem = ({ event }) => {
  const descriptionAvailable = event.description
  
  return(
    <div>
      <span>{ event.start_time }</span>
      <h2>{ event.name }</h2>
      <p>{ descriptionAvailable ? event.description : "No description provided." }</p>
    </div>
  );
};
  
export default EventsListItem;