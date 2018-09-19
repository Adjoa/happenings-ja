import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/eventActions';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
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
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class EventForm extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      name: '',
      start_time: '',
      end_time: '',
      address: {
        line1: '',
        line2: '',
        city:'',
        parish:'',
        country: 'Jamaica'
      },
      description: ''
    }
  }
  
  handleOpen = () => {
    this.setState({ open: true });
  };
  
  handleClose = () => {
    this.setState({ open: false });
  };
  
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }
  
  handleAddressChange = (event) => {
    const { address } = this.state;
    const {value, name } = event.target
    this.setState({
      address: {
        ...address,
        [name] : value
      }
    }); 
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    
    let requiredFields = [
      this.state.name,
      this.state.start_time,
      this.state.address.line1,
      this.state.address.city,
      this.state.address.parish
      ]
    
    let result = requiredFields.filter(field => field.length === 0);
    console.log(result);
    
    if(result.length  === 0) {
      this.props.addEvent(this.state);
      event.currentTarget.reset()
    }
  }
  
  render() {
    const { classes, event } = this.props;
    
    return(
      <div>
        <Button onClick={this.handleOpen} size="small" color="primary">
          Submit an event
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div className={classes.paper}>
          <form onSubmit={this.handleSubmit} >
              <Typography component="h2">Event Info</Typography>
              
              <TextField
                name="name"
                label="Name"
                className={classNames(classes.textField, classes.dense)}
                helperText="Required*"
                onChange={this.handleChange}
                margin="normal"
              />
              
              <TextField
                name="start_time"
                label="Start Time"
                className={classNames(classes.textField, classes.dense)}
                helperText="Required*"
                onChange={this.handleChange}
                margin="normal"
              />
              
              <TextField
                name="end_time"
                label="End Time"
                className={classNames(classes.textField, classes.dense)}
                onChange={this.handleChange}
                margin="normal"
              />
                
              <h3>Address</h3>
              
                <TextField
                  name="line1"
                  label="Line 1"
                  className={classNames(classes.textField, classes.dense)}
                  helperText="Required *"
                  onChange={this.handleAddressChange}
                  margin="normal"
                />
 
                <TextField
                  name="line2"
                  label="Line 2"
                  className={classNames(classes.textField, classes.dense)}
                  onChange={this.handleChange}
                  margin="normal"
                />
                
                <TextField
                  name="city"
                  label="City"
                  className={classNames(classes.textField, classes.dense)}
                  helperText="Required *"
                  onChange={this.handleAddressChange}
                  margin="normal"
                />
                
                <TextField
                  name="parish"
                  label="Parish"
                  className={classNames(classes.textField, classes.dense)}
                  helperText="Required *"
                  onChange={this.handleAddressChange}
                  margin="normal"
                />
                  
              <TextField
                name="description"
                label="Description"
                className={classNames(classes.textField, classes.dense)}
                onChange={this.handleChange}
                margin="normal"
              />
                
            <input type="submit" value="Submit"/>
          </form>
          </div>
        </Modal>
      </div>
    );
  }
};

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch)
}

const EventFormWrapper =  connect(null, mapDispatchToProps)(EventForm)
export default withStyles(styles)(EventFormWrapper);