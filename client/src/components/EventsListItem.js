import React from 'react';
import { formatDescription } from '../helpers';

import Grid from '@material-ui/core/Grid';

class EventsListItem extends React.Component {
  render() {
    const descriptionAvailable = this.props.event.description
    
    return(
      <Grid item lg={24}>
      <div>
        <span>{ this.props.event.start_time }</span>
        <h2>{ this.props.event.name }</h2>
        <p>{ descriptionAvailable ? formatDescription(this.props.event.description) : "No description provided." }</p>
      </div>
      </Grid>
    );
  }
};
  
export default EventsListItem;