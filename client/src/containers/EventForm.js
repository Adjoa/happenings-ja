import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/eventActions';
 
class EventForm extends React.Component {
  constructor() {
    super();
    let initialState = {
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
    
    this.state = initialState;
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
    console.log(this.state);
    this.props.addEvent(this.state);
    this.setState(this.initialState);
  }
  
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} >
          <h2>Event Info</h2>
            <label>Name</label>
            <input type="text" 
              name="name"
              onChange={this.handleChange} />
            <label>Start</label>
            <input type="text" 
              name="start_time"
              onChange={this.handleChange} />
            <label>End</label>
            <input type="text" 
              name="end_time"
              onChange={this.handleChange} />
            <h3>Address</h3>
              <label>Line 1</label>
              <input type="text" 
                name="line1"
                onChange={this.handleAddressChange} />
              <label>Line 2</label>
              <input type="text" 
                name="line2"
                onChange={this.handleAddressChange} />
              <label>City</label>
              <input type="text" 
                name="city"
                onChange={this.handleAddressChange} />
              <label>Parish</label>
              <input type="text" 
                name="parish"
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