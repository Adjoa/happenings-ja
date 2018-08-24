import React from 'react';
import EventsListItem from './EventsListItem';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
});

class EventsList extends React.Component {
  render() {
    const { events, classes } = this.props;
    
    const renderEvents = events.map(event =>
      <Grid item key={event} sm={6} md={4} lg={3}>
        <EventsListItem event={event} />
      </Grid>
    );
  
    return(
      <React.Fragment>
        <CssBaseline />
        <main>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            <Grid container spacing={40}>
              { renderEvents }
            </Grid>
          </div>
        </main>
      </React.Fragment>
    );
  }
}
  
// export default EventsList;
export default withStyles(styles)(EventsList);