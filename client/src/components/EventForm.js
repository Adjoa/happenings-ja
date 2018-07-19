import React from 'react'
 
class EventForm extends React.Component {
  constructor() {
    super();
    
    this.state = {
      organizer: {
        name: '',
        email: '',
        phone: '',
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
    }
  }
  
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
  }
  
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} >
          <h2>Organizer Info</h2>
            <label>Name</label>
            <input type="text" name="organizer[name]"
              onChange={this.handleChange} />
            <label>Email</label>
            <input type="email" name="organizer[email]"
              onChange={this.handleChange} />
            <label>Phone</label>
            <input type="tel" name="organizer[phone]"
              onChange={this.handleChange} />
          <h2>Event Info</h2>
            <label>Name</label>
            <input type="text" 
              name="organizer[event][name]"
              onChange={this.handleChange} />
            <label>Start</label>
            <input type="datetime-local" 
              name="organizer[event][start_time]"
              onChange={this.handleChange} />
            <label>End</label>
            <input type="datetime-local" 
              name="organizer[event][end_time]"
              onChange={this.handleChange} />
            <h3>Address</h3>
              <label>Line 1</label>
              <input type="text" 
                name="organizer[event][address][line1]"
                onChange={this.handleChange} />
              <label>Line 2</label>
              <input type="text" 
                name="organizer[event][address][line2]"
                onChange={this.handleChange} />
              <label>City</label>
              <input type="text" 
                name="organizer[event][address][city]"
                onChange={this.handleChange} />
              <label>Parish</label>
              <input type="text" 
                name="organizer[event][address][parish]"
                onChange={this.handleChange} />
            <h3>Description</h3>
            <input type="textarea"
              name="organizer[event][description]"
              onChange={this.handleChange} />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
};
 
export default EventForm;