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
          <label>"Address"</label>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input type="submit" />
        </form>
      </div>
    );
  }
};
 
export default EventForm;