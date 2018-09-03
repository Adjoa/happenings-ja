import React from 'react';
import { Link } from 'react-router-dom';
import { formatDescription } from '../helpers';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

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
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class EventsListItem extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  
  render() {
    const descriptionAvailable = this.props.event.description;
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
               { descriptionAvailable ? formatDescription(event.description) : "No description provided." }
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={this.handleOpen} size="small" color="primary">Details</Button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
              >
              <div style={getModalStyle()} className={classes.paper}>
                <Typography>{ event.start_time }</Typography>
                <Typography>{ event.end_time }</Typography>
                <Typography>{ event.name }</Typography>
                <Typography>{ descriptionAvailable ? event.description : "No description provided." }</Typography>
              </div>
            </Modal>
          </CardActions>
        </Card>
    );
  }
}

export default withStyles(styles)(EventsListItem);
