import React from 'react'
 
class EventForm extends React.Component {
  render() {
    return(
      <div>
        <form>
          <h2>Organizer Info</h2>
            <label>Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="email"></input>
            <label>Phone</label>
            <input type="tel"></input>
          <h2>Event Info</h2>
            <label>Name</label>
            <input type="text"></input>
            <label>Time</label>
            <input type="datetime-local"></input>
            <h3>Address</h3>
              <label>Line 1</label>
              <input type="text"></input>
              <label>Line 2</label>
              <input type="text"></input>
              <label>City</label>
              <input type="text"></input>
              <label>Parish</label>
              <input type="text"></input>
          <input type="submit" />
        </form>
      </div>
    );
  }
};
 
export default EventForm;