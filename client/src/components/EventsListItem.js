import React from 'react';
import { Link } from 'react-router-dom';
import { formatDescription } from '../helpers';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


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
    const descriptionAvailable = this.props.event.description;
    const { classes } = this.props;
    
    return (
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="headline" component="h2">
              { this.props.event.name }
            </Typography>
            <Typography>
              { this.props.event.start_time }
            </Typography>
            <Typography>
               { descriptionAvailable ? formatDescription(this.props.event.description) : "No description provided." }
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" component={Link} to={`/events/${this.props.event.id}`}>
              Details
            </Button>
          </CardActions>
        </Card>
    );
  }
}

export default withStyles(styles)(EventsListItem);
