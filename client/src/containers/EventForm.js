import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/eventActions';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
 
 function rand() {
  return Math.round(Math.random() * 20) - 10;
}

class EventForm extends React.Component {
  constructor() {
    super();
    this.state = {
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
    return(
      <div>
        <form onSubmit={this.handleSubmit} >
          <h2>Event Info</h2>
            <label>Name</label>
            <input type="text" 
              name="name" placeholder="Name required*"
              onChange={this.handleChange} />
            <label>Start</label>
            <input type="text" 
              name="start_time" placeholder="Start time required*"
              onChange={this.handleChange} />
            <label>End</label>
            <input type="text" 
              name="end_time"
              onChange={this.handleChange} />
            <h3>Address</h3>
              <label>Line 1</label>
              <input type="text" 
                name="line1" placeholder="Line 1 required*"
                onChange={this.handleAddressChange} />
              <label>Line 2</label>
              <input type="text" 
                name="line2"
                onChange={this.handleAddressChange} />
              <label>City</label>
              <input type="text" 
                name="city" placeholder="City required*"
                onChange={this.handleAddressChange} />
              <label>Parish</label>
              <input type="text" 
                name="parish" placeholder="Parish required*"
                onChange={this.handleAddressChange} />
            <h3>Description</h3>
            <input type="textarea"
              name="description"
              onChange={this.handleChange} />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
};

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(null, mapDispatchToProps)(EventForm);