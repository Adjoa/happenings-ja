import React from 'react';
import { formatDescription } from '../helpers';

import Grid from '@material-ui/core/Grid';

const EventsListItem = ({ event }) => {
  const descriptionAvailable = event.description
  
  return(
    <Grid item lg={24}>
    <div>
      <span>{ event.start_time }</span>
      <h2>{ event.name }</h2>
      <p>{ descriptionAvailable ? formatDescription(event.description) : "No description provided." }</p>
    </div>
    </Grid>
  );
};
  
export default EventsListItem;