import React from 'react';
import { Link } from 'react-router-dom';
import EventsListItem from './EventsListItem';

import Grid from '@material-ui/core/Grid';

const EventsList = ({ events }) => {
  const renderEvents = events.map(event => 
    <Link key={event.id} to={`/events/${event.id}`}>
      <EventsListItem event={event} />
    </Link>
  );
  
  return(
    <div>
      <div>
       <Grid container spacing={16}>
        <ul>
          { renderEvents }
        </ul>
        </Grid>
      </div>
    </div>
  );
}
  
export default EventsList;