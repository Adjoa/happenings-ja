import React from 'react'
 
class EventForm extends React.Component {
  constructor() {
    super();
    let initialState = {
        event: {
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
    
    this.state = initialState;
  }
  
  handleChange = (event) => {
    console.log(event.target)
    const { value, name } = event.target;
    this.setState({ [name]: value });
    console.log(this.state)
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
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
              name="event[name]"
              onChange={this.handleChange} />
            <label>Start</label>
            <input type="text" 
              name="event[start_time]"
              onChange={this.handleChange} />
            <label>End</label>
            <input type="text" 
              name="event[end_time]"
              onChange={this.handleChange} />
            <h3>Address</h3>
              <label>Line 1</label>
              <input type="text" 
                name="event[address][line1]"
                onChange={this.handleChange} />
              <label>Line 2</label>
              <input type="text" 
                name="event[address][line2]"
                onChange={this.handleChange} />
              <label>City</label>
              <input type="text" 
                name="event[address][city]"
                onChange={this.handleChange} />
              <label>Parish</label>
              <input type="text" 
                name="event[address][parish]"
                onChange={this.handleChange} />
            <h3>Description</h3>
            <input type="textarea"
              name="event[description]"
              onChange={this.handleChange} />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
};

export default EventForm;