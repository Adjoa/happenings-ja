import React from 'react';
import { formatDescription } from '../helpers';
import Button from '@material-ui/core/Button';
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
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class EventShow extends React.Component {
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
      <div>
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
      </div>
      ) 
  }
}

export default withStyles(styles)(EventShow);