import React from 'react';
import { Link } from 'react-router-dom';
import { formatDescription } from '../helpers';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import EventShow from './EventShow';

const styles = theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
});

class EventsListItem extends React.Component {
  render() {
    const { classes, event } = this.props;
    
    return (
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="headline" component="h2">
              { event.name }
            </Typography>
            <Typography>
              { event.start_time }
            </Typography>
            <Typography>
               { event.description ? formatDescription(event.description) : "No description provided." }
            </Typography>
          </CardContent>
          <CardActions>
          <EventShow event={event} />
          </CardActions>
        </Card>
    );
  }
}

export default withStyles(styles)(EventsListItem);
